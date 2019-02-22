import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Searchbar extends Component {
    state={
     search:'',
     filteredtodos:[]

    }
    handleSearch=(e)=>{
      
     this.setState({search:e.target.value});


      // Variable to hold the original version of the list
 let currentList = [];
 // Variable to hold the filtered list before putting into state
let newList = [];

 // If the search bar isn't empty
if (e.target.value !== "") {
     // Assign the original list to currentList
currentList = this.props.alltodos;


     // Use .filter() to determine which items should be displayed
     // based on the search terms
newList = currentList.filter(item => {
         // change current item to lowercase
 const lc = item.title.toLowerCase();
         // change search term to lowercase
 const filter = e.target.value.toLowerCase();
         // check to see if the current list item includes the search term
         // If it does, it will be added to newList. Using lowercase eliminates
         // issues with capitalization in search terms and search content
  return lc.includes(filter)
 
});
} 
else {
     // If the search bar is empty, set newList to original task list
newList = this.props.alltodos;
}
 // Set the filtered state based on what our rules added to newList
 console.log("newlist :");
 console.log( newList);
 this.setState({
  filteredtodos : newList
});

//console.log("Filteredtodos :");
//console.log(this.state.filteredtodos);
     this.props.handleSearch(newList);
    }

    handleSearchDone=(e)=>{
        if(e===13)
        {
            e.preventDefault();  
            this.setState({search:''});
        }
    }
    render() {

        const searchStyle={
          backgroundColor:'black',
          color:'white',
          padding:'5px'}

                          
    return (
      <div>
        <h5>search bar</h5>
        <input type="text" 
            style={searchStyle}
            onChange={this.handleSearch}
            placeholder="Search notes.."
            onKeyDown={this.handleSearchDone}
            value={this.state.search}/>
      </div>
    )
  }
}

Searchbar.propTypes={
  alltodos:PropTypes.array.isRequired,
  handleSearch: PropTypes.func.isRequired
}

export default Searchbar
