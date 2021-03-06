import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../../../src/TodoCard.css';
// import TodoCardMenu from './TodoCardMenu.js';

const styles = {
  card: {
    minWidth: '90vw',
    backgroundColor:'lightgreen',
    width:'30vw',
    minHeight:'20vh'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    textAlign:'right',
    marginRight:10
  },
};

function TodoCard(props) {
  const { classes } = props;
 
  const bull = <span className={classes.bullet}>•</span>;
  const{ title,id,madeat}=props.todo;
  var formattedTimeStamp= new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit',minute: '2-digit'}).format(madeat) ;
  var currentTimeStamp= new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit',minute: '2-digit'}).format(Date.now()) ;
  var elapsedTimeInDays;
  var minimisedTimeStamp;
 // console.log(new Intl.DateTimeFormat('en-US', {month: '2-digit'}).format(madeat))

  if((currentTimeStamp.month===formattedTimeStamp.month)&& (currentTimeStamp.year===formattedTimeStamp.year))
  {
   
    if(currentTimeStamp.day===formattedTimeStamp.day)
      {
          elapsedTimeInDays = 0;
      }

      else
      elapsedTimeInDays=5;

  }

  else
  {
      elapsedTimeInDays=400;
  }

      if (elapsedTimeInDays <1) 
      {
         
        minimisedTimeStamp = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit' }).format(madeat);
      }
 

  
  else if(elapsedTimeInDays>2 && elapsedTimeInDays<=365)
  {
      var monthInWords;
      if(new Intl.DateTimeFormat('en-US', {month: '2-digit'}).format(madeat)==='01')
      {
          monthInWords="Jan"
      }
      else if(new Intl.DateTimeFormat('en-US', {month: '2-digit'}).format(madeat)==='02')
      {
          monthInWords="Feb"
      }
      if(new Intl.DateTimeFormat('en-US', {month: '2-digit'}).format(madeat)==='03')
      {
          monthInWords="Mar"
      }
      if(new Intl.DateTimeFormat('en-US', {month: '2-digit'}).format(madeat)==='04')
      {
          monthInWords="Apr"
      }
      if(new Intl.DateTimeFormat('en-US', {month: '2-digit'}).format(madeat)==='05')
      {
          monthInWords="May"
      }
      if(new Intl.DateTimeFormat('en-US', {month: '2-digit'}).format(madeat)==='06')
      {
          monthInWords="Jun"
      }
      if(new Intl.DateTimeFormat('en-US', {month: '2-digit'}).format(madeat)==='07')
      {
          monthInWords="Jul"
      }
      if(new Intl.DateTimeFormat('en-US', {month: '2-digit'}).format(madeat)==='08')
      {
          monthInWords="Aug"
      }
      if(new Intl.DateTimeFormat('en-US', {month: '2-digit'}).format(madeat)==='09')
      {
          monthInWords="Sep"
      }
      if(new Intl.DateTimeFormat('en-US', {month: '2-digit'}).format(madeat)==='10')
      {
          monthInWords="Oct"
      }
      if(new Intl.DateTimeFormat('en-US', {month: '2-digit'}).format(madeat)==='11')
      {
          monthInWords="Nov"
      }
      if(new Intl.DateTimeFormat('en-US', {month: '2-digit'}).format(madeat)==='11')
      {
          monthInWords="Dec"
      }

    minimisedTimeStamp=  monthInWords +" "+new Intl.DateTimeFormat('en-US', {day: '2-digit'}).format(madeat) ;
  }

  else if(elapsedTimeInDays>365)
  {
    var monthInWords;
      if(new Intl.DateTimeFormat('en-US', {month: '2-digit'}).format(madeat)==='01')
      {
          monthInWords="Jan"
      }
     if(new Intl.DateTimeFormat('en-US', {month: '2-digit'}).format(madeat)==='02')
      {
          monthInWords="Feb"
      }
      if(new Intl.DateTimeFormat('en-US', {month: '2-digit'}).format(madeat)==='03')
      {
          monthInWords="Mar"
      }
      if(new Intl.DateTimeFormat('en-US', {month: '2-digit'}).format(madeat)==='04')
      {
          monthInWords="Apr"
      }
      if(new Intl.DateTimeFormat('en-US', {month: '2-digit'}).format(madeat)==='05')
      {
          monthInWords="May"
      }
      if(new Intl.DateTimeFormat('en-US', {month: '2-digit'}).format(madeat)==='06')
      {
          monthInWords="Jun"
      }
      if(new Intl.DateTimeFormat('en-US', {month: '2-digit'}).format(madeat)==='07')
      {
          monthInWords="Jul"
      }
      if(new Intl.DateTimeFormat('en-US', {month: '2-digit'}).format(madeat)==='08')
      {
          monthInWords="Aug"
      }
      if(new Intl.DateTimeFormat('en-US', {month: '2-digit'}).format(madeat)==='09')
      {
          monthInWords="Sep"
      }
      if(new Intl.DateTimeFormat('en-US', {month: '2-digit'}).format(madeat)==='10')
      {
          monthInWords="Oct"
      }
      if(new Intl.DateTimeFormat('en-US', {month: '2-digit'}).format(madeat)==='11')
      {
          monthInWords="Nov"
      }
      if(new Intl.DateTimeFormat('en-US', {month: '2-digit'}).format(madeat)==='12')
      {
          monthInWords="Dec"
      }  
     var yearStamp=new Intl.DateTimeFormat('en-US', {year: '2-digit'}).format(madeat)
    minimisedTimeStamp= monthInWords + "'"+ yearStamp;
   

  }

  console.log(currentTimeStamp);
  console.log(minimisedTimeStamp);
  return (
    <div>
    <div className= "fullCard" data-toggle="modal" data-target="#myModal">
    <Card className={classes.card}>
      <CardContent>
      
     
        {/* <TodoCardMenu todo={props.todo} delTodo= {props.delTodo}/> */}
        <Typography variant="h5" component="h1">
          {title}
        </Typography>
        <Typography component="p">
         Enter description here
         
         
          <br />
         
        </Typography>
        
      </CardContent>

      <div className="cardFooter">
        <div className="deleteIcon" onClick={props.delTodo.bind(this, id)}>
          <i class="fas fa-trash"></i>
        </div>
      </div>
      
     
      {/* <Typography className={classes.pos} color="textSecondary">
         Edited {minimisedTimeStamp}
        </Typography> */}
    </Card>
    </div>
    
     {/* Modal  */}
    <div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

   {/* Modal content */}
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Modal Header</h4>
      </div>
      <div class="modal-body">
        <p>Some text in the modal.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
    </div>
  );
}

TodoCard.propTypes = {
  classes: PropTypes.object.isRequired,
  todo: PropTypes.object.isRequired,
  delTodo:PropTypes.func.isRequired
};

export default withStyles(styles)(TodoCard);