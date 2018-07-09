import axios from 'axios';

import {
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  POST_LIST_RESET,
  ROOT_URL
} from './index';

let url = `${ROOT_URL+'/posts'}`;

export const getListPost = ()=> {

  return dispatch => {
      dispatch(fetchListPostRequest());

      axios.get(url).then((response)=>{

        if(response.request.status === 200) {

          const data = response.data.splice(0,10);
          dispatch(fetchListPost(data));
          return data;

        }
        return response;

      }).catch(err=> {
        if(err) {
          dispatch(fetchListPostFail(err));
        }
        return err;

      })
  }
}

// dispatcher method to fetch post
const fetchListPostRequest = ()=> {
    return {
      type: POST_LIST_REQUEST,
      isFetchPost: true,
    }
}

const fetchListPost= (data)=> {
  return {
    type: POST_LIST_SUCCESS,
    isFetchPost: false,
    data
  }
}

const fetchListPostFail = (error)=> {
  return {
    type: POST_LIST_FAIL,
    isFetchPost: true,
    error
  }
}


export const fetchListPostReset = ()=> {
  return {
    type: POST_LIST_RESET,
    isFetchPost: false
  }
}