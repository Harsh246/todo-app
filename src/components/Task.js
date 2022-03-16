import React, { Component } from 'react'
import './Task.css';
export default class 
 extends Component {
    render() {
        const { title, description } = this.props;
    return (
        <div id="taskbox">

            <input type="checkbox" />
            
            <span><h3>title</h3></span>
            
            <button>SHOW</button>
            <button>DELETE</button>
      </div>
    )
  }
}
