import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Footer from './apps/layout/Footer';
import MainForm from './apps/forms/MainForm'
//import Body from './apps/layout/Body';
import Divider from './components/commons/Divider';


export function App() {
  return (
      <>
      <MainForm/>
      <Divider/>
      <Footer/>
      </>
  );
}
