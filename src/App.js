import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Container from './components/Container';
export default class App extends Component {
  
  constructor()
  {
    super();
    this.state = {
      tasks: [
        {
          title: 'Harsh Malhotra',
          description: 'Hi guys hahahah',
        }
      ]
      
    }
  }

  addTask = (t, d) => {
    
    var newTask = this.state.tasks;
    newTask.push({
      title: t,
    description:d})

    this.setState({ newTask });
    console.log("inside add task");
    console.log(this.state);
  
  }


  render() {
    const { tasks } = this.state;
    
    return (
      <div>

      
  <Header />
      <div id="main">
      
        
          <div id="left">
          <div id="background"> </div>  
      </div>
 
          <div id="container">
            <Container tasks={tasks} addtask={this.addTask}/>
          </div>
    


        </div>

      </div>
    )
  }
}
