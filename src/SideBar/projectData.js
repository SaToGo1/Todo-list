export default class projectData {
    constructor(){        
        this.projectArray = [];
    }

    saveProject = (title) => {
        let proj = new project(title);
        this.projectArray.push(proj);
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