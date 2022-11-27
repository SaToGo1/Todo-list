//import view from "./view/view";
import addProject from "./SideBar/addProject";

import taskPage from "./Main/taskPage";

// This class has to be initialized only 1 time.
let addProjectObj = new addProject();
addProjectObj.addProjectClick();

let home = new taskPage("Home");
home.loadPage();


let today = new taskPage("Today");
let week = new taskPage("Week");
let month = new taskPage("Month");

let sidebarButtonArray = document.getElementsByClassName('sidebar__button');

for(let i = 0, len = sidebarButtonArray.length; i < len; i++){
    let projectButton = sidebarButtonArray[i]
    projectButton.addEventListener('click', () => {
        eval(projectButton.textContent.toLowerCase()).loadPage();
    })
}

