import axios from 'axios';

import {
  ALBUM_LIST_REQUEST,
  ALBUM_LIST_SUCCESS,
  ALBUM_LIST_FAIL,
  ALBUM_LIST_RESET,
  ROOT_URL
} from './index';

let url = `${ROOT_URL+'/photos'}`;

export const getListAlbum = ()=> {

  return dispatch => {
      dispatch(fetchListAlbumRequest());

      axios.get(url).then((response)=>{

        if(response.request.status === 200) {
          const data = response.data.splice(0,10);
          
          dispatch(fetchListAlbum(data));
          return data;

        }
        return response;

      }).catch(err=> {
        if(err) {
          dispatch(fetchListAlbumFail(err));
        }
        return err;

      })
  }
}

// dispatcher method to fetch album
const fetchListAlbumRequest = ()=> {
    return {
      type: ALBUM_LIST_REQUEST,
      isFetchAlbum: true,
    }
}

const fetchListAlbum= (data)=> {
  return {
    type: ALBUM_LIST_SUCCESS,
    isFetchAlbum: false,
    data
  }
}

const fetchListAlbumFail = (error)=> {
  return {
    type: ALBUM_LIST_FAIL,
    isFetchAlbum: true,
    error
  }
}


export const fetchListAlbumReset = ()=> {
  return {
    type: ALBUM_LIST_RESET,
    isFetchAlbum: false
  }
}