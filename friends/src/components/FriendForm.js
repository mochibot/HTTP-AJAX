import React from 'react';
import { Link } from 'react-router-dom';

const FriendForm = (props) => {
  return (
    <div>
      <form className='friend-form' onSubmit={props.submitHandler}>
        <input type='text' placeholder='Enter name' name='name' onChange={props.inputText} value={props.valueName}/>
        <input type='number' placeholder='Enter age' name='age' onChange={props.inputText} value={props.valueAge}/>
        <input type='email' placeholder='Enter email' name='email' onChange={props.inputText} value={props.valueEmail}/>
        <button>Add friend</button>
      </form>
      <Link to='/friends'><button>Back to friends list</button></Link>
    </div>
  )
}

export default FriendForm;