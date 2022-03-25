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

    const contentContainer = document.querySelector('#content');

    const taskForm = document.querySelector('#taskForm');

    addTaskButton.addEventListener('click', (e) => {
      clearContentContainer();
      displayTasks();
      contentContainer.appendChild(taskForm);
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
      let taskStatus = `Task Incomplete`;
      const newTask = taskFactory(document.getElementById('taskName').value, document.getElementById('taskDescription').value, document.getElementById('taskDueDate').value, taskUrgency, taskStatus);
      const contentContainer = document.querySelector('#content');
      const newTaskCard = document.createElement('div');
      newTaskCard.classList.add('newTaskCard');
      const daysUntilTaskDue = newTask.getDatesUntilTaskDue(newTask.taskDueDate);
      const displayTaskInfo = () => {
        newTaskCard.textContent = `${newTask.taskName},
        ${newTask.taskDescription}, 
        due in ${daysUntilTaskDue} days, 
        ${taskUrgency}, 
        ${newTask.taskStatus}`;
      };
      displayTaskInfo();
      const taskCompleteButton = document.createElement('button');
      newTaskCard.appendChild(taskCompleteButton);
      taskCompleteButton.textContent = `Task Completed?`;
      taskCompleteButton.addEventListener('click', (e) => {
        if (newTask.taskStatus === `Task Incomplete`) {
          newTask.taskStatus = `Completed`;
        } else {
          newTask.taskStatus = `Task Incomplete`
        };        
        displayTaskInfo();
        newTaskCard.appendChild(taskCompleteButton);
      });
      contentContainer.appendChild(newTaskCard);
      projects[projectIndex].addTaskToProject(newTask);
      event.preventDefault();
    };

    

    

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
        const newTaskCard = document.createElement('div');
        newTaskCard.classList.add('newTaskCard');
        const daysUntilTaskDue = task.getDatesUntilTaskDue(task.taskDueDate);
        // let taskStatus = `Task Incomplete`;
      const displayTaskInfo = () => {
        newTaskCard.textContent = `${task.taskName},
        ${task.taskDescription}, 
        due in ${daysUntilTaskDue} days, 
        ${taskUrgency}, 
        ${task.taskStatus}`;
      };
      displayTaskInfo();
      const taskCompleteButton = document.createElement('button');
      newTaskCard.appendChild(taskCompleteButton);
      taskCompleteButton.textContent = `Task Completed?`;
      taskCompleteButton.addEventListener('click', (e) => {
        if (task.taskStatus === `Task Incomplete`) {
          task.taskStatus = `Completed`;
        } else {
          task.taskStatus = `Task Incomplete`
        };        
        displayTaskInfo();
        newTaskCard.appendChild(taskCompleteButton);
      });
        contentContainer.appendChild(newTaskCard);
      });
    };
    
    sideBar.appendChild(newProjectCard);
    
    event.preventDefault();
    
  };
  
})();





  
