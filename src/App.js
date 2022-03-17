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
       
      ]
      
    }
  }

  addTask = (t, d) => {
    
    const rand = () => {
      return Math.random().toString(36).substr(2);
    };
    
    const token = () => {
      return rand() + rand();
    };
      
    var tno = token();

    var newTask = this.state.tasks;
    newTask.push({
      title: t,
      description: d,
      id: tno,
    completed:false})

    this.setState({tasks: newTask });
    console.log("inside add task");
    console.log(this.state);
  
  }

  deleteTask = (id) => {
    console.log("inside delete");
    console.log(id);
    var newTasks = this.state.tasks.filter(item => item.id != id);
    console.log(newTasks);

    this.setState({ tasks: newTasks }, () => {
      
    console.log(this.state);
    });


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
            <Container tasks={tasks} addtask={this.addTask} deletetask={this.deleteTask}/>
          </div>
    


        </div>

      </div>
    )
  }
}
