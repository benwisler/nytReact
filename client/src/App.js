import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Form from './components/Form/Form'
import Saved from './components/Saved'


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/saved/:id" component={Saved} />
      </Switch>
    </div>
  </Router>
);

export default App;