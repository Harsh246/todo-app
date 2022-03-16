import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Container from './components/Container';
export default class App extends Component {
  render() {
    return (
      <div>

      
  <Header />
      <div id="main">
      
        
          <div id="left">
          <div id="background"> </div>  
      </div>
 
          <div id="container">
   <Container />
          </div>
    


        </div>
      </div>
    )
  }
}
