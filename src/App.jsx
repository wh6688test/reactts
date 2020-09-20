import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import HeaderForm from './apps/forms/HeaderForm.tsx'
import Body from './Body';
import Divider from './components/commons/Divider';
import {
  MDBNavbar, MDBRow, MDBCol, MDBBtn, MDBDataTable,
} from 'mdbreact';


function App() {
  return (
    <div className="App">
      
      <HeaderForm className="App-header"/>
      <Divider/>
      <div className="content" id="content">
        <Body/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
