import React from 'react';
// Rout packages 
import  { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom'

// imported componets
import Container from '../component/container/home/index';
import Album from '../component/container/Album';
import Post from '../component/container/Post';

// function to create route
const createRoutes = (path,component) => <Route exact path={path} component={component} />   

// exported component
const Routes = ()=> {
  return <Router>
          <Switch>
            {createRoutes('/home',Container) }
            {createRoutes('/post',Post) }
            {createRoutes('/album',Album) }
            <Redirect from='/' to='/home' />
          </Switch>
        </Router> 
}

export default Routes;