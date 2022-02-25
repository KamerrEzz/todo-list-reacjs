import React from "react";
import ReactDOM from "react-dom";
import './todoModal.css'

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="todoModal">
            {children}
        </div>,
        document.getElementById("modal")
    )
}

export default Modal;