import './App.css';
import React, { Component } from 'react';
import TodoItem from './components/TodoItem';

 class App extends Component{
  constructor() {
    super();
    this.TodoItems = [
        {title: 'TodoList1', isComplete:true},
        {title: 'TodoList2', isComplete:true},
        {title: 'TodoList3'}
    ];
  }
  render() {
    
    return (
       <div className="App">
         {this.TodoItems.map((item, index)=> <TodoItem key={index} item={item}/>)}
       </div>
    );
  }
 }
export default App;
