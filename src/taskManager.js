const taskFactory = (taskName, taskDescription, taskDueDate, isTaskUrgent, taskCompletedOrNot) => {
  return {
    taskName,
    taskDescription,
    taskDueDate,
    isTaskUrgent,
    taskCompletedOrNot,
  };
};


export {
  taskFactory
}