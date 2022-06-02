import React, { useContext } from "react";
import styled from "styled-components";
import { CountriesContext } from "../todo/TodoContext";

const Checking = styled.button`
  background: none;
  cursor: pointer;
  border: ${({ theme }) => `1px solid ${theme.text_secondary}`};
  border-radius: 50%;
  width: 1.8rem;
  height: 1.8rem;
  padding: 8px;
  margin-right: 1rem;

  ${({ completed }) =>
    completed &&
    ` background-color: hsl(220, 98%, 61%);
      background: linear-gradient(125deg, hsl(192, 100%, 67%) 0%, hsl(280, 87%, 65%) 100%);
      border: none;`};
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

export const Task = ({ id, completed, task }) => {
  const { markAsCompleted, removeTodoItem } = useContext(CountriesContext);
  return (
    <TaskLi completed={completed}>
      <div>
        <Checking onClick={() => markAsCompleted(id)} completed={completed}>
          {completed && (
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
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
  );
};
