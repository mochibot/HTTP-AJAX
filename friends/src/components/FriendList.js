import React from 'react';
import Friend from './Friend'
import {Link } from 'react-router-dom';

const FriendList = (props) => {
  return (
    <div className='friend-container'>
      <Link to='/'><button>Back to Home</button></Link>
      <Link to='/add'><button>Add more friends</button></Link>
      {props.friends.map(item => <Friend setUpdateForm={props.setUpdateForm} deleteFriend={props.deleteFriend} key={item.id} friend={item}/>)}
    </div>
  )
}

export default FriendList;