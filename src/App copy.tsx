import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Body from './Body';

function App() {
  return (
    <div className="App">
      <Header/>
      <br/>
      <div className="content" id="content">
        <Body/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
