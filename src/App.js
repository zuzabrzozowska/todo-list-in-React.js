import React from 'react';
import './App.css';
import ManageTaskContent from './Components/ManageTaskContent/ManageTaskContent';
import TodoList from './Components/TodoList/TodoList';

import { getFromServer, deleteFromServer, postToServer } from './axios';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {  
      todoList: []
    }
  }

  getAndRenderTasks = () => {
    getFromServer().then (response => {
      this.setState({todoList: response.data}) 
    })
  }

  postAndRenderTasks = newTask => {
    postToServer(newTask).then (() => {
      this.getAndRenderTasks();
    })
  }

  deleteAndRenderTasks = id => {
    deleteFromServer(id).then (() => {
      this.getAndRenderTasks();
    })
  }

  componentDidMount() {
    this.getAndRenderTasks();
  }


  render() {

    return (    
      <main className="wrapper">
        
        <ManageTaskContent postTask={this.postAndRenderTasks}/>
        <TodoList todoList={this.state.todoList} deleteTask={this.deleteAndRenderTasks} getTasks={this.getAndRenderTasks}/>
 
      </main>
    );
  }

}

export default App;
