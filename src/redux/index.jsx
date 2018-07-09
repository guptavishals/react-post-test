import { createStore,combineReducers, applyMiddleware } from "redux";
import ReduxThunk  from 'redux-thunk';

//import reducers
import { getPostList } from './post'; 
import { getAlbumList } from './album'; 

// Combine reducer
const rootReducers= combineReducers({
  getPostList,
  getAlbumList
});

export default createStore (rootReducers,applyMiddleware(ReduxThunk));