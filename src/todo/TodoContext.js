import { createContext, useReducer } from "react";
import { types } from "../types/types";
import { todoReducer } from "./todoReducer";

export const CountriesContext = createContext();
const initialState = {
  todoList: [
    {
      completed: false,
      id: 21312,
      task: 'Drink water'
    },
    {
      completed: true,
      id: 212312,
      task: 'Clean up'
    },
]
};

export const CountriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const value = {
    todoList: state.todoList,
    addTodoItem: (todoItemTask) => {
      dispatch({ type: types.AddTask , todoItemTask });
    },
    removeTodoItem: (todoItemId) => {
      dispatch({ type: types.DeleteTask, todoItemId });
    },
    markAsCompleted: (todoItemId) => {
      dispatch({ type: types.ToggleCompleted, todoItemId });
    },
    clearCompleted: () => {
      dispatch({ type: types.ClearCompleted });
    }
  };

  return (
    <CountriesContext.Provider
      value={value}
    >
      {children}
    </CountriesContext.Provider>
  )
};