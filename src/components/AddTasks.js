import React, { useContext, useState } from 'react'
import { CountriesContext } from '../todo/TodoContext';

export const AddTasks = () => {
  const { addTodoItem } = useContext(CountriesContext);
  const [inputValue, setinputValue] = useState('')
  const handleChange = (e) => {
    setinputValue(e.target.value)
  }

  const handleAddTodo = (e) => {
    e.preventDefault()
    inputValue.length > 0 && 
    addTodoItem(inputValue)

    setinputValue('')
  }
  
  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder='Create a new todo'
        onChange={handleChange}
        value={inputValue}
      />
    </form>
  )
}