import React from "react";
import "./TodoSearch.css";

function TodoSearch({ search, setSearch }) {
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <input
      className="TodoSearch"
      placeholder="Pasear al perro"
      value={search}
      onChange={onChange}
    />
  );
}

export default TodoSearch;
