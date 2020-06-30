import React from 'react';
import Button from '../Button/Button.js';
import './CreateNewTask.css';

class CreateNewTask extends React.Component {
    constructor(props) {
        super();

        this.clearTask = {
                title: '', 
                url: '', 
                description: ''
        }
        
        this.state = { 
            newTask: this.clearTask,  
            alertError: '',  
        }
    }

    //updating state of newTask
    onInputChange = event => {
        const {target} = event; //event.target
        const {newTask} = this.state; //this.state.newTask

        const newTaskChanged = {...newTask}
        newTaskChanged[target.name] = target.value; //newTask[url] = 'google.pl';
        if (newTaskChanged[target.name] === "priority") {
            Math.floor(target.value);
        }

        this.setState({newTask: newTaskChanged})
    }

    onAddButton = event => {
        event.preventDefault(); 
        
        const {newTask} = this.state;

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
                <h1>ADD NEW TODO</h1> 
                {(this.state.alertError) && <div className="error">{this.state.alertError}</div>}   
                <form autoComplete="off" id="myForm">

                    <input type="text" name="title" placeholder="title*"
                    onChange={this.onInputChange} />
                    <input type="text" name="description" placeholder="desc"
                    onChange={this.onInputChange} /> 
                    <input type="text" name="url" placeholder="url"
                    onChange={this.onInputChange} />
                    <input type="number" min="1" max="3" name="priority" placeholder="set priority"
                    onChange={this.onInputChange} />
                    <Button type="1" name="ADD" onClick={this.onAddButton}></Button>
                </form>
            </div>
        );
    }

}

export default CreateNewTask;
