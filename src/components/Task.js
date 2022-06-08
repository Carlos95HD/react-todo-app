import React, { useContext } from "react";
import styled from "styled-components";
import { CountriesContext } from "../todo/TodoContext";
import {Draggable} from "react-beautiful-dnd";

const Checking = styled.button`
  background: none;
  cursor: pointer;
  border: ${({ theme }) => `1px solid ${theme.text_secondary}`};
  border-radius: 50%;
  width: .5rem;
  height: .5rem;
  padding: 13px;
  margin-right: 1rem;
  transition: all 0.5s linear;

  :hover{
    background:
      ${({ theme, completed }) => 
        completed ? ` linear-gradient(transparent 0 0) padding-box,` : `linear-gradient(${theme.bg_secondary} 0 0) padding-box,`
      }
      linear-gradient(125deg, hsl(192, 100%, 67%) 0%, hsl(280, 87%, 65%) 100%) border-box;
    border: 1px solid transparent;
  }

  ${({ completed }) =>
    completed &&
    ` background-color: hsl(220, 98%, 61%);
      background: linear-gradient(125deg, hsl(192, 100%, 67%) 0%, hsl(280, 87%, 65%) 100%);
    `};

  svg{
    position: relative;
    bottom: 6px;
    right: 5px;
  }
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

const TaskLi = styled.li`
  /* background: ${({ theme }) => theme.bg_secondary}; */
  align-items: center;
  border-bottom: ${({ theme }) => `1px solid ${theme.text_secondary}`};
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  & div {
    display: flex;
    align-items: center;
  }

  & p {
    ${({ theme }) => `color: ${theme.text_primary}`};
    ${({ completed, theme }) =>
      completed &&
      `
      color: ${theme.text_secondary};
      text-decoration-line: line-through; 
    `};
  }
`;

const TaskText = styled.div`
  p{
    word-break: break-all;
  }
`
export const Task = ({todo:{ id, completed, task}, index}) => {
  const { markAsCompleted, removeTodoItem } = useContext(CountriesContext);
  return (
    <Draggable key={id} draggableId={id.toString()} index={index}>
      {(provided) => (
        <TaskLi 
          completed={completed}
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
            <TaskText>
              <p>{task}</p>
            </TaskText>
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
