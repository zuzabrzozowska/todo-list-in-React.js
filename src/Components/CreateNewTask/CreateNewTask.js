import React from 'react';

class CreateNewTask extends React.Component {
    constructor() {
        super();

        this.state = { newTask: { 
            title: '', url: '', description: ''
        } }
    }

    onInputChange = (event) => {
        const {target} = event; //event.target
        const {newTask} = this.state; //this.state.newTask

        const newTaskChanged = {...newTask}
        newTaskChanged[target.name] = target.value;

        this.setState({newTask: newTaskChanged})
    }

    


    render() {
        return(
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
        );
    }

}

export default CreateNewTask;