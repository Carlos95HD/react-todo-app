export const reorderItems = ( todoList, selectedIndex, destineIndex ) => {
  const newList = Array.from(todoList);
  const [reorderedItem] = newList.splice(selectedIndex, 1);
  newList.splice(destineIndex, 0, reorderedItem);

  return newList;
}

export const reorderItemsFiltered = ( todosFiltered, todoList, selectedIndex, destineIndex ) => {
  const selectedItem = todosFiltered[selectedIndex]
  const destineItem = todosFiltered[destineIndex]
  //search and update item in todoList
  const newList = Array.from(todoList);
  const [reorderedItemUpdate] = newList.splice(todoList.indexOf(selectedItem), 1);
  newList.splice(todoList.indexOf(destineItem), 0, reorderedItemUpdate);

  return newList;
}