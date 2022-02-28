import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch/TodoSearch";
import TodoList from "./components/TodoList/TodoList";
import TodoItem from "./components/TodoItem/TodoItem";
import CreateTodoButton from "./components/CreateTodoButton/CreateTodoButton";
import TodoModal from "./components/Modal/todoModal";
import TodoCreate from "./components/froms/todoCreate/todoCreate";
import TodoHeader from "./components/TodoHeader/TodoHeader";

import { useTodos } from "./hooks/useTodo";

function App() {
  const {
    loading,
    todoSearched,
    error,
    todoCompleted,
    todoDelete,
    openModal,
    setOpenModal,
    todoTotal,
    todoCompletes,
    search,
    setSearch,
    todoCreate,
  } = useTodos();

  return (
    <>
      <TodoHeader>
        <TodoCounter todoTotal={todoTotal} todoCompletes={todoCompletes} />
        <TodoSearch search={search} setSearch={setSearch} />
      </TodoHeader>

      <TodoList>
        {loading && <div>Cargando...</div>}
        {error && <div>Error</div>}
        {!loading && !todoSearched.length && <div>No hay todos</div>}

        {todoSearched.map((item, index) => (
          <TodoItem
            key={index}
            text={item.text}
            completed={item.completed}
            onCompled={() => todoCompleted(item.text)}
            onDeleted={() => todoDelete(item.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <TodoModal>
          <TodoCreate todoCreate={todoCreate} setOpenModal={setOpenModal} />
        </TodoModal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
}

export default App;
