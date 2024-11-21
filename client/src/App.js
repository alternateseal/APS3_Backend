import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '.component/pages/Home';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component=
        {Home} />
      </Switch>
    </Router>
      <Navbar />
    </>
  );
}

export default App;

/* CHANGE PLEASE */