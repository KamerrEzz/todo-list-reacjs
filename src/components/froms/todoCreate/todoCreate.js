/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { TodoContext } from "../../../context";
import './todoCreate.css';

function TodoCreate() {
  const { todoCreate, setOpenModal } = React.useContext(TodoContext);
  const [text, setText] = React.useState("");
  const [error, setError] = React.useState(false);

  const onChange = (e) => {
      if(e.target.value.length > 0){
            setError(true);
        }
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (text.length > 0) {
        todoCreate(text);
        setText("");
        setError(false);
        setOpenModal(false);
    } else {
        setError(true);
    }
  };

  return (
    <form className="modalTodoCreate" onSubmit={onSubmit}>
        {error && <div className="modalTodoCreate-error">Debes escribir una tarea</div>}
      <label className="modalTodoCreate-label">Escribe la tarea</label>
      <textarea className="modalTodoCreate-textarea" onChange={onChange} placeholder="Cositas por cositas" />
      <div>
        <button className="modalTodoCreate-btn modalTodoCreate-btn-Create" type="submit">Agregar</button>
        <button className="modalTodoCreate-btn modalTodoCreate-btn-Close" onClick={() => setOpenModal(false)}>Cancelar</button>
      </div>
    </form>
  );
}

export default TodoCreate;
