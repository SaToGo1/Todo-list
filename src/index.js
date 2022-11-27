//import view from "./view/view";
import addProject from "./SideBar/addProject";

import taskPage from "./Main/taskPage";

// This class has to be initialized only 1 time.
let addProjectObj = new addProject();

addProjectObj.addProjectClick();


let taskPg = new taskPage();

taskPg.addTaskEvent();


let Home = new taskPage();

Home.loadPage();
//let Today = new taskPage();

//let sidebarButton = document.getElementsByClassName('sidebar__button');
//for()

