import React, { useContext } from "react";
import { CountriesContext } from "../todo/TodoContext";
import { Task } from "./Task";
import styled from "styled-components";

const TaskUl = styled.ul`
  background: ${({ theme }) => theme.bg_secondary};
  margin: 0px auto;
  position: relative;
  bottom: 3rem;
  width: 38%;
  border-radius: 0.5rem;
  box-shadow: 0px 12px 34px -2px rgba(0, 0, 0, 0.13);
  -webkit-box-shadow: 0px 12px 34px -2px rgba(0, 0, 0, 0.13);
  -moz-box-shadow: 0px 12px 34px -2px rgba(0, 0, 0, 0.13);
  transition: all 0.5s linear;

  & li:last-child {
    border-bottom: none;
  }
`;

export const TasksList = () => {
  const { todoList } = useContext(CountriesContext);
  return (
    <TaskUl>
      {todoList.map((todo) => (
        <Task key={todo.id} {...todo} />
      ))}
    </TaskUl>
  );
};
