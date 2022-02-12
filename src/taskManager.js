const taskFactory = (taskName, taskDescription, taskDueDate, taskImportance, taskCompletedOrNot) => {
  return {
    taskName,
    taskDescription,
    taskDueDate,
    taskImportance,
    taskCompletedOrNot,
  };
};


export {
  taskFactory
}