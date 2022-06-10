import { useContext, useEffect, useState } from "react";
import { Droppable, DragDropContext } from "react-beautiful-dnd";
import { CountriesContext } from "../../../context/todo/TodoContext";
import { Task } from "../Task";
import { filterItem} from "../../../helpers/filterItem";
import { reorderItems, reorderItemsFiltered } from "../../../helpers/reorderItems";
import { Alert, BtnFilter, BtnList, HelpText, ListOptions, OtherOptions, Remaining, TaskUl } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const TasksList = () => {
  const { todoList, clearCompleted, updateList } = useContext(CountriesContext);
  const [ todoFiltered, setTodoFiltered ] = useState([]);
  const [ filter, setfilter ] = useState('All');
  const toastCompleted = () => toast.success("Cleared successfully", { theme:"colored" });

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

  const handleClearCompleted = () => {
    const existsCompleted = todoList.some(item => item.completed);
    if (existsCompleted) {
      clearCompleted();
      toastCompleted();
    }
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
          <input type="button" value={"Clear Completed"} onClick={ handleClearCompleted }/>
        </OtherOptions>
      </ListOptions>
      <HelpText>Drag and drop to reorder list</HelpText>
      <ToastContainer position="bottom-right"/>
    </DragDropContext>
  );
};