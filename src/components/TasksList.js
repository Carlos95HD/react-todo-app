import { useContext, useEffect, useState } from "react";
import { Droppable, DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import { CountriesContext } from "../todo/TodoContext";
import { Task } from "./Task";
import { filterItem} from "../helpers/filterItem";
import { reorderItems, reorderItemsFiltered } from "../helpers/reorderItems";

export const TasksList = () => {
  const { todoList, clearCompleted, updateList } = useContext(CountriesContext);
  const [ todoFiltered, setTodoFiltered ] = useState([]);
  const [ filter, setfilter ] = useState('All');

  useEffect(() => {
    const itemsFiltered = filterItem(todoList, filter);
    setTodoFiltered(itemsFiltered)
  }, [filter, todoList])
  
  const handleOnDragEnd = ( result ) => {
    if (!result.destination) return;
    const selectedIndex = result.source.index;
    const destineIndex = result.destination.index;
    let reoreredList;

    if (filter === "All") {
      reoreredList = reorderItems( todoList, selectedIndex, destineIndex);
      updateList(reoreredList)
    } else {
      reoreredList = reorderItems( todoFiltered, selectedIndex, destineIndex);
      //Update list in context
      const newList = reorderItemsFiltered( todoFiltered ,todoList, selectedIndex, destineIndex)
      updateList(newList);
    }

    setTodoFiltered(reoreredList)
  }
  const itemsLeft = todoList?.filter(todo => !todo.completed);

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="todos">
        {(provided) => (
          <TaskUl {...provided.droppableProps} ref={provided.innerRef}>
            {!todoFiltered.length && <Alert>{`There are no items ${filter !== "All" ? filter.toLocaleLowerCase() : ''}`}</Alert> }
            {todoFiltered.map((todo, index) => (
              <Task key={todo.id} todo={todo} index={index} />
            ))}
            {provided.placeholder}
          </TaskUl>
        )}
      </Droppable>
      <ListOptions>
        <p>{itemsLeft.length} Items left</p>
        <div>
          <BtnFilter type="button" filter={filter} value={"All"} onClick={({target}) => setfilter(target.value)}/>
          <BtnFilter type="button" filter={filter} value={"Active"} onClick={({target}) => setfilter(target.value)}/>
          <BtnFilter type="button" filter={filter} value={"Completed"} onClick={({target}) => setfilter(target.value)}/>
        </div>
        <input type="button" value={"Clear Completed"} onClick={ () => clearCompleted() }/>
      </ListOptions>
    </DragDropContext>
  );
};

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
