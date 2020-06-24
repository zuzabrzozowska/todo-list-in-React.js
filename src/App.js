import React from 'react';
import './App.css';
import CreateNewTask from './Components/CreateNewTask/CreateNewTask';
import CreateOurList from './Components/CreateOurList/CreateOurList';

import { getAndRenderServer, deleteAndRenderServer, postAndRenderServer } from './axios';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {  
      todoList: []
    }
  }

  getAndRenderTasks = () => {
    getAndRenderServer().then (response => {
      this.setState({todoList: response.data}) 
    })
  }

  postAndRenderTasks = (newTask) => {
    postAndRenderServer(newTask).then (() => {
      this.getAndRenderTasks();
    })
  }

  deleteAndRenderTasks = (id) => {
    deleteAndRenderServer(id).then (() => {
      this.getAndRenderTasks();
    })
  }

  componentDidMount() {
    this.getAndRenderTasks();
  }


  render() {

    //przekazujemy dzieciom dostęp do obiektów (funkcje i tablica)
    return (    
      <main className="wrapper">
        
        <CreateNewTask postTask={this.postAndRenderTasks}/>
        <CreateOurList todoList={this.state.todoList} deleteTask={this.deleteAndRenderTasks} />
        

      </main>
    );
  }

}

export default App;
