import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import FormType from './components/FormType'
import Landing from './components/Landing'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:org" component={FormType}/>
        <Route exact path="/" component={Landing}/>
      </Switch>
    </Router>
  );
}

export default App;
