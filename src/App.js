import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Article from './components/Article'
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';
import * as ROUTES from './constants/routes'

export const App = () => {

  return (
    <Router>
      <div className="antialiased">
        <NavBar />
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home}/>
          <Route path={ROUTES.PROFILE} component={Profile}/>
          <Route path={ROUTES.ARTICLE} component={Article}/>
          <Route path={ROUTES.SIGN_UP} component={Signup}/>
          <Route path={ROUTES.LOGIN} component={Login}/>
        </Switch>
      </div>
    </Router>
  )
}