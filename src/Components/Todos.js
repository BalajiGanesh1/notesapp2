import React, { Component } from 'react'
import TodoItem from './TodoItem.js'
import PropTypes from 'prop-types';
//import Searchbar from './Layouts/Searchbar.js'


export class Todos extends Component { 
  
  
  render() 
    { 
                   
          return  this.props.todos.map( (disp) =>(
            
          
            <TodoItem key={disp.id} todo ={disp} editTodo={this.props.editTodo} delTodo={this.props.delTodo} markComplete={this.props.markComplete}/>
              
            ));
                 
    }
}

    
/*The following is a goodpractise to list what all props have 
been gathered*/
Todos.propTypes ={
    todos:PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
}
export default Todos
