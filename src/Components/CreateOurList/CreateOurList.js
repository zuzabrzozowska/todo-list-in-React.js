import React from 'react';
import './CreateOurList.css';

//props are in the arguments
//if there is no state, no class needed

function CreateOurList({todoList, deleteTask}) {
    console.log(todoList);
    return(
        <ul id="list"> 
            <h1>My todos:</h1>
            {todoList.map(task => {
                return (
                    <li key={task.id}>
                        
                    <i className="far fa-check-circle"></i>
                        
                    <span> {task.title} </span>
                    <span> desc: {task.description} </span>
                    <span> www: <a target="_blank" rel="noopener noreferrer" href={task.url}>{task.url}</a> </span>

                    <button onClick={() => deleteTask(task.id)}>
                    &times;
                    </button>

                    </li>
                );
            })}
        </ul>
    );
}

export default CreateOurList;
