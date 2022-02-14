import './style.css';
import { projectFactory } from './projectManager.js';
import { taskFactory } from './taskManager.js';





const projectDisplayControl = (function () {

  const projectForm = document.querySelector('#projectForm');
  projectForm.onsubmit = () => {
    createNewProject();
  };

  let projectUrgency = 'VeryUrgent';

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
    newProjectCard.textContent = `${newProject.projectName} 
    ${newProject.projectDescription} 
    ${newProject.projectDueDate} 
    ${projectUrgency} 
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
    console.log('tasksubmitted');
    const newTask = taskFactory(document.getElementById('taskName').value, document.getElementById('taskDescription').value, document.getElementById('taskDueDate').value, taskUrgency, document.getElementById('taskCompletedOrNot'));
    console.log(newTask);
    const contentContainer = document.querySelector('#content');
    const newTaskCard = document.createElement('div');
    newTaskCard.textContent = `${newTask.taskName}
    ${newTask.taskDescription} 
    ${newTask.taskDueDate} 
    ${taskUrgency} 
    Task Incomplete`;
    contentContainer.appendChild(newTaskCard);
    event.preventDefault();
  };
})();



  
