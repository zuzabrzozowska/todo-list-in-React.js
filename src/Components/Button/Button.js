import React from 'react';
import './Button.css';

//restrukturyzacja: {label} to Button.label, bo jest w propsach w CreateNewTask.js
function Button({onClick, name, type}) {

    let btnClass;
    let iconClass;

    //if (type === "1") {
    //   btnClass = 'btn-red';
    //}
    
    switch(type) {
        case "1":
            iconClass = 'fas fa-plus';
            btnClass = null;
            break;
        case "2":
            btnClass = 'btn-red';
            iconClass = 'far fa-trash-alt';
            break;
        default:
            btnClass = null;
            iconClass = null;
        //maslo maslane z linijka 33  
    }

    return (
        <button 
            className={btnClass} 
            onClick={onClick}>
            {name} {iconClass && <i className={iconClass}/>}
        </button>
    )
}

export default Button;