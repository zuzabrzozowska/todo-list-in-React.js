import React from 'react';
import './CreateOurList.css';
import Button from '../Button/Button.js';

//FUNCTIONS REACT
//1. props are in the arguments
//2. if there is no state, no class needed
//3. return instead of render

function CreateOurList({todoList, deleteTask}) {
    return(
        <ul id="list"> 
            <h1>My todos:</h1>
            {todoList.map(task => {
                return (
                    <li key={task.id}>
                        
                    <span className="todoTitle"> {task.title} </span>
                    { task.description && <span>desc: {task.description}</span>}
                    { task.priority && <span>prior: {task.priority}</span>}
                    { task.url && <span><a target="_blank" rel="noopener noreferrer" href={task.url}>{task.url}</a></span>}

                    <Button type="2" name="delete" onClick={() => deleteTask(task.id)}></Button>
                    <Button type="3" name="fallback btn"></Button>


                    </li>
                );
            })}
        </ul>
    );
}

export default CreateOurList;
