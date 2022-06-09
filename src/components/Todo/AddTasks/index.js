import { useContext, useState } from "react";
import { CountriesContext } from "../../../context/todo/TodoContext";
import { FormTodo, Round } from "./styles";

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