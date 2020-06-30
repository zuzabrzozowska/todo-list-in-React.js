import React from 'react';
import './CreateOurList.css';
import Button from '../Button/Button.js';
import { editOnServer } from '../../axios';

class CreateOurList extends React.Component {
    constructor() {
        super();

        this.state = {
            show: false,
            currentInputVal: '',
            span: ''
        }
    }

    hideModal = () => {
        this.setState({ show: false });
    };

    showModal = event => {
        this.setState({ show: true });
        const spanText = event.target.closest('li').firstElementChild.innerText;
        this.setState({span: spanText})
    };

    getEditedTask = event => {
        const editedVal = event.target.value;
        this.setState({currentInputVal: editedVal})
        //console.log(this.state.currentInputVal) //<-----rerender co kazda litere :(   
    }
    
    editAndRenderTasks = (id, text) => {
        editOnServer(id, text).then(() => {
            this.props.getTasks();
        })
    }

    onOKButton = event => {
        event.preventDefault(); 
        this.props.todoList.push(this.state.currentInputVal)
        //this.editAndRenderTasks(li.key, this.state.currentInputVal)
    }
    

    render() {
        return(
            <React.Fragment>
                <ul id="list"> 
                    <h1>My todos:</h1>
                    {this.props.todoList.map(task => {
                        return (
                            <li key={task.id}>
                        
                            <span className="todoTitle"> {task.title} </span> 
                            { task.description && <span>description: {task.description}</span>}
                            { task.priority && <span>priority: {task.priority}</span>}
                            { task.url && <span><a target="_blank" rel="noopener noreferrer" href={task.url}>{task.url}</a></span>}

                            <Button type="2" name="delete" onClick={() => this.props.deleteTask(task.id)}></Button>
                            <Button type="3" name="edit" onClick={this.showModal} ></Button>
                            
                            </li>
                        );
                    })}
                </ul>

                <Modal show={this.state.show} handleClose={this.hideModal} span={this.state.span} getEditedTask={this.getEditedTask}/>
                
            </React.Fragment>
        );
    }
}


const Modal = ({ handleClose, show, span, getEditedTask, onOKButton }) => {
    const showHideClassName = show ? "modal display-block" : "modal";

    return (
      <div className={showHideClassName}>
        <div className="modal-content">  
            <form autoComplete="off">
                <input type="text" className="popupInput" defaultValue={span} onChange={getEditedTask}/>
                <button className="addBtn" onClick={onOKButton}>OK</button>
            </form>
            <button onClick={handleClose}>close</button>

        </div>
      </div>
    );

};


export default CreateOurList;
