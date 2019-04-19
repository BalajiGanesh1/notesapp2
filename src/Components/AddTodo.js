import React, { Component } from 'react'
import PropTypes from 'prop-types';
import NewTodoBar from './Layouts/NewTodoBar';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../../src/AddTodo.css';
export class AddTodo extends Component {
    state={
        title:'',
        description:''
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

      const styles = {
        card: {
          marginLeft:'35%',
          
        },
       
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      };

    
    return (
     <form  onSubmit={this.onSubmit} style={{display:'flex',fontFamily:'Roboto'}}>
     <Card style={styles.card}>
      <CardContent>
        <Typography style={styles.title} color="textSecondary" gutterBottom>
              <input
                type="text"
                name="title"
                placeholder="Add Notes..."
                value={this.state.title}
                onChange={this.onChange}
              />
        </Typography>
      </CardContent>
    </Card>
     
     </form>
    )
  }
}

AddTodo.propTypes ={

    addTodo: PropTypes.func.isRequired
    
  }

export default AddTodo
