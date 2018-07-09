import React, { Component } from 'react';

// import redux method
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import component 
import PostBox from '../../common/postbox';
import Spinner from '../../common/spinner';

// import actions
import { getListPost } from '../../../actions/post';

// import style
import './styles/style.css';


class Post extends Component  {


  componentWillMount(){
    this.props.getListPost();
  }
  getPost = ()=> {
    const item =  this.props.postList.map(item=>{
      return   <PostBox key={item.id} title={item.title} description={item.body} />
    })

    return <ul className='post-box'>{item}</ul>
  }
  render(){
    return (
      <div className='post-container'>
        <Link to='/' className='go-back'>Go Home </Link>

      <h1>Post Items</h1>
        {
          !this.props.isFetchPost ? this.getPost() :  <Spinner/>
        }
      </div>
    )
  }

}


const mapStatetoProps = (state)=> {
  return {
    'postList': state.getPostList.postList,
    isError: state.getPostList.isError,
    isFetchPost: state.getPostList.isFetchPost
  }
}

export default connect(mapStatetoProps, { getListPost })(Post);