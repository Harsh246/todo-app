import React, { Component } from 'react'
import './Task.css';
export default class Task extends Component {

  constructor()
{
  super();
  this.myRef= React.createRef();

  }
  handleDelete = () => {

    console.log(this.props.task.id);

    this.props.deletetask(this.props.task.id);

  }

  handleDesc = () => {
   


  }

  completed = (e) => {

    e.target.disabled = "true";
    console.log(this.myRef.current);
    this.myRef.current.style.background = "#77ce7e";
    
  }
  
    render() {
        const { task } = this.props;
      
    return (
        <div id="taskbox" ref={this.myRef}>

            <input type="checkbox" onClick={this.completed} disabled={false} />
            
            <span onClick={this.handleDesc}>{task.title}</span>
            
           
            <button onClick={this.handleDelete}>DELETE</button>
      </div>
    )
  }
}
