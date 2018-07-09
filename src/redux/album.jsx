import {
  ALBUM_LIST_REQUEST,
  ALBUM_LIST_SUCCESS,
  ALBUM_LIST_FAIL,
  ALBUM_LIST_RESET,
} from  '../actions/index'

const INITIAL_STATE = {
  albumList : '',
  isError: '',
  isFetchAlbum: true
}

// Redux for Album Listing
export const getAlbumList = (state = INITIAL_STATE, action) => {
  
  switch(action.type){
    case ALBUM_LIST_REQUEST:
    return {
      'albumList' : '',
      'isError': '',
      'isFetchAlbum': true
    }
    case ALBUM_LIST_SUCCESS:
    return {
      'albumList' : action.data,
      'isError': '',
      'isFetchAlbum': false
    }
    case ALBUM_LIST_FAIL:
    return {
      'albumList' : '',
      'isError': action.error,
      'isFetchAlbum': false
    }
    case ALBUM_LIST_RESET:
    return {
      'albumList' : '',
      'isError': '',
      'isFetchAlbum': false
    }
    default: 
      return state;
  }
}