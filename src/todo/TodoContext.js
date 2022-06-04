import { createContext, useReducer } from "react";
import { types } from "../types/types";
import { todoReducer } from "./todoReducer";
import { todos } from "../data/todos";

export const CountriesContext = createContext();
const initialState = {
  todoList: todos,
};

export const CountriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const value = {
    todoList: state.todoList,
    addTodoItem: (todoItemTask) => {
      dispatch({ type: types.AddTask, todoItemTask });
    },
    removeTodoItem: (todoItemId) => {
      dispatch({ type: types.DeleteTask, todoItemId });
    },
    markAsCompleted: (todoItemId) => {
      dispatch({ type: types.ToggleCompleted, todoItemId });
    },
    clearCompleted: () => {
      dispatch({ type: types.ClearCompleted });
    },
    updateList: (todoList) => {
      dispatch({ type: types.ListUpdate, todoList });
    },
  };

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
};
