import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todos';
import Header from './Components/Layouts/Header.js';
import AddTodo from './Components/AddTodo.js';
import uuid from 'uuid';
import Searchbar from './Components/Layouts/Searchbar';

class App extends Component {
  state = {
    todos: [
      {
        id:uuid.v4(),
        title: "Go to market",
        completed: false,
        madeat:Date.now()
      },
      {
        id:uuid.v4(),
        title: "Buy cycle",
        completed: false,
        madeat: Date.now()
      },

      {
        id:uuid.v4(),
        title: "Plough the fields",
        completed: false,
        madeat: Date.now()
      }
    ],

    filteredtodos:[]
   }

   componentDidMount() {
    
      this.hydrateStateWithLocalStorage();

      // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
   
    
    this.setState({
      filteredtodos: this.state.todos
    });
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
}

hydrateStateWithLocalStorage=()=> {
  // for all items in state
  for (let key in this.state) {
    // if the key exists in localStorage
    if (localStorage.hasOwnProperty(key)) {
      // get the key's value from localStorage
      let value = localStorage.getItem(key);

      // parse the localStorage string and setState
      try {
        value = JSON.parse(value);
        this.setState({ [key]: value });
      } catch (e) {
        // handle empty string
        this.setState({ [key]: value });
      }
    }
  }
}

saveStateToLocalStorage=()=> {
  // for every item in React state
  for (let key in this.state) {
    // save to localStorage
    localStorage.setItem(key, JSON.stringify(this.state[key]));
  }
}


 

   //changes the completed status of each todo item which is checkboxed
   markComplete=(id)=>{
    this.setState({ todos:  this.state.todos.map( todo =>{
       if(todo.id=== id){
         todo.completed= !todo.completed;

       }
      return todo
       

    })});

   }

   delTodo =(id) =>{
    
    this.setState({todos:[...this.state.todos.filter(todo=> todo.id!==id)]});
    this.setState({filteredtodos:[...this.state.filteredtodos.filter(todo=> todo.id!==id)]});

   }

   addTodo =(title) =>{
    console.log("enteredapp.js");
    const newTodo={
     id:uuid.v4(),
     title,
     completed: false,
     madeat: Date.now()
    }

    this.setState({todos: [...this.state.todos,newTodo], filteredtodos:[...this.state.filteredtodos,newTodo]});
   }

     editTodo = (id,edittedTodo,edittedat)=>{
      
     this.setState({ 
       todos:this.state.todos.map( todo =>{
        if(todo.id=== id)
        { 
         
          todo.title= edittedTodo;
          todo.madeat= edittedat; 
 
        }
       return todo
      })
     });

     this.setState({ 
      filteredtodos:this.state.todos});


   }
   
   handleSearch =(filteredlist) =>{
     
    this.setState({filteredtodos:filteredlist});

   }

 
  render() {

    

    return (
      <div className="App">
        <div className="Container">
            <Header />
            <Searchbar alltodos={this.state.todos} 
                      handleSearch={(data) => this.handleSearch(data)}/>
            <AddTodo addTodo={(data)=>this.addTodo(data)}/>
            <Todos todos={this.state.filteredtodos}  editTodo={this.editTodo} delTodo={this.delTodo} markComplete={this.markComplete}/>
          </div>
      </div>
    );
  }
}

export default App;
