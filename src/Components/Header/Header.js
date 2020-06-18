import React from 'react';
import './Header.css';

function Header() {
    return (
        <div id="addForm" className="header">
          <h1>&lt; MY CHECKLIST &gt;</h1>
          <form autoComplete="off">
            <i className="fas fa-pen-alt"></i>
            <input type="text" id="myInput"/>
            <button className="addTodo">ADD</button>
          </form>
          <button className="removeAll">remove all</button> 
        </div>
    );
}

export default Header;