import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({openModal, setOpenModal}) {

    const OnClick = () => {
        setOpenModal({create: true, sincronized: false});
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