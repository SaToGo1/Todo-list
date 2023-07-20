import project from "../SideBar/project";
// import { db } from "../config/firebase-config";
import { getUser } from "../config/user-config";
import { get, store } from "../services/firestore";


const StoreProjects = {
    initialLoad: async () => {
        let isStoredData = false;
        let projectArray = [];
        let user = getUser();
        let userData = null;

        if (user) {
            isStoredData = true;
            userData = await get({user})
            let projects = userData.projects
            if (projects !== '') {
                JSON.parse(projects, (key, value) => {
                    if(key == 'title'){
                        let proj = new project(value);
                        projectArray.push(proj);
                    }
                });
            }
        } else if (localStorage.getItem("projectArray") !== null) {
            isStoredData = true;
            JSON.parse(localStorage.getItem("projectArray"), (key, value) => {
                if(key == 'title'){
                    let proj = new project(value);
                    projectArray.push(proj);
                }
            })
        }

        return {
            isStoredData,
            projectArray
        }
    },

    saveNewProjectArray: (projectArray) => {
        let user = getUser()

        if (user) {
            let projects = JSON.stringify(projectArray);
            store({user, projects})
        } else {
            localStorage.setItem("projectArray", JSON.stringify(projectArray));
        }
    }
}

export default StoreProjects;
