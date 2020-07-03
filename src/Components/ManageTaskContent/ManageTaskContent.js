import React from 'react';
import Button from '../Button/Button.js';
import './ManageTaskContent.css';

class ManageTaskContent extends React.Component {
    constructor(props) {
        super();

        this.state = {
            isEdited: false,
            alertError: '', 
            newTask: this.clearTask,
        }
        
        if (props.editedTask) {
            this.clearTask = props.editedTask;
            this.state.isEdited = true;
        } else {
            this.clearTask = {
                title: '',
                url: '',
                description: '',
                priority: ''
            }
        }
            
    }

    //updating state of newTask
    onInputChange = event => {
        const {target} = event;
        const {newTask} = this.state;

        const newTaskChanged = {...newTask}
        newTaskChanged[target.name] = target.value;
        if (newTaskChanged[target.name] === "priority") {
            Math.floor(target.value);
        }

        this.setState({newTask: newTaskChanged})
    }

    onAddButton = event => {
        event.preventDefault(); 
        
        const { newTask, isEdited } = this.state;
        

        if (newTask.title.length === 0) {
            this.setState({alertError: 'title field can\'t be blank! :)'});
            return;
        } else if (newTask.title.length < 4) {
            this.setState({alertError: 'try typing more than 3 letters <3'});
            return;
        }

        this.props.postTask(newTask);

        document.getElementById("myForm").reset();
        this.setState({newTask: this.clearTask, alertError: ''});
    }

    render() {
        return(
            <div id="addForm" className="header">    
                {!this.state.isEdited && <h1>ADD NEW TODO</h1>} 
                {this.state.isEdited && <h1>EDIT</h1>}
                {(this.state.alertError) && <div className="error">{this.state.alertError}</div>}   
                <form autoComplete="off" id="myForm">
                    <input type="text" name="title" placeholder="title*" value={this.state.newTask.title}
                    onChange={this.onInputChange} />
                    <input type="text" name="description" placeholder="description" value={this.state.newTask.description}
                    onChange={this.onInputChange} /> 
                    <input type="text" name="url" placeholder="url" value={this.state.newTask.url}
                    onChange={this.onInputChange} />
                    <input type="number" min="1" max="3" name="priority" placeholder="set priority" value={this.state.newTask.priority}
                    onChange={this.onInputChange} />
                    <Button type="1" name="ADD" onClick={this.onAddButton}></Button>
                </form>
            </div>
        );
    }

}

export default ManageTaskContent;
