import React from 'react';
import './CreateOurList.css';
import Button from '../Button/Button.js';

//FUNCTIONS REACT
//1. props are in the arguments
//2. if there is no state, no class needed (unless hooks)
//3. only return, no render

class CreateOurList extends React.Component {
    constructor() {
        super();

        this.state = {
            show: false
        }
    }
    
    showModal = () => {
        this.setState({ show: true });
    };
    
    hideModal = () => {
        this.setState({ show: false });
    };
    
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

                <Modal show={this.state.show} handleClose={this.hideModal}/>
                
            </React.Fragment>
        );
    }
}

const Modal = ({ handleClose, show }) => {
    const showHideClassName = show ? "modal display-block" : "modal";
  
    return (
      <div className={showHideClassName}>
        <div className="modal-content">
                    <button onClick={handleClose} className="close">close</button>
                    
                    <form autoComplete="off">
                        <input type="text" className="popupInput"/>
                        <button className="addBtn">OK</button> 
                    </form>
        </div>
      </div>
    );

};


export default CreateOurList;
