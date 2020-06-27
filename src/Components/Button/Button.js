import React from 'react';
import './Button.css';

//restrukturyzacja: {label} to Button.label, bo jest w propsach w CreateNewTask.js
function Button({onClick, name, type}) {

    let btnClass;
    let iconClass;

    //if (type === "1") {
    //   btnClass = 'btn-red';
    //}
    
    type === "1" ? btnClass = 'btn-red': btnClass = null;
    type === "1" ? iconClass = 'far fa-trash-alt' : iconClass = 'fas fa-plus';

    return (
        <button 
            className={btnClass} 
            onClick={onClick}>
            {name} <i className={iconClass} /> 
        </button>
    )
}

export default Button;