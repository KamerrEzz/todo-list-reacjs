import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({openModal, setOpenModal}) {

    const OnClick = () => {
        setOpenModal(true)
    }

    return (
        <button 
        className='CreateTodoButton'
        onClick={OnClick}
        >
            +
        </button>
    );
}

export default CreateTodoButton;