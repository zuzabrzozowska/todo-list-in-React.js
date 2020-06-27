import React from 'react';
import './CreateOurList.css';
import Button from '../Button/Button.js';

//FUNCTIONS REACT
//1. props are in the arguments
//2. if there is no state, no class needed
//3. return instead of render

function CreateOurList({todoList, deleteTask}) {
    console.log(todoList);
    return(
        <ul id="list"> 
            <h1>My todos:</h1>
            {todoList.map(task => {
                return (
                    <li key={task.id}>
                        
                    <span> {task.title} </span>
                    <span>desc:{task.description}</span>
                    <span> prior: {task.priority} </span>
                    <span> www: <a target="_blank" rel="noopener noreferrer" href={task.url}>{task.url}</a> </span>

                    <Button type="1" name="delete" onClick={() => deleteTask(task.id)}></Button>

                    </li>
                );
            })}
        </ul>
    );
}

export default CreateOurList;
