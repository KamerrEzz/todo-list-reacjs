import React from "react";
import "./TodoList.css";

function TodoList({
  children,
  Error,
  Loading,
  search,
  todoTotal,
  todoSearched,
  onError,
  onLoading,
  onEmpty,
  onEmptySearch,
  onData,
}) {

  const render = children || onData;
  
  return (
    <section className="TodoList">
      {Error && onError()}
      {Loading && onLoading()}
      {(!Loading && !todoTotal) && onEmpty()}
      {(!!todoTotal && !todoSearched.length) && onEmptySearch(search)}


      <ul className="TodoList_item">{todoSearched.map(render)}</ul>
    </section>
  );
}

export default TodoList;
