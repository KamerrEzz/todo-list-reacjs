import React from "react";
import './TodoItem.css';

function TodoItem({ text, completed, onCompled, onDeleted }) {
  const completedClassIcon = completed ? 'TodoItem-Icon--complete' : '';
  const completedClassP = completed ? 'TodoItem-p--complete' : '';
  const completedClassButton = completed ? '❌' : '✅';  

  return (
    <li className="TodoItem">
      <span className={`Icon ${completedClassIcon}`} onClick={onCompled}>{completedClassButton}</span>
      <p className={`TodoItem-p ${completedClassP}`}>{text}</p>
      <span className="Icon Icon-delete" onClick={onDeleted}>x</span>
    </li>
  );
}

export default TodoItem;
