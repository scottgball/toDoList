import { parse, add, differenceInDays } from 'date-fns';


const projectFactory = (projectName, projectDescription, projectDueDate, isProjectUrgent, projectCompletedOrNot) => {
  const getDatesUntilProjectDue = (projectDueDate) => {  
    const dateString = `${projectDueDate}`;
    const parsedDueDate = parse(dateString, 'yyyy-MM-dd', new Date());
    const parsedDueDatePlusOne = add(parsedDueDate, {days: 1});
    const difference = differenceInDays(
      parsedDueDatePlusOne,
      new Date(),
    );
    return difference;
  };

  let tasks = [];

  const addTaskToProject = (newTask) => {
    tasks.push(newTask);
  };

  

  return {
    projectName,
    projectDescription,
    projectDueDate,
    isProjectUrgent,
    projectCompletedOrNot,
    getDatesUntilProjectDue,
    tasks,
    addTaskToProject
  }
};

export {
  projectFactory

}