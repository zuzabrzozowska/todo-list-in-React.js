import React from 'react';

class CreateNewTask extends React.Component {
    constructor(props) {
        super();

        console.log(props); // --> f postTask

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

        this.setState({newTask: newTaskChanged})
    }

    onAddButton = (event) => {
        //dont add empty fields +
        event.preventDefault(); 
    
        //using our props from App.js
        this.props.postTask(this.state.newTask);
        
        //input value = '' +
        const emptyNewTask = {...this.state.newTask}

        emptyNewTask.title = '';
        emptyNewTask.url = '';
        emptyNewTask.description = '';
        console.log(emptyNewTask);
        //how to access input.value???
        this.setState({newTask: emptyNewTask})
    }

    render() {
        return(
            <div id="addForm" className="header">    
                <h1>Add new todo:</h1>    
                <form autoComplete="off">

                    <input type="text" name="title" placeholder="title"
                    onChange={this.onInputChange} />
                    <input type="text" name="description" placeholder="desc"
                    onChange={this.onInputChange} /> 
                    <input type="text" name="url" placeholder="url"
                    onChange={this.onInputChange} />
                    
                    <button className="addTodo" onClick={this.onAddButton} >
                    ADD</button>

                </form>
            </div>
        );
    }

}

export default CreateNewTask;
