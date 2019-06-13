import React from 'react';

const Friend = (props) => {
  return (
    <div className='friend-card'>
      <img src={props.friend.image} />
      <h2>{props.friend.name}</h2>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>
      <div className='friend-btn'> 
        <button onClick={(event) => props.deleteFriend(event, props.friend.id)}>Unfriend</button>
        <button onClick={(event) => props.setUpdateForm(event, props.friend)}>Edit friend</button>
      </div>
    </div>
  )
}

export default Friend;