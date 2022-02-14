
const projectFactory = (projectName, projectDescription, projectDueDate, isProjectUrgent, projectCompletedOrNot) => {
  return {
    projectName,
    projectDescription,
    projectDueDate,
    isProjectUrgent,
    projectCompletedOrNot,
  };
};



export {
  projectFactory
}