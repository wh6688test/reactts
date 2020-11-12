import React from 'react';
import './App.css';
import Footer from './apps/layout/Footer';
import MainForm from './apps/forms/MainForm'

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
