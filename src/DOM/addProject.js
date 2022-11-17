export default class addProject {
    constructor(){
        this.addProjectButton = document.getElementById("addProject");
        this.addProjectContainer = document.getElementById("addProjectContainer");
        //this.addProjectAccept = document.getElementById("sidebar__accept");
        //this.addProjectCancel = document.getElementById("sidebar__cancel");
        this.addProjectSidebarContainer = document.getElementById("sidebar__projects");
    }

    addProjectClick = (action) => {
        this.addProjectButton.addEventListener('click', ()=>{
            let div = document.createElement('div');
            div.className = "sidebar__container-addingProject sidebar__addProject";
            div.id = "sidebar__addProject"
            div.innerHTML = HTMLTemplateAddProjectName();

            this.addProjectContainer.style.display = 'none';
            this.addProjectSidebarContainer.append(div);

            div.button.addEventListener('click', ()=>{
                this.addAcceptCancelClick();
            })
        })
    }

    addAcceptCancelClick = () => {
        this.addProjectButton.addEventListener('click', ()=>{
            let addProject = document.getElementById("sidebar__addProject");
            let projectName = document.getElementById("sidebar__ProjectNameInput").value;

            let div = document.createElement('div');
            div.className = "sidebar__container";
            div.innerHTML = HTMLTemplateCreateNewProject(projectName);

            this.addProjectSidebarContainer.append(div);
        })
    }
}


//addProjectContainer
//addProject


function HTMLTemplateAddProjectName(){
    
    return `
        <label for="sidebar__ProjectNameInput">Project Name:</label>
        <input type="text" id="sidebar__ProjectNameInput">
        <button class="sidebar__button sidebar__accept" id="sidebar__accept">Accept</button>
        <button class="sidebar__button sidebar__cancel" id="sidebar__cancel">Cancel</button>
    `
}

function HTMLTemplateCreateNewProject(projectName){
    
    return `
    <img src="./img/icon.svg" alt="icon" class="sidebar__icon">
    <button class="sidebar__button">${projectName}</button>
    <button class="sidebar__delete">X</button>
    `
}