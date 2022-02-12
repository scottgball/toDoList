import './style.css';
import { projectFactory } from './projectManager.js';
import { taskFactory } from './taskManager.js';





const projectForm = document.querySelector('#projectForm');
projectForm.onsubmit = () => {
  
  console.log('projsubmitted');
  const newProject = projectFactory(document.getElementById('projectName').value, document.getElementById('projectDescription').value, document.getElementById('projectDueDate').value, document.getElementById('projectImportance'), document.getElementById('projectCompletedOrNot'));
  console.log(newProject);
  event.preventDefault();;
};

const taskForm = document.querySelector('#taskForm');
taskForm.onsubmit = () => {

  console.log('tasksubmitted');
  const newTask = taskFactory(document.getElementById('taskName').value, document.getElementById('taskDescription').value, document.getElementById('taskDueDate').value, document.getElementById('taskImportance'), document.getElementById('taskCompletedOrNot'));
  console.log(newTask);
  event.preventDefault();
};
   