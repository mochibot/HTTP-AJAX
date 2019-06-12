import React from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import './App.css';

const Initial = () => {
  return (
    <Link to='/friends'>See all friends</Link>
  )
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      id: '',
      name: '',
      age: '',
      email: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        console.log(response);
        this.setState({
          friends: response.data
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  inputText = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addFriend = (event) => {
    event.preventDefault();
    const newFriend = {
      id: this.state.friends.length + 1,
      name: this.state.name,
      age: parseInt(this.state.age, 10),
      email: this.state.email
    }
    axios.post('http://localhost:5000/friends', newFriend)
      .then(response => {
        console.log(response);
        this.setState(prevState => {
          return ({
            friends: response.data,
          })
        })
      })
      .catch(error => {
        console.log(error);
      })
    this.setState(prevState => {
      return {
        id: '',
        name: '',
        age: '',
        email: ''
      }
    })
  }

  deleteFriend = (id) => {
    const updatedFriends = this.state.friends.filter(item => item.id !== id);
    this.setState({
      friends: updatedFriends
    })
  }

  render() {
    return (
      <div className="App">
        <h2>My friends list</h2>
        <Route exact path='/' component={Initial} />
        <Route  
          path='/friends'
          render={(props) => (
            <FriendList 
              {...props}
              friends={this.state.friends}
              clickHandler={this.deleteFriend}/>
          )}
        />
        <Route 
          path='/add' 
          render={(props) => (
            <FriendForm 
            {...props}
            inputText={this.inputText}
            submitHandler={this.addFriend}
            valueName={this.state.name}
            valueAge={this.state.age}
            valueEmail={this.state.email}/>
          )}
        />
      </div>
    );
  }
}

export default App;
