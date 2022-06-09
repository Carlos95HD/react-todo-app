import { useEffect, useState } from "react";

export const useLocalStorage = () => {
  const [todos, setTodos] = useState({todoList:[]});

  useEffect(() => {
    localStorage.setItem('todosList', JSON.stringify(todos));
  }, [todos]);

  const syncTodosLocalStorage = (list) => {
    setTodos(list)
  }

  return {
    syncTodosLocalStorage,
  }
}