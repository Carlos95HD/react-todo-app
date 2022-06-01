import React, { useContext } from 'react'
import { CountriesContext } from '../todo/TodoContext';
import { Task } from './Task'
import styled from "styled-components";

const TaskUl = styled.ul`
  background: ${({ theme }) => theme.bg_secondary};
  margin: 0px auto;
  width: 50%;
  transition: all 0.50s linear;
`

export const TasksList = () => {
  const { todoList } = useContext(CountriesContext);
  return (
    <TaskUl>
      {
        todoList.map(todo => (
          <Task key={todo.id} {...todo} />
        ))
      }
    </TaskUl>
  )
}