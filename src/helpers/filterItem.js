export const filterItem = ( items, type ) => {
  if (type === "Completed") {
    return items.filter(item => item.completed);
  } else if (type === "Active") {
    return items.filter(item => !item.completed);
  }
  return items;
}