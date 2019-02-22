import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state={
        title:''
    }
  
  onChange =(e) =>{

    this.setState({[e.target.name]:e.target.value});
  }

  onSubmit =(e) =>{
    e.preventDefault();  
    var newtodo= this.state.title;              
    this.props.addTodo(newtodo);
    this.setState({title:''});
  }
    render() {
    return (
     <form  onSubmit={this.onSubmit} style={{display:'flex'}}>
     <input
       type="text"
       name="title"
       style={{flex: '10',padding:'5px'}}
       placeholder="Add Notes.."
       value={this.state.title}
       onChange= {this.onChange}

     />

     <input 
      type="submit"
      name="Submit"
      className="btn"
      style={{flex:'1'}}
      />
     
     </form>
    )
  }
}

AddTodo.propTypes ={

    addTodo: PropTypes.func.isRequired
    
  }

export default AddTodo
