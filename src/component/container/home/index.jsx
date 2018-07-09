import React, { Component } from 'react';

import { Link } from 'react-router-dom';


class Container extends Component  {


  componentWillMount(){

  }
  render(){
    return (
      <div className='container'>
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