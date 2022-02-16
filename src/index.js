import './style.css';
import { getDatesUntilProjectDue, projectFactory } from './projectManager.js';
import { taskFactory } from './taskManager.js';
import { parse, format, differenceInDays } from 'date-fns';





const projectDisplayControl = (function () {

  const addProjectButton = document.querySelector("#addProjectButton");
  addProjectButton.addEventListener('click', (e) => {
    projectForm.classList.remove('projectFormHidden');
    projectForm.classList.add('projectFormDisplayed');
  });

  const projectForm = document.querySelector('#projectForm');
  projectForm.onsubmit = () => {
    createNewProject();
    projectForm.classList.remove('projectFormDisplayed');
    projectForm.classList.add('projectFormHidden');
  };

  let projectUrgency = 'Very Urgent';

  const projectRadios = document.querySelectorAll('input[name="projectUrgency"]');
  projectRadios.forEach((projectRadio) => {
    projectRadio.addEventListener('click', (e) => {
      return projectUrgency = projectRadio.value;
    });
  });



  const createNewProject = () => {
    const newProject = projectFactory(document.getElementById('projectName').value, document.getElementById('projectDescription').value, document.getElementById('projectDueDate').value, projectUrgency, document.getElementById('projectCompletedOrNot'));
    const sideBar = document.querySelector('#sideBar');
    const newProjectCard = document.createElement('div');
    const daysUntilProjectDue = newProject.getDatesUntilProjectDue(newProject.projectDueDate);
    newProjectCard.textContent = `${newProject.projectName}, 
    ${newProject.projectDescription}, 
    project due in ${daysUntilProjectDue} days,
    ${projectUrgency}, 
    Project Incomplete`;
    const addTaskButton = document.createElement('button');
    addTaskButton.textContent = 'Add A Task To This Project';
    addTaskButton.classList.add('addTaskButton');
    newProjectCard.appendChild(addTaskButton);

    addTaskButton.addEventListener('click', (e) => {
      const taskForm = document.querySelector('#taskForm');
      taskForm.classList.remove('taskFormHidden');
      taskForm.classList.add('taskFormDisplayed');
    });

    // const addTaskButtons = document.querySelectorAll('.addTaskButton');
    // addTaskButtons.forEach((button)  => {
    //  button.addEventListener('click', (e) => {
    //   const taskForm = document.querySelector('#taskForm');
    //   taskForm.classList.remove('taskFormHidden');
    //   taskForm.classList.add('taskFormDisplayed');
    //     });
    //   };

    sideBar.appendChild(newProjectCard);
    event.preventDefault();
    // openTaskForm();
  };
})();



// const taskButtonActivate = () => {

// };

// const openTaskForm = () => {
  
// };



const taskDisplayControl = (function () {

  const taskForm = document.querySelector('#taskForm');
  taskForm.onsubmit = () => {
    createNewTask();
    taskForm.classList.remove('taskFormDisplayed');
    taskForm.classList.add('taskFormHidden');
  };

  let taskUrgency = `Very Urgent`;

  const taskRadios = document.querySelectorAll('input[name="taskUrgency"]');
  taskRadios.forEach((taskRadio) => {
    taskRadio.addEventListener('click', (e) => {
      return taskUrgency = taskRadio.value;
    });
  });

  const createNewTask = () => {
    const newTask = taskFactory(document.getElementById('taskName').value, document.getElementById('taskDescription').value, document.getElementById('taskDueDate').value, taskUrgency, document.getElementById('taskCompletedOrNot'));
    const contentContainer = document.querySelector('#content');
    const newTaskCard = document.createElement('div');
    const daysUntilTaskDue = newTask.getDatesUntilTaskDue(newTask.taskDueDate);
    newTaskCard.textContent = `${newTask.taskName},
    ${newTask.taskDescription}, 
    task due in ${daysUntilTaskDue} days, 
    ${taskUrgency}, 
    Task Incomplete`;
    contentContainer.appendChild(newTaskCard);
    event.preventDefault();
    
  };
})();



  
