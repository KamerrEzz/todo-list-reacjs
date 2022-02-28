import React from "react";
import { useLocalStorage } from "./localStorage";


const useTodos = () => {
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

  return {
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
      }

};

export { useTodos };

