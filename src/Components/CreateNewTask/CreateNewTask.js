import React from 'react';
import Button from '../Button/Button.js';

class CreateNewTask extends React.Component {
    constructor(props) {
        super();

        this.state = { 
            newTask: { 
            title: '', 
            url: '', 
            description: ''
            },    
        }
    }

    //updating state of newTask
    onInputChange = (event) => {
        const {target} = event; //event.target
        const {newTask} = this.state; //this.state.newTask

        const newTaskChanged = {...newTask}
        newTaskChanged[target.name] = target.value; //newTask[url] = 'google.pl';
        if (newTaskChanged[target.name] === "priority") {
            Math.floor(target.value);
        }

        this.setState({newTask: newTaskChanged})
    }

    onAddButton = (event) => {
        //dont add empty fields +
        event.preventDefault(); 
    
        //using our prop from App.js
        this.props.postTask(this.state.newTask);
        
        //zerowanie inputu
        document.getElementById("myForm").reset();
    }

    render() {
        return(
            <div id="addForm" className="header">    
                <h1>ADD NEW TODO</h1>    
                <form autoComplete="off" id="myForm">

                    <input type="text" name="title" placeholder="title"
                    onChange={this.onInputChange} />
                    <input type="text" name="description" placeholder="desc"
                    onChange={this.onInputChange} /> 
                    <input type="text" name="url" placeholder="url"
                    onChange={this.onInputChange} />
                    <input type="number" min="1" max="3" name="priority" placeholder="set priority"
                    onChange={this.onInputChange} />
                    
                    <Button name="ADD" onClick={this.onAddButton}></Button>
                    

                </form>
            </div>
        );
    }

}

export default CreateNewTask;
