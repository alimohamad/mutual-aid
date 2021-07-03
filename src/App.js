import { Router, Route } from 'react-router'

import FormType from './components/FormType'
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/:org" component={FormType}/>
    </Router>
  );
}

export default App;
