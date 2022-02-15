import { parse, add, differenceInDays } from 'date-fns';

const taskFactory = (taskName, taskDescription, taskDueDate, isTaskUrgent, taskCompletedOrNot) => {
  
  const getDatesUntilTaskDue = (taskDueDate) => {
    
    const dateString = `${taskDueDate}`;
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
    taskName,
    taskDescription,
    taskDueDate,
    isTaskUrgent,
    taskCompletedOrNot,
    getDatesUntilTaskDue
  };
};

export {
  taskFactory
}