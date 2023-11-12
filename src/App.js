import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Student';

function App() {
  return (
    <>
      <div className='container'>
        <img src={logo} alt="logo" />
        <Student stdId="100876273" stdName="Ryan You" college="George Brown College, Toronto"/>
      </div>
    </>
  );
}

export default App;
