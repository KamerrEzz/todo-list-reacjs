import React from "react";
import './TodoList.css'

function TodoList({ children }) {
  return (
    <section className="TodoList">
      <ul className="TodoList_item">{children}</ul>
    </section>
  );
}

export default TodoList;
