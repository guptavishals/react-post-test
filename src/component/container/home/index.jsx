import React, { Component } from 'react';

import { Link } from 'react-router-dom';

// import style
import './styles/style.css';

class Container extends Component  {


  componentWillMount(){

  }
  render(){
    return (
      <div className='container'> 
        <h1>Go To</h1>
        <ul>
          <li>
            <Link to="/post" > Post </Link>
          </li>
          <li>
            <Link to="/album" >Album </Link>
          </li>
        </ul>
      </div>
    )
  }

}

export default Container;