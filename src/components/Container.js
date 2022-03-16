import React, { Component } from 'react';
import './Container.css';
import Task from './Task';
 
 export default class Container extends Component {
   render() {
     return (
         <div id="box">
             <div id="form">

               <h3>ADD TASK: </h3>
                    <input type="text" />
                     <button type="button" > Add</button>
                 
             </div>

             <div id="list">
                 <Task />
                 <Task/>
                 <Task />
                 <Task/>
                 <Task />
                 <Task/>
             </div>
       </div>
     )
   }
 }
 