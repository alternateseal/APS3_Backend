import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/pages/Home';

function App() {
  return (
    <>
      <div ClassName="header-wrapper">
        <Nav/>
      </div>
    </>
  );
}

export default App;

/* CHANGE PLEASE */