import React from 'react';

const PostBox = (props)=> {
  return <div className={props.className}>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </div>
}

export default PostBox