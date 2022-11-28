//import view from "./view/view";
import addProject from "./SideBar/addProject";

import taskPage from "./Main/taskPage";

// This class has to be initialized only 1 time.
let addProjectObj = new addProject();
addProjectObj.addProjectClick();

let home = new taskPage("Home");
let today = new taskPage("Today");
let week = new taskPage("Week");
let month = new taskPage("Month");

//initialize home page
home.loadPage();

//Select the main 4 butons on sidebar.
//(The ones that are not in projects).
let sidebartimes = document.getElementById('sidebar__times');
let sidebarButtonArray = sidebartimes.getElementsByClassName('sidebar__container');

//Put event listener on everyone of the main 4 buttons.
for(let i = 0, len = sidebarButtonArray.length; i < len; i++){
    let projectButton = sidebarButtonArray[i]
    projectButton.addEventListener('click', () => {
        eval(projectButton.textContent.toLowerCase()).loadPage();
    })
}