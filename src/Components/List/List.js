import React from 'react';
import './List.css';

class List extends React.Component {

  constructor() {
    super();
    this.state={
      todoList: [],
  
    }
  }

  render() {
    return (
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
    );
  }

}

export default List;