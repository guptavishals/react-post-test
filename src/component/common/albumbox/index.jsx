import React from 'react';

const AlbumBox = (props)=> {
  return <li>
    <div className='imageBox'> 
      <img src={props.img} alt={props.title}/>
    </div>
    <h2>{props.title}</h2>
  </li>
}

export default AlbumBox;