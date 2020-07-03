import React from 'react';
import './TodoList.css';
import Button from '../Button/Button.js';
import ManageTaskContent from '../ManageTaskContent/ManageTaskContent';
import { editOnServer } from '../../axios';

class TodoList extends React.Component {
    constructor() {
        super();

        this.state = {
            show: false,
            editedTask: {},
        }
    }

    hideModal = () => {
        this.setState({ show: false });
    };

    showModal = task => {
        this.setState({ show: true, editedTask: task });
    };

    //should this be here? to have access to id etc  --props
    editAndRenderTasks = (id, editedTask) => {
        editOnServer(id, editedTask).then(() => {
            this.props.getTasks();
        })
    }
    
    
    render() {
        return(
            <ul id="list"> 
                <h1>My todos:</h1>
                {this.props.todoList.map(task => {
                    return (
                        <>
                        <li key={task.id}>
                            <span className="todoTitle"> {task.title} </span> 
                            { task.description && <span>description: {task.description}</span>}
                            { task.priority && <span>priority: {task.priority}</span>}
                            { task.url && <span><a target="_blank" rel="noopener noreferrer" href={task.url}>{task.url}</a></span>}
                            <Button type="2" name="delete" onClick={() => this.props.deleteTask(task.id)}></Button>
                            <Button type="3" name="edit" onClick={() => this.showModal(task)} ></Button>
                        </li>
                        { (this.state.show) && <Modal show={this.state.show} handleClose={this.hideModal} editedTask={this.state.editedTask} /> } 
                        </>
                    );
                })}
            </ul>
        );
    }
}

const Modal = ({ handleClose, editedTask, onOKButton }) => {
    
    return (
        <>
        <button onClick={handleClose}>close</button>
        <ManageTaskContent onOKButton={onOKButton} editedTask={editedTask}/>
        </> 
    );

};

export default TodoList;
