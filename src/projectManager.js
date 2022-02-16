import { parse, add, differenceInDays } from 'date-fns';


const projectFactory = (projectName, projectDescription, projectDueDate, isProjectUrgent, projectCompletedOrNot) => {
  
  
  const getDatesUntilProjectDue = (projectDueDate) => {  //Could try to distill to one factory function prototype for both projects and tasks, which projectFactory and taskFactory both call when creating a new project/task
    
    const dateString = `${projectDueDate}`;
    const parsedDueDate = parse(dateString, 'yyyy-MM-dd', new Date());
    const parsedDueDatePlusOne = add(parsedDueDate, {days: 1});
    const difference = differenceInDays(
      parsedDueDatePlusOne,
      new Date(),
    );

    return difference;
  };

  return {
    projectName,
    projectDescription,
    projectDueDate,
    isProjectUrgent,
    projectCompletedOrNot,
    getDatesUntilProjectDue
  };
};

export {
  projectFactory,
}