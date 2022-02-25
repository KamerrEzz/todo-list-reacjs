import React from "react";
import { TodoContext } from "../../context";
import "./style.css";

function TodoCounter() {
  const { todoTotal, todoCompletes } = React.useContext(TodoContext);
  return (
    <h1>
      {todoCompletes} de {todoTotal} tareas de Kamerr
    </h1>
  );
}

export { TodoCounter };
