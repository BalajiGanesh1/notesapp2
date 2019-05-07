import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PropTypes from 'prop-types';

const options = [
  'Delete',
  'Add Drawing'
];

const ITEM_HEIGHT = 48;


class TodoCardMenu extends React.Component {
  constructor(props)
  {
      super(props);
  }
  
    state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    //   console.log(this.props.todo);
    //   console.log(this.props.delTodo);
    const {id}= this.props.todo;
    if(1)
    this.props.delTodo(id);
    this.setState({ anchorEl: null });
  };

  render() {
   
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
   

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 150,
              fontSize:20
            },
          }}
        >
          {options.map(option => (
            <MenuItem key={option} selected={option === 'Delete'} onClick={this.handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

TodoCardMenu.propTypes = {
    todo:PropTypes.object.isRequired,
    delTodo:PropTypes.func.isRequired
  };

export default TodoCardMenu;
