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
//(The ones that are not in projects, home, today, ...).
let sidebartimes = document.getElementById('sidebar__times');
let sidebarButtonArray = sidebartimes.getElementsByClassName('sidebar__container');

//Put event listener on everyone of the main 4 buttons(home, ...).
for(let i = 0, len = sidebarButtonArray.length; i < len; i++){
    let pageButton = sidebarButtonArray[i]
    pageButton.addEventListener('click', () => {
        eval(pageButton.textContent.toLowerCase()).loadPage();
    })
}

//Event to change the active sidebar button.
let sidebarContainerArray = document.getElementsByClassName('sidebar__container');
for(let i = 0, len = sidebarContainerArray.length; i < len; i++){
    let sidebarContainer = sidebarContainerArray[i];
    sidebarContainer.addEventListener('click', () => {
        for(let j = 0, len = sidebarContainerArray.length; j < len; j++){
            sidebarContainerArray[j].classList.remove('sidebar__container-active');
        }
        sidebarContainer.classList.add('sidebar__container-active');
    })
}