import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoCard from './Layouts/TodoCard';
export class TodoItem extends Component {
  constructor (props){
   super(props);
   this.state={ editing:false,
                edittedTodo:'' ,
                edittedat: null,
                editingFirstTime: true
              }

  }
 
  /*getstyle=()=>{

   if(this.props.todo.completed)
    return{
     backgroundColor: 'lightgreen',
     textDecoration: 'line-through',
     textAlign: 'center'
     
   }

   else
   return{
     backgroundColor:'pink',
     textDecoration: 'none',
     textAlign: 'center'
   }

 } */

 handleEditing=(e) =>{

  if(this.state.editingFirstTime)
{
 this.setState({editing:true,
 edittedTodo:this.props.todo.title,
 edittedat:Date.now()});
 this.setState({editingFirstTime:false},()=>{
  this.props.editTodo(this.props.todo.id,this.state.edittedTodo,this.state.edittedat);
 });
 

}
 else
 {
  this.setState({editing:true,
  edittedTodo:e.target.value,
  edittedat:Date.now()},()=>{
    this.props.editTodo(this.props.todo.id,this.state.edittedTodo,this.state.edittedat);
  });

 }
 }

 

 handleEditingDone=(e)=>{
  if(e.keyCode===13)
  this.setState({ editing:false});
 }

 
 


  render() {
    
     const {id,title,madeat} =this.props.todo;
     var formattedtimestamp= new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(madeat) ;
     const editStyle=
     {
       backgroundColor:'white',
       width:'100%'
    };
      const viewStyle=
     {
       backgroundColor:'lightblue'
      
     }

     if(this.state.editing){
      viewStyle.display='none' ;
     }

     else
     {
       editStyle.display='none';
     }
     
     const btnStyle = {  
       backgroundColor:'red',
       color:'white',
       border: 'none',
       padding: '5px 8px',
       borderradius: '50%',
       cursor:'pointer',
       float: 'right'
     }
     
  
    return (
     
     <div>
      < div style= {viewStyle} onDoubleClick=
      {this.handleEditing} >
        <p>
      <input type="checkbox" onChange={ this.props.markComplete.bind(this,id)} />
        {title + "  made at  "  + formattedtimestamp}

      <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}> x </button>
       </p>

      </div>
    
      <input type="text" 
            style={editStyle} 
            onKeyDown={this.handleEditingDone}
            onChange={this.handleEditing}
            value={this.state.edittedTodo}/>
      <TodoCard todo={this.props.todo} delTodo={this.props.delTodo}/>
    </div>
    )
  }
} 



TodoItem.propTypes ={

  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired


}

export default TodoItem
