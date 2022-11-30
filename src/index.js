import addProject from "./SideBar/addProject";

import mainSectionsClass from "./SideBar/mainSections"

// This class has to be initialized only 1 time.
let addProjectObj = new addProject();
addProjectObj.addProjectClick();

let mainSections = new mainSectionsClass();
mainSections.initialize();