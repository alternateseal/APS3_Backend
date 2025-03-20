import React from "react";
import Nav from './component/Nav';
import Index from './index/index';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className="header-wrapper">
        <Index />
        <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar />
      </div> 
    </>
  );
}

export default App;

/* CHANGE PLEASE */