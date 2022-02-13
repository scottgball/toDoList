
const displayNewProject = () => {
  const sideBar = document.querySelector('#sideBar');
  const newProjectCard = document.createElement('p');
  
  sideBar.appendChild(newProjectCard);
  return newProjectCard;
};

export {
  displayNewProject
}