import React from 'react';
import './Modal.css';

function Modal() {
    return (
      <div className="modal">
        <div className="modal-content">
          <span id="closePopup" className="close">&times;</span>
          <form id="popupForm" autoComplete="off">
            <input type="text" id="popupInput" className="popupInput" placeholder="edit task"/>
            <div className="popupBtns">
              <button id="cancelTodo" className="addBtn">CANCEL</button>
              <button id="acceptTodo" className="addBtn">OK</button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Modal;