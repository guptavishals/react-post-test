import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Redux Provider
import { Provider } from 'react-redux';
import store from './redux/index';
// Route
import Routes from './routes/index';


ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  
  , document.getElementById('root'));
registerServiceWorker();
