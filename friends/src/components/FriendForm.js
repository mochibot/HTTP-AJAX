import React from 'react';
import { Link } from 'react-router-dom';

class FriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      friend: {
        name: '',
        age: '',
        email: ''
      }
    }
  }

  componentDidMount() {
    if (this.props.activeFriend) {
      this.setState({
        friend: this.props.activeFriend
      })
    } 
  }

  inputText = (event) => {
    // make sure age is a number
    event.persist();
    let value = event.target.value;
    if (event.target.name === 'age') {
      value = parseInt(value, 10);
    }

    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [event.target.name]: value
      }
    }));
  }

  submitHandler = (event) => {
    event.preventDefault();
    if (this.props.activeFriend) {
      this.props.updateFriend(event, this.state.friend)
    } else {
      this.props.addFriend(event, this.state.friend)
    }
    this.setState({
      friend: {
        name: '',
        age: '',
        email: ''
      }
    })
  }

  render() {
    return (
      <div>
        <form className='friend-form' onSubmit={this.submitHandler}>
          <input type='text' placeholder='Enter name' name='name' onChange={this.inputText} value={this.state.friend.name}/>
          <input type='number' placeholder='Enter age' name='age' onChange={this.inputText} value={this.state.friend.age}/>
          <input type='email' placeholder='Enter email' name='email' onChange={this.inputText} value={this.state.friend.email}/>
          <button>{this.props.activeFriend? 'Edit friend' : 'Add friend'}</button>
        </form>
        <Link to='/friends'><button>Back to friends list</button></Link>
      </div>
    )
  }
}

export default FriendForm;