import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //nasze zmienne "globalne"
      todoList: [],
      newTask: {
        title: '',
        author: '',
        //priority: 1, //Math.floor(value)
        description: ''
      }
    }
  }
  onInputChange = (event) => {
    const {newTask} = this.state;

    //newTask[author] = 'krzysio';
    newTask[event.target.name] = event.target.value;
    
    this.setState({newTask}); //dlaczego tylko tyle?
    console.log({newTask});
  }

  getAndRenderTasks = () => {
    axios.get('http://51.75.120.145:3000/todo')
    .then(resp => {
      this.setState({todoList: resp.data});
    })
  }
  postAndRenderTasks = (newTask) => {

    axios.post('http://51.75.120.145:3000/todo', newTask)
    .then(() => {
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
          
          <form autoComplete="off">

            <input type="text" name="title" placeholder="title"
            onChange={this.onInputChange} />
            <input type="text" name="description"  placeholder="desc"
            onChange={this.onInputChange} /> 
            <input type="text" name="author"  placeholder="author"
            onChange={this.onInputChange} />
            <input type="number" min="1" max="3" name="priority" placeholder="choose priority"></input>

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
              
              <i class="far fa-check-circle"></i>
              
              <span 
              onClick={this.openModal}>
                {task.title}
                </span>

              <button 
              onClick={() => this.deleteAndRenderTasks(task.id)}>
                &times;
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