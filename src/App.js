import React from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import List from './Components/List/List.js';
import Modal from './Components/Modal/Modal.js';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      newTask: {
        title: '',
      }
    }
  }

  getAndRenderTasks = () => {
    axios.get('http://51.75.120.145:3000/todo')
    .then(resp => {
      const tasksFromServer = resp.data;
      this.setState({todoList: tasksFromServer});
      console.log(this.state.todoList);
    }).catch(error => {
      console.log(error);
    })
  }

  componentDidMount() {
    this.getAndRenderTasks();
  }

  //component List.js doesnt have access to getAndRenderTasks
  //should there be no components?
  render() {
    return (    
      <main className="wrapper">
        <Header />
        <ul id="list"> 
        {
          this.state.todoList.map(task => {
            return (
            <li key={task.id}>
              {task.title}
              <button>delete</button>
            </li>
            );
          })
        }
        </ul>
        <Modal />
      </main>
    );
  }

}

export default App;