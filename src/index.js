import addProject from "./SideBar/addProject";
import taskDataMod from "./Main/taskData";

import mainSectionsClass from "./SideBar/mainSections"

import { setUpLogin } from "./header/loginEvent";

let taskData = new taskDataMod();

// This class has to be initialized only 1 time.
let addProjectObj = new addProject(taskData);
addProjectObj.addProjectClick();

let mainSections = new mainSectionsClass(taskData);
// timeout so it gets in the queue of async events and loads
// the page after all the project / task data is loaded.
setTimeout(() => mainSections.initialize(), 1);

setUpLogin({taskData, addProjectObj, mainSections});
