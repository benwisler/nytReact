import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Header from './components/Header'
import Form from './components/Form'


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Form} />
        {/* <Route path="/articles" component={Form} /> */}
        <Route exact path="/articles/:id" component={Form} />
      </Switch>
    </div>
  </Router>
);

export default App;