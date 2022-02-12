
const projectFactory = (projectName, projectDescription, projectDueDate, projectImportance, projectCompletedOrNot) => {
  return {
    projectName,
    projectDescription,
    projectDueDate,
    projectImportance,
    projectCompletedOrNot,
  };
};


export {
  projectFactory
}