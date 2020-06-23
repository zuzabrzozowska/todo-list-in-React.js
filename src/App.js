import React from 'react';
import './App.css';
import CreateNewTask from './Components/CreateNewTask/CreateNewTask';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    //nasze zmienne "globalne" w stanie:
    this.state = {  
      todoList: []
    }
  }

  /*
  onInputChange = (event) => { 
    if (event.target.name === "title") {
      newTask.title = title.value;
    } else if (event.target.name === "author") {
      newTask.author = author.value;
    } else if...
    KRÓCEJ I TAKI SAM EFEKT: 
    newTask[author] = 'krzysio';
    newTask[event.target.name] = event.target.value;
    
    const {newTask} = this.state;
    //nie możemy zmieniać stanu bezpośrednio po =, bo będzie aktualizacja widoku co każdą literkę
    //dlatego tworzymy nowy obiekt do edytowania ile chcemy:
    const newTaskChanged = {...newTask}
    //edytujemy go na spokojnie:
    newTaskChanged[event.target.name] = event.target.value;
    //i w końcu zmieniamy stan i zapełniamy newTask zawartością newTaskChanged (i robi się rerender)
    this.setState({newTask: newTaskChanged});
    
  } */

  getAndRenderTasks = () => {
    axios.get('http://51.75.120.145:3000/todo')
    .then(resp => {
      this.setState({todoList: resp.data});
    })
  }
 
  postAndRenderTasks = ({newTask}) => {
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

  componentDidMount() {
    this.getAndRenderTasks();
  }


  render() {
    return (    
      <main className="wrapper">

        <CreateNewTask />
        
        <ul id="list"> 
        {
          this.state.todoList.map(task => {
            return (
            <li key={task.id}>
              
              <i className="far fa-check-circle"></i>
              
              <span onClick={this.openModal}>
                {task.title}
              </span>

              <button onClick={() => this.deleteAndRenderTasks(task.id)}>
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