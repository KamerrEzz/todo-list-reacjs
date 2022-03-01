import React from "react";

const useLocalStorage = (key, initialValue) => {
  const [sincronized, setSincronized] = React.useState(true);
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
        setSincronized(true);
      } catch (error) {
        setError(true);
      }
    }, 5000);
  }, [sincronized]);

  const todoSave = (newTodo) => {
    const parseTodo = JSON.stringify(newTodo);
    localStorage.setItem(key, parseTodo);
    setItem(newTodo);
  };

  const sincronizedToggle = () => {
    setLoading(true);
    setSincronized(false);
  };

  return {
    item,
    todoSave,
    error,
    loading,
    sincronizedToggle,
  };
};

export { useLocalStorage };
