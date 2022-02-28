import React from "react";
import "./style.css";

function TodoCounter({ todoTotal, todoCompletes, loading }) {
  return (
    <h1 className={`todoCounter ${!!loading && "todoCounter--loading"}`}>
      {todoCompletes} de {todoTotal} tareas
    </h1>
  );
}

export { TodoCounter };
