import React from "react";
import "./TodoSearch.css";

function TodoSearch({ search, setSearch, loading }) {
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <input
      className="TodoSearch"
      placeholder={loading ? "Cargando..." : "Buscar..."}
      value={search}
      onChange={onChange}
      disabled={loading}
    />
  );
}

export default TodoSearch;
