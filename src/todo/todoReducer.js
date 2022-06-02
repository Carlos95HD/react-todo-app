import { types } from "../types/types";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case types.AddTask:
      return {
        todoList: [
          ...state.todoList,
          {
            id: new Date().valueOf(),
            task: action.todoItemTask,
            completed: false,
          },
        ],
      };
    case types.DeleteTask: {
      const filteredTodoItem = state.todoList.filter(
        (todoItem) => todoItem.id !== action.todoItemId
      );
      return { todoList: filteredTodoItem };
    }
    case types.ToggleCompleted: {
      const updatedTodoList = state.todoList.map((todoItem) =>
        todoItem.id === action.todoItemId
          ? { ...todoItem, completed: !todoItem.completed }
          : todoItem
      );
      return { todoList: updatedTodoList };
    }
    case types.ClearCompleted: {
      const updatedTodoList = state.todoList.filter( todoItem => !todoItem.completed );
      return { todoList: updatedTodoList };
    }

    default:
      return state;
  }
};
