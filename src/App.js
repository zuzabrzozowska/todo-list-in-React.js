import React from 'react';
import './App.css';
import CreateNewTask from './Components/CreateNewTask/CreateNewTask';
import CreateOurList from './Components/CreateOurList/CreateOurList';

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
        
        <CreateNewTask postTask={this.postAndRenderTasks}/>
        <CreateOurList todoList={this.state.todoList} deleteTask={this.deleteAndRenderTasks} />
 
      </main>
    );
  }

}

export default App;
