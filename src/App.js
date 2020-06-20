import React from 'react';
import './App.css';
import axios from 'axios';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      newTask: ''
    }
  }

  getAndRenderTasks = () => {
    axios.get('http://51.75.120.145:3000/todo')
    .then(resp => {
      this.setState({todoList: resp.data});
    })
  }
  postAndRenderTasks = (newTask) => {
    axios.post('http://51.75.120.145:3000/todo', {
      title: newTask
    }).then(() => {
      this.getAndRenderTasks();
    })
  }
  deleteAndRenderTasks = (id) => {
    axios.delete(`http://51.75.120.145:3000/todo/${id}`)
    .then(() => {
      this.getAndRenderTasks();
    })
  }
  editAndRenderTasks = (id, newTask) => {
    axios.put(`http://51.75.120.145:3000/todo/${id}, 
    { title: ${newTask} }`)
    .then(() => {
      this.getAndRenderTasks();
    })
  }

  onInputChange = event => {
    this.setState({newTask: event.target.value})
  }

  //openModal = () => {
  //  this.
  //}

  componentDidMount() {
    this.getAndRenderTasks();
  }

  componentWillUnmount() {
    //trzeba usuwac usuwane z widoku elementy
  }

  render() {
    return (    
      <main className="wrapper">

        <div id="addForm" className="header">
          <h1>&lt; MY CHECKLIST &gt;</h1>
          <form autoComplete="off">
            <i className="fas fa-pen-alt"></i>
            <input type="text"
            //chcemy na każdym razem jak zmieniamy wartość inputa aktualizować nasz newTask w this.state
            onChange={this.onInputChange}
            />
            <button className="addTodo"
            onClick={() => this.postAndRenderTasks(this.state.newTask)}
            >ADD</button>
          </form>
        </div>
        
        <ul id="list"> 
        {
          this.state.todoList.map(task => {
            return (
            <li key={task.id}>
              
              <span 
              onClick={this.openModal}>
                {task.title}
                </span>

              <button 
              onClick={() => this.deleteAndRenderTasks(task.id)}>
                delete
                </button>

            </li>
            )
          })
        }
        </ul>

        <div className="modal">
          <div className="modal-content">
            <span id="closePopup" className="close">&times;</span>
            <form id="popupForm" autoComplete="off">
              <input type="text" id="popupInput" className="popupInput" placeholder="edit task"/>
              <div className="popupBtns">
                <button id="cancelTodo" className="addBtn">CANCEL</button>
                <button id="acceptTodo" className="addBtn">OK</button>
              </div>
            </form>
          </div>
        </div>

      </main>
    );
  }

}

export default App;