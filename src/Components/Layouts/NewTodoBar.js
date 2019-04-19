import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../../App.css'

const styles = {
  card: {
    minWidth: 275,
  },
 
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;
 

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        <input
       type="text"
       name="title"
      
       placeholder="Add Notes..."
    
      // onChange= {this.onChange}

     />
        </Typography>
        <Typography variant="h5" component="h2">
          
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          
        </Typography>
        <Typography component="p">
         
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);