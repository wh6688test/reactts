import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Footer from './apps/layout/Footer';
import MainForm from './apps/forms/MainForm.tsx'
import Body from './apps/layout/Body';
import Divider from './components/commons/Divider';


function App() {
  return (
    <div className="App">
      
      <MainForm className="App-header"/>
      <Divider/>
      <div className="content" id="content">
        <Body/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
