import { useContext, useEffect } from "react";
import { CountriesContext } from "../todo/TodoContext";
import { Task } from "./Task";
import styled from "styled-components";
import { useState } from "react";
import { filterItem } from "../helpers/filterItem";

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

const ListOptions = styled.div`
  width: 38%;
  display: flex;
  justify-content: space-between;
  margin: 0px auto;

  input{
    cursor: pointer;
  }
  p{
    cursor: default;
  }
`
const BtnFilter = styled.input`
  ${({ value, filter }) => value === filter && `color: hsl(220, 98%, 61%)`};
  margin-left: .5rem;
  margin-right: .5rem;
`

const Alert = styled.p`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem;
`

export const TasksList = () => {
  const { todoList } = useContext(CountriesContext);
  const [todoFiltered, setTodoFiltered] = useState([]);
  const [filter, setfilter] = useState('All');

  useEffect(() => {
    const itemsFiltered = filterItem(todoList, filter);
    setTodoFiltered(itemsFiltered)
  }, [filter, todoList])
  
  const itemsLeft = todoList?.filter(todo => !todo.completed);

  return (
    <>
      <TaskUl>
        {todoFiltered.length === 0 && <Alert>{`There are no items ${filter !== "All" ? filter.toLocaleLowerCase() : ''}`}</Alert>}
        {todoFiltered.map((todo) => (
          <Task key={todo.id} {...todo} />
        ))}
      </TaskUl>
      <ListOptions>
        <p>{itemsLeft.length} Items left</p>
        <div>
          <BtnFilter type="button" filter={filter} value={"All"} onClick={({target}) => setfilter(target.value)}/>
          <BtnFilter type="button" filter={filter} value={"Active"} onClick={({target}) => setfilter(target.value)}/>
          <BtnFilter type="button" filter={filter} value={"Completed"} onClick={({target}) => setfilter(target.value)}/>
        </div>
        <input type="button" value={"Clear Completed"} />
      </ListOptions>
    </>
  );
};
