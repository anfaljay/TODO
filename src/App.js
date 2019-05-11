import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';

class App extends Component {
  state = {
    listData: {
    newItem: ' '
  },
    lists: []
  } 
  // makes an event that adds the tasks 
  addTask=(event)=>{
    //it gets the values to make new task 
    const newTask = event.target.value
    const original = this.state.listData
    const copy = Object.assign({}, original)
    const key = event.target.name
    copy[key] = newTask
    // sets up the new item or task 
    this.setState({
      listData: copy
    })
    // console.log("efiehfgoe")
  }
  //
  submitTask = (event) => {
    //stops the page from refreshing
    event.preventDefault();
    //copys the items 
    const copy = this.state.lists.slice(0);

    console.log("this.state.listData.newItem" , this.state.listData.newItem)


    if( this.state.listData.newItem !== " " ){ 
    //pushes and adds the new tasks 
    copy.push(this.state.listData.newItem)
    
    //it sets the new copy to the original 
    this.setState({
      lists: copy,

      listData:{
      newItem: " "},
    })
  }
  }
  deleteTask= (e , del )=>{
    //an event that implement the change to only one and leaving the other
    e.stopPropagation()
    const copy = this.state.lists.slice(0)
    copy.splice(del,1);

      this.setState({
        lists: copy
      })
    }
    componentDidMount() {
      this.setState({ lists: ["new default list"]})
    }
  
  //shares the react components using props 
  render() {
    //goes through the list items and map them to get the items inside 
    const lists = this.state.lists.map((item , index) => 
    //we pass the functions we want to use in the todo file
    <Todo item ={item} deleteTask={this.deleteTask} del={index} />)
     

    { console.log( "map= \n" , lists ,  "\n this the defaul list before map =\n" ,  this.state.lists )}
    //return the values 
    return (
      <div>
      <div className="Box">
        <h1>MY TODO list</h1>
        <h2>Pin down your tasks📌</h2>
        {/* 
          form element that collects the inputs (tasks)
        */}
        <form onSubmit={this.submitTask}>
        <label>What do you want to do today?</label>
          {/* 
            creates a box to input informations 
          */}
          <input
            name="newItem" 
            onChange={this.addTask} 
            value={this.state.listData.newItem} 
            type="text" 
            /> 
            <button className="button" type ="submit">Add</button>
          </form>
          {/* 
            takes the items and puts them in a list 
          */}
          </div>
          <ul>{lists}</ul>
          </div>
    );
  }
}

export default App;
