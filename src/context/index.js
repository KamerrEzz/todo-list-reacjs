import React from "react";
import { useLocalStorage } from "../hooks/localStorage";

const TodoContext = React.createContext();

const TodoProvider = ({ children }) => {
  const {
    item: todos,
    todoSave,
    error,
    loading,
  } = useLocalStorage("todos_v1", []);
  const [search, setSearch] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const todoCompletes = todos.filter((todo) => !!todo.completed).length;
  const todoTotal = todos.length;
  let todoSearched = [];

  if (!search.length >= 1) {
    todoSearched = todos;
  } else {
    todoSearched = todos.filter((todo) =>
      todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  const todoCompleted = (text) => {
    const newTodos = todos.map((todo) => {
      if (todo.text === text) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    todoSave(newTodos);
  };

  const todoDelete = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo.text !== text;
    });
    todoSave(newTodos);
  };

  const todoCreate = (text) => {
    const newTodos = [...todos, { text, completed: false }];
    todoSave(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        todoSave,
        todoCreate,
        error,
        loading,
        todoCompletes,
        todoTotal,
        todoSearched,
        search,
        setSearch,
        todoCompleted,
        todoDelete,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };

/**
    ¿Que es el React Context?

    Es una herramienta de React que permite compartir estados a través de nuestros diferentes componentes de la app.
    Esto a partir de Providers y Consumer.
    Nos ayuda a reducir la cantidad de props que tengamos que compartir en todos los elementos de nuestros componentes.
 */
