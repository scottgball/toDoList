import './style.css';
import { getDatesUntilProjectDue, projectFactory } from './projectManager.js';
import { taskFactory } from './taskManager.js';
import { parse, format, differenceInDays } from 'date-fns';





const projectDisplayControl = (function () {

  const projectForm = document.querySelector('#projectForm');
  projectForm.onsubmit = () => {
    createNewProject();
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
    sideBar.appendChild(newProjectCard);
    event.preventDefault();
    
  };
})();

const taskDisplayControl = (function () {

  const taskForm = document.querySelector('#taskForm');
  taskForm.onsubmit = () => {
    createNewTask();
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



  
