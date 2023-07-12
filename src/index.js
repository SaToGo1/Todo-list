import addProject from "./SideBar/addProject";
import taskDataMod from "./Main/taskData";

import mainSectionsClass from "./SideBar/mainSections"

import { setUpLogin } from "./header/loginEvent";

let taskData = new taskDataMod();

// This class has to be initialized only 1 time.
let addProjectObj = new addProject(taskData);
addProjectObj.addProjectClick();

let mainSections = new mainSectionsClass(taskData);
mainSections.initialize();

setUpLogin();