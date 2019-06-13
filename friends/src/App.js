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
      activeFriend: null
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

  addFriend = (event, friend) => {
    event.preventDefault();
    axios.post('http://localhost:5000/friends', friend)
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
  }

  setUpdateForm = (event, friend) => {
    event.preventDefault();
    this.setState({
      activeFriend: friend
    })
    this.props.history.push('/add')
  }

  updateFriend = (event, friend) => {
    event.preventDefault();
    axios.put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(response => {
        console.log(response);
        this.setState(prevState => {
          return ({
            friends: response.data,
          })
        })
      })
      .catch(err => console.log(err))
    this.setState({
      activeFriend: null
    })
  }

  deleteFriend = (event, id) => {
    event.preventDefault();
    axios.delete(`http://localhost:5000/friends/${id}`)
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
  }

  render() {
    return (
      <div className="App">
        <h2>My friends list</h2>
        <Route exact path='/' component={Initial} />
        <Route 
          path='/add' 
          render={(props) => (
            <FriendForm 
            {...props}
            addFriend={this.addFriend}
            updateFriend={this.updateFriend}
            activeFriend={this.state.activeFriend} />
          )}
        />
        <Route  
          path='/friends'
          render={(props) => (
            <FriendList 
              {...props}
              friends={this.state.friends}
              deleteFriend={this.deleteFriend}
              setUpdateForm={this.setUpdateForm}/>
          )}
        />
      </div>
    );
  }
}

export default App;
