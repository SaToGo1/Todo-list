import project from "../SideBar/project";
// import { db } from "../config/firebase-config";
import { getUser } from "../config/user-config";


const StoreProjects = {
    initialLoad: () => {
        let isStoredData = false;
        let projectArray = [];

        if (getUser()) {
            console.log('loggedn in') //--------------------------------------------------------
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
        if (getUser()) {
            console.log('loggedn in') //--------------------------------------------------------
            
        } else {
            localStorage.setItem("projectArray", JSON.stringify(projectArray));
        }
    }
}

export default StoreProjects;
