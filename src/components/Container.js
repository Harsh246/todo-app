import React, { Component } from 'react';
import './Container.css';
import Task from './Task';
 
 export default class Container extends Component {

     state = {
         title: '',
         desc:''
         
     }
     handleChange = (e) => {
         this.setState({
             [e.target.name]: [e.target.value],
         });
         
     }
     addtask = () =>
     {
         this.props.addtask(this.state.title, this.state.desc);
         this.setState({ title: '', desc: '' });
         }
     
     render() {
       
         const { tasks } = this.props;
        
         
     return (
         <div id="box">
             <div id="form">

                 <div id= "inputs">
                 <input type="text" name="title" id="title" value={this.state.title} placeholder='ADD TITLE'  onChange={this.handleChange}/>
                 <input type="text" name="desc" id="desc" value={this.state.desc} placeholder='ADD DESCRIPTION' onChange={this.handleChange} />
                     
                 </div>
                 <div>
<button type="button" onClick={this.addtask}>Add task</button>
                 </div>

                 
             </div>

             <div id="list">
                 {
                     tasks.map(item => {
                         
                         return <Task task={item} key="0" />
                     })
}
                
               
                
             </div>
       </div>
     )
   }
 }
 