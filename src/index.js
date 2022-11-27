//import view from "./view/view";
import addProject from "./SideBar/addProject";

import taskPage from "./Main/taskPage";

// This class has to be initialized only 1 time.
let addProjectObj = new addProject();
addProjectObj.addProjectClick();

let home = new taskPage();
home.loadPage();


let today = new taskPage();
let week = new taskPage();
let month = new taskPage();

let sidebarButtonArray = document.getElementsByClassName('sidebar__button');

for(let i = 0, len = sidebarButtonArray.length; i < len; i++){
    let projectButton = sidebarButtonArray[i]
    projectButton.addEventListener('click', () => {
        eval(projectButton.textContent.toLowerCase()).loadPage();
    })
}

