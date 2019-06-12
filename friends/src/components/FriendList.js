import React from 'react';
import Friend from './Friend'
import {Link } from 'react-router-dom';

const FriendList = (props) => {
  return (
    <div className='friend-container'>
      <Link to='/'><button>Back to Home</button></Link>
      {props.friends.map(item => <Friend clickHandler={props.clickHandler} key={item.id} friend={item}/>)}
      <Link to='/add'><button>Add more friends</button></Link>
    </div>
  )
}

export default FriendList;