import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import FormType from './components/pages/FormType'
import Landing from './components/pages/Landing'
import Admin from './components/admin/Admin'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/admin" component={Admin}/>
        <Route exact path="/:org" component={FormType}/>
      </Switch>
    </Router>
  );
}

export default App;
