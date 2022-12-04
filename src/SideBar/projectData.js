export default class projectData {
    constructor(){        
        this.projectArray = [];
    }

    saveProject = (projectTitle) => {
        let proj = new project(projectTitle);
        this.projectArray.push(proj);
    }

    deleteProject = (projectTitle) => {
        for(let i = 0, length = this.projectArray.length; i < length; i++){
            if(this.projectArray[i]){
                if(projectTitle == this.projectArray[i].getTitle()){
                    this.projectArray.splice(i, 1);
                }
            }
        }
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