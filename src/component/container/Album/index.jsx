import React, { Component } from 'react';

// import redux method
import { connect } from 'react-redux';

// import Link 
import { Link } from 'react-router-dom';

// import component 
import AlbumBox from '../../common/albumbox';
import Spinner from '../../common/spinner';

// import actions
import { getListAlbum } from '../../../actions/album';

// import style
import './styles/style.css';


class Album extends Component  {

  componentWillMount(){
    this.props.getListAlbum();
  }

  getAlbum = ()=> {
    const item =  this.props.albumList.map(item=>{
      return   <AlbumBox className={'album-item'} key={item.id} title={item.title} img={item.url} />
    })

    return <ul className='album-box'>{item}</ul>
  }

  render(){

    return (
      <div className='album-container'>
        <Link to='/' className='go-back'>Go Home </Link>
        <h1>Album Items</h1>
        {
          !this.props.isFetchAlbum ? this.getAlbum() :  <Spinner/>
        }
      </div>
    )

  }

}

const mapStatetoProps = (state)=> {
  return {
    'albumList': state.getAlbumList.albumList,
    isError: state.getAlbumList.isError,
    isFetchAlbum: state.getAlbumList.isFetchAlbum
  }
}

export default connect(mapStatetoProps, { getListAlbum })(Album);