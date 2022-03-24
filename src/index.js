import './style.css';
import { getDatesUntilProjectDue, projectFactory } from './projectManager.js';
import { taskFactory } from './taskManager.js';
import { parse, format, differenceInDays } from 'date-fns';





const projectDisplayControl = (function () {

  let projects = [];

  let taskButtons = [];

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

  
  let projectIndex;

  const createNewProject = () => {
    const newProject = projectFactory(document.getElementById('projectName').value, document.getElementById('projectDescription').value, document.getElementById('projectDueDate').value, projectUrgency, document.getElementById('projectCompletedOrNot'));
    projects.push(newProject);
    console.table(projects);
    const sideBar = document.querySelector('#sideBar');
    const newProjectCard = document.createElement('div');
    newProjectCard.classList.add('newProjectCard')
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
    taskButtons.push(addTaskButton);
    const viewTasksButton = document.createElement('button');
    viewTasksButton.textContent = `View Tasks`;
    viewTasksButton.classList.add('addTaskButton');
    newProjectCard.appendChild(viewTasksButton);
    const taskForm = document.querySelector('#taskForm');
    addTaskButton.addEventListener('click', (e) => {
      taskForm.classList.remove('taskFormHidden');
      taskForm.classList.add('taskFormDisplayed');
      projectIndex = taskButtons.indexOf(addTaskButton);
    });
    
    taskForm.onsubmit = () => {
      createNewTask();
      taskForm.classList.remove('taskFormDisplayed');
      taskForm.classList.add('taskFormHidden');
      event.preventDefault();
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
      newTaskCard.classList.add('newTaskCard');
      const daysUntilTaskDue = newTask.getDatesUntilTaskDue(newTask.taskDueDate);
      newTaskCard.textContent = `${newTask.taskName},
      ${newTask.taskDescription}, 
      due in ${daysUntilTaskDue} days, 
      ${taskUrgency}, 
      Task Incomplete`;
      contentContainer.appendChild(newTaskCard);
      projects[projectIndex].addTaskToProject(newTask);
      event.preventDefault();
      console.table(projects);
    };

    const contentContainer = document.querySelector('#content');
    viewTasksButton.addEventListener('click', (e) => {
      clearContentContainer();
      displayTasks();
    });

    const clearContentContainer = () => {
      while (contentContainer.firstChild) {
        contentContainer.removeChild(contentContainer.lastChild);
      }
    };

    const displayTasks = () => {
      newProject.tasks.forEach((task) => {
        console.log(task);
        const newTaskCard = document.createElement('div');
        newTaskCard.classList.add('newTaskCard');
        const daysUntilTaskDue = task.getDatesUntilTaskDue(task.taskDueDate);
        newTaskCard.textContent = `${task.taskName},
        ${task.taskDescription}, 
        due in ${daysUntilTaskDue} days, 
        ${taskUrgency}, 
        Task Incomplete`;
        contentContainer.appendChild(newTaskCard);
      });
      // contentContainer.appendChild(newTaskCard)
    };
    
    sideBar.appendChild(newProjectCard);
    
    event.preventDefault();
    
  };
  
})();





  
