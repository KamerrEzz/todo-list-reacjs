import React from "react";
import { TodoContext } from "../../context";
import "./TodoSearch.css";

function TodoSearch() {
  const { search, setSearch } = React.useContext(TodoContext);
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
