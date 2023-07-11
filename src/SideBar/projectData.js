import StoreProjects from "../storage/storeProjects";

export default class projectData {
    constructor(){
        this.projectArray = [];
        let { isStoredData, projectArray } = StoreProjects.initialLoad();
        if (isStoredData) this.projectArray = [...projectArray];
    }

    saveProject = (projectTitle) => {
        let proj = new project(projectTitle);
        this.projectArray.push(proj);

        StoreProjects.saveNewProjectArray(this.projectArray)
    }

    deleteProject = (projectTitle) => {
        for(let i = 0, length = this.projectArray.length; i < length; i++){
            if(this.projectArray[i]){
                if(projectTitle == this.projectArray[i].getTitle()){
                    this.projectArray.splice(i, 1);
                }
            }
        }

        StoreProjects.saveNewProjectArray(this.projectArray)
    }

    isDuplicated = (projectTitle) => {
        let bool = false;
        this.projectArray.forEach(project => {
            if(project.getTitle() === projectTitle){
                bool = true;
            }
        })

        return bool;
    }

    getLength = () => {
        return this.projectArray.length;
    }

    getTitleOnIndex = (i) => {
        return this.projectArray[i].getTitle();
    }
}


class project {
    constructor(title){
        this.title = title;
    }

    getTitle = () => {
        return this.title;
    }
}