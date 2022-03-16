import React, { Component } from 'react'
import './Task.css';
export default class 
 extends Component {
    render() {
        const { task } = this.props;
      
    return (
        <div id="taskbox">

            <input type="checkbox"  />
            
            <span>{task.title}</span>
            
            <button>SHOW</button>
            <button>DELETE</button>
      </div>
    )
  }
}
