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
        {(provided, snapshot) => (
          <TaskUl {...provided.droppableProps} ref={provided.innerRef} snapshot={snapshot}>
            {!todoFiltered.length && <Alert>{`There are no items ${filter !== "All" ? filter.toLocaleLowerCase() : ''}`}</Alert> }
            {todoFiltered.map((todo, index) => (
              <Task key={todo.id} todo={todo} index={index} />
            ))}
            {provided.placeholder}
          </TaskUl>
        )}
      </Droppable>
      <ListOptions>
        <Remaining><p>{itemsLeft.length} Items left</p></Remaining>
        <BtnList>
          <BtnFilter type="button" filter={filter} value={"All"} onClick={({target}) => setfilter(target.value)}/>
          <BtnFilter type="button" filter={filter} value={"Active"} onClick={({target}) => setfilter(target.value)}/>
          <BtnFilter type="button" filter={filter} value={"Completed"} onClick={({target}) => setfilter(target.value)}/>
        </BtnList>
        <OtherOptions>
          <input type="button" value={"Clear Completed"} onClick={ () => clearCompleted() }/>
        </OtherOptions>
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
  border-radius: 0.5rem 0.5rem 0 0;
  box-shadow: 0px 12px 15px -2px rgba(0, 0, 0, 0.13);
  transition: all 0.5s linear;

  ${({ snapshot, theme }) => snapshot.isDraggingOver && `
    background: ${theme.text_secondary};
  `}

  li:first-child{
    border-radius: 0.5rem 0.5rem 0 0;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 60%;
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 45%;
  }
`;

const ListOptions = styled.div`
  font-size: 16px;
  position: relative;
  bottom: 3rem;
  width: 38%;
  display: flex;
  margin: 0px auto;
  border-radius: 0 0 0.5rem 0.5rem;
  box-shadow: 0px 12px 15px -2px rgba(0, 0, 0, 0.13);
  transition: all 0.5s linear;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    flex-wrap: wrap;
    width: 90%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 60%;
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 45%;
  }
`

const Remaining = styled.div`
  width: 50%;
  background: ${({ theme }) => theme.bg_secondary};
  border-bottom-left-radius: .5rem;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  transition: all 0.5s linear;

  p{
    color: ${({ theme }) => theme.text_secondary};
    margin-left: 1.3rem;
    cursor: default
  }

  @media screen and (max-width: 768px) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;

const OtherOptions = styled.div`
  display: flex;
  background: ${({ theme }) => theme.bg_secondary};
  justify-content:end;
  border-bottom-right-radius: .5rem;
  transition: all 0.5s linear;
  width: 50%;

  @media screen and (max-width: 768px) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  input{
    font-size: 16px;
    color: ${({ theme }) => theme.text_secondary};
    background: ${({ theme }) => theme.bg_secondary};
    margin-right: 1.5rem;
    cursor: pointer;

    :hover{
      color: ${({ theme }) => theme.text_gray_hover};
    }
  }
`

const BtnList = styled.div`
    display: flex;
    width: 100%;
    background: ${({ theme }) => theme.bg_secondary};
    transition: all 0.5s linear;
    justify-content: center;

    
    @media screen and (max-width: 768px) {
      order: 3;
      border-radius: .5rem;
      margin-top: 1rem;
      justify-content: center;
      padding-top: 1.3rem;
      padding-bottom: 1.3rem;
      top: 4rem;
      position: absolute;
      box-shadow: 0px 12px 34px -2px rgba(0, 0, 0, 0.13);
    }
`

const BtnFilter = styled.input`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: bold;
  background: ${({ theme }) => theme.bg_secondary};
  ${({ value, filter }) => value === filter && `color: hsl(220, 98%, 61%)`};
  margin-left: .5rem;
  margin-right: .5rem;
  cursor: pointer;

  :hover{
    color: ${({ theme }) => theme.text_gray_hover};
  }
`

const Alert = styled.p`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem;
  border-bottom: ${({ theme }) => `1px solid ${theme.text_secondary}`};
`
