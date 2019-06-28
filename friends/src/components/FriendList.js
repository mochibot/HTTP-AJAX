import React from 'react';
import Friend from './Friend'
import {Link } from 'react-router-dom';

const FriendList = (props) => {
  return (
    <div className='friend-container'>
      <div className='friend-container-btn'>
        <Link to='/'><button>Back to Home</button></Link>
        <Link to='/add'><button>Add friend</button></Link>
      </div>
      <div className='friend-card-container'>
        {props.friends.map(item => <Friend setUpdateForm={props.setUpdateForm} deleteFriend={props.deleteFriend} key={item.id} friend={item}/>)}
      </div>
    </div>
  )
}

export default FriendList;