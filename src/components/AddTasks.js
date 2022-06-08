import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CountriesContext } from "../todo/TodoContext";

const FormTodo = styled.form`
  background: ${({ theme }) => theme.bg_secondary};
  display: flex;
  justify-content: space-between;
  width: 38%;
  margin: 0px auto;
  transition: all 0.5s linear;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 12px 34px -2px rgba(0, 0, 0, 0.13);
  -webkit-box-shadow: 0px 12px 34px -2px rgba(0, 0, 0, 0.13);
  -moz-box-shadow: 0px 12px 34px -2px rgba(0, 0, 0, 0.13);

  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 60%;
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 45%;
  }

  & input {
    background: none;
    width: 100%;
  }
`;

const Round = styled.button`
  margin-right: 1rem;
  margin-left: 1rem;
  background: none;
  cursor: default;
  border: ${({ theme }) => `1px solid ${theme.text_secondary}`};
  border-radius: 50%;
  width: 1.8rem;
  height: 1.8rem;
  padding: 13px;
`;

export const AddTasks = () => {
  const { addTodoItem } = useContext(CountriesContext);
  const [inputValue, setinputValue] = useState("");
  const handleChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    inputValue.length > 0 && addTodoItem(inputValue);

    setinputValue("");
  };

  return (
    <FormTodo onSubmit={handleAddTodo}>
      <Round type="button" />
      <input
        type="text"
        placeholder="Create a new todo..."
        onChange={handleChange}
        value={inputValue}
      />
    </FormTodo>
  );
};
