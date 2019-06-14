import React from 'react';

class FriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      friend: {
        name: '',
        age: '',
        email: '',
        image: ''
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
        email: '',
        image: ''
      }
    })
  }

  render() {
    return (
      <div className='form-container' >
        <button onClick={this.props.cancelAction}>Cancel</button>
        <form className='friend-form' onSubmit={this.submitHandler}>
          <input type='text' placeholder='Enter name' name='name' onChange={this.inputText} value={this.state.friend.name} required />
          <input type='number' placeholder='Enter age' name='age' onChange={this.inputText} value={this.state.friend.age} required />
          <input type='string' placeholder='Enter image URL' name='image' onChange={this.inputText} value={this.state.friend.image} required />
          <input type='email' placeholder='Enter email' name='email' onChange={this.inputText} value={this.state.friend.email} required />
          <button>{this.props.activeFriend? 'Edit friend' : 'Add friend'}</button>
        </form>
        
      </div>
    )
  }
}

export default FriendForm;