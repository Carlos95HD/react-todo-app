import { useContext } from "react";
import { CountriesContext } from "../../../context/todo/TodoContext";
import { Draggable } from "react-beautiful-dnd";
import { Checking, DeleteButton, TaskLi } from "./styles";

export const Task = ({ todo: { id, completed, task }, index }) => {
  const { markAsCompleted, removeTodoItem } = useContext(CountriesContext);
  return (
    <Draggable key={id} draggableId={id.toString()} index={index}>
      {(provided, snapshot) => (
        <TaskLi
          completed={completed}
          isDraggable={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div>
            <Checking onClick={() => markAsCompleted(id)} completed={completed}>
              {completed && (
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                  <path
                    fill="none"
                    stroke="#FFF"
                    strokeWidth="2"
                    d="M1 4.304L3.696 7l6-6"
                  />
                </svg>
              )}
            </Checking>
            <p>{task}</p>
          </div>
          <DeleteButton onClick={() => removeTodoItem(id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
              <path
                fill="#494C6B"
                fillRule="evenodd"
                d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
              />
            </svg>
          </DeleteButton>
        </TaskLi>
      )}
    </Draggable>
  );
};