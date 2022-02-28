import React from "react";
import "./style.css";

function TodoCounter({ todoTotal, todoCompletes }) {
  return (
    <h1>
      {todoCompletes} de {todoTotal} tareas
    </h1>
  );
}

export { TodoCounter };
