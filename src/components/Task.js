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

  @media (pointer:fine) {
    :hover{
    background:
      ${({ theme, completed }) => 
        completed ? ` linear-gradient(transparent 0 0) padding-box,` : `linear-gradient(${theme.bg_secondary} 0 0) padding-box,`
      }
      linear-gradient(125deg, hsl(192, 100%, 67%) 0%, hsl(280, 87%, 65%) 100%) border-box;
    border: 1px solid transparent;
  }
  }
`;

const DeleteButton = styled.button`
  visibility: hidden;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  @media (pointer:coarse) {
    visibility: visible;
  }
`;

const TaskLi = styled.li`
  background: ${({ theme }) => theme.bg_secondary};
  align-items: center;
  border-bottom: ${({ theme }) => `1px solid ${theme.text_secondary}`};
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  transition: background 0.5s linear;

  & div {
    display: flex;
    align-items: center;
  }

  & p {
    word-break: break-all;
    ${({ theme }) => `color: ${theme.text_primary}`};
    ${({ completed, theme }) =>
      completed &&
      `
      color: ${theme.text_secondary};
      text-decoration-line: line-through; 
    `};
  }

  ${({ isDraggable, theme }) => isDraggable && `
    background: ${theme.bg_secondary};
    opacity: 0.85;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    border: 1px solid ${theme.text_secondary}
    `
  }

  &:hover ${DeleteButton}{
    visibility: visible;
  }

  @media screen and (max-width: 768px) {
    padding: .6rem;
  }
`;

export const Task = ({todo:{ id, completed, task}, index}) => {
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
