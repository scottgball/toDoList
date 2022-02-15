import { parse, add, differenceInDays } from 'date-fns';


const projectFactory = (projectName, projectDescription, projectDueDate, isProjectUrgent, projectCompletedOrNot) => {
  
  
  const getDatesUntilProjectDue = (projectDueDate) => {  //FIGURE OUT HOW TO ADD THIS TO PROTOTYPE!!!!!!!
    
    const dateString = `${projectDueDate}`;
    console.log(dateString);
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