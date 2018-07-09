import React from 'react';

const PostBox = (props)=> {
  return <li className={props.className}>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </li>
}

export default PostBox