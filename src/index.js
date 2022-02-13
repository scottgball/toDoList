import './style.css';
import { projectFactory } from './projectManager.js';
import { taskFactory } from './taskManager.js';







  const projectForm = document.querySelector('#projectForm');
  projectForm.onsubmit = () => {
    createNewProject();
  };

  const createNewProject = () => {
    const newProject = projectFactory(document.getElementById('projectName').value, document.getElementById('projectDescription').value, document.getElementById('projectDueDate').value, document.getElementById('projectImportance'), document.getElementById('projectCompletedOrNot'));
    const sideBar = document.querySelector('#sideBar');
    const newProjectCard = document.createElement('div');
    newProjectCard.textContent = `${newProject.projectName} 
    ${newProject.projectDescription} 
    ${newProject.projectDueDate} 
    ${newProject.projectImportance} 
    ${newProject.projectCompletedOrNot}`;
    sideBar.appendChild(newProjectCard);
    event.preventDefault();
  };


const taskForm = document.querySelector('#taskForm');
taskForm.onsubmit = () => {
  createNewTask();
};

const createNewTask = () => {
  console.log('tasksubmitted');
  const newTask = taskFactory(document.getElementById('taskName').value, document.getElementById('taskDescription').value, document.getElementById('taskDueDate').value, document.getElementById('taskImportance'), document.getElementById('taskCompletedOrNot'));
  console.log(newTask);
  const contentContainer = document.querySelector('#content');
  const newTaskCard = document.createElement('div');
  newTaskCard.textContent = `${newTask.taskName}
  ${newTask.taskDescription} 
  ${newTask.taskDueDate} 
  ${newTask.taskImportance} 
  ${newTask.taskCompletedOrNot}`;
  contentContainer.appendChild(newTaskCard);
  event.preventDefault();
};



  
