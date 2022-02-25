import React from "react";

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];

const useLocalStorage = (key, initialValue) => {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const todoLocalStorage = localStorage.getItem(key);
        let todosLocal;
        if (!todoLocalStorage) {
          todosLocal = [];
          localStorage.setItem(key, JSON.stringify(initialValue));
        } else {
          todosLocal = JSON.parse(todoLocalStorage);
        }
        setLoading(false);
        setItem(todosLocal);
      } catch (error) {
        setError(true);
      }
    }, 5000);
  });

  const todoSave = (newTodo) => {
    const parseTodo = JSON.stringify(newTodo);
    localStorage.setItem(key, parseTodo);
    setItem(newTodo);
  };

  return {
    item,
    todoSave,
    error,
    loading,
  };
};

export { useLocalStorage };
