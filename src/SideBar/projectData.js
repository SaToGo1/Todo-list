export default class projectData {
    constructor(){
        this.projectArray = [];
        if (localStorage.getItem("projectArray") !== null) {
            JSON.parse(localStorage.getItem("projectArray"), (key, value) => {
                if(key == 'title'){
                    let proj = new project(value);
                    this.projectArray.push(proj);
                }
            })
        }
    }

    saveProject = (projectTitle) => {
        let proj = new project(projectTitle);
        this.projectArray.push(proj);
        localStorage.setItem("projectArray", JSON.stringify(this.projectArray));
    }

    deleteProject = (projectTitle) => {
        for(let i = 0, length = this.projectArray.length; i < length; i++){
            if(this.projectArray[i]){
                if(projectTitle == this.projectArray[i].getTitle()){
                    this.projectArray.splice(i, 1);
                }
            }
        }

        localStorage.setItem("projectArray", JSON.stringify(this.projectArray));
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