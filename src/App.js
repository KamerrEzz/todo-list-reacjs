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
      <TodoHeader loading={loading}>
        <TodoCounter todoTotal={todoTotal} todoCompletes={todoCompletes}  />
        <TodoSearch search={search} setSearch={setSearch}  />
      </TodoHeader>

      <TodoList
        Error={error}
        Loading={loading}
        todoSearched={todoSearched}
        todoTotal={todoTotal}
        search={search}

        onError={() => <div>Cargando...</div>}
        onLoading={() => <div>Cargando...</div>}
        onEmpty={() => <div>No hay datos</div>}
        onEmptySearch={(searchText) => <div>No se encontro resultado para {searchText}</div>}
        onData={(item, index) => (
          <TodoItem
            key={index}
            text={item.text}
            completed={item.completed}
            onCompled={() => todoCompleted(item.text)}
            onDeleted={() => todoDelete(item.text)}
          />
        )}
      />

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
