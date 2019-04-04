import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import asyncComponent from './utils/asyncComponent';
const Layout = asyncComponent(() => import('./view/layout/index'));
const Login = asyncComponent(() => import('./view/login'));

class App extends React.Component {
  render() {
    return (
      <Router>
         <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/login' component={Login} />
            <Route path='/about'  component={Layout} />
        </Switch>
      </Router>
    );
  }
}

export default App;
