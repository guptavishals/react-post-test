import {
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  POST_LIST_RESET,
} from  '../actions/index'

const INITIAL_STATE = {
  postList: '',
  isError: '',
  isFetchPost: true
}

// Redux for Post Listing
export const getPostList = (state = INITIAL_STATE, action) => {
  // console.log('action',state);
  
  switch(action.type){
    case POST_LIST_REQUEST:
    return {
      'postList' : '',
      'isError': '',
      'isFetchPost': true
    }
    case POST_LIST_SUCCESS:
    return {
      'postList' : action.data,
      'isError': '',
      'isFetchPost': false
    }
    case POST_LIST_FAIL:
    return {
      'postList' : '',
      'isError': action.error,
      'isFetchPost': false
    }
    case POST_LIST_RESET:
    return {
      'postList' : '',
      'isError': '',
      'isFetchPost': false
    }
    default: 
      return state;
  }
}