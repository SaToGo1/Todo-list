import projectDataMod from "./projectData";
import taskPageMod from "../Main/taskPage";

export default class addProject {
    constructor(){
        this.addProjectButton = document.getElementById("addProject");
        this.addProjectButtonContainer = document.getElementById("addProjectContainer");

        //Confusing name (?)
        this.addProjectSidebarContainer = document.getElementById("sidebar__projects");

        this.projectData = new projectDataMod();
        this.taskPageArray = [];
    }

    addProjectClick = (action) => {
        this.addProjectButton.addEventListener('click', ()=>{
            let addingProjectDiv = CreateAddingProjectNameElements();

            //hide add project button and show adding project div.
            this.addProjectButtonContainer.style.display = 'none';
            this.addProjectSidebarContainer.append(addingProjectDiv);

            
            let greenButton = document.getElementById("sidebar__accept");
            let redButton = document.getElementById("sidebar__cancel");

            // Cancel new project and show again add Project button
            redButton.addEventListener('click', () => {
                this.addCancelClick(addingProjectDiv)
            });

            //Event for the accept button(green) -> create a new project
            greenButton.addEventListener('click', ()=>{
                this.addAcceptClick(addingProjectDiv)
            });   
        })
    }

    // TODO create addEventListeners for New Project buttons.
    addAcceptClick = (addingProjectDiv) => {
        //ChildNodes[1] => input from adding Project
        //we check if input(name of the project) has more than 0 character.
        let projectNameLen = addingProjectDiv.childNodes[1].textLength;
        let projectName = addingProjectDiv.childNodes[1].value;

        if( projectNameLen > 0 && projectNameLen < 21 ){
            //Create div with new project and add to the DOM.
            let newProjectDiv = CreateNewProjectElements();
            this.addProjectSidebarContainer.append(newProjectDiv);

            //Add Function to Delete button
            let deleteButton = newProjectDiv.childNodes[2]; //maybe i should change childNodes selection(?)
            this.addDeleteClick(projectName, deleteButton);

            //Put add project button as last item in the sidebar project section.
            this.addProjectButtonContainer.parentNode.appendChild(this.addProjectButtonContainer);

            //display add project button as visible again.
            this.addProjectButtonContainer.style.display = 'flex';

            //save the project into project data module.
            this.projectData.saveProject(projectName);

            //load page when clicking on project.
            //LOAD PAGE
            this.projectLoadPageEvent(newProjectDiv, projectName, deleteButton);
            this.activeStyleOnLoadPage(newProjectDiv);

            //delete adding project DIV.
            addingProjectDiv.remove();
        }
        //0 characters or 20+ character.
        else{
            alert("Project name must have between 1 and 20 characters.");
        }
    }

    addCancelClick = (addingProjectDiv) => {
        //Put add project button as last item in the sidebar project section.
        this.addProjectButtonContainer.parentNode.appendChild(this.addProjectButtonContainer);

        //display add project button as visible again.
        this.addProjectButtonContainer.style.display = 'flex';

        //delete adding project DIV.
        addingProjectDiv.remove();
    }
    

    addDeleteClick = (projectName, button) => {
        button.addEventListener('click', () => {
            let isExecuted = confirm("Are you sure you wanna delete the project?");
            
            if(isExecuted){ 
                this.projectData.deleteProject(projectName);
                
                button.parentNode.remove();
            }
        })
    }

    projectLoadPageEvent = (newProjectDiv, projectName, deleteButton) => {
        let projectPage = new taskPageMod(projectName);
        let index = this.taskPageArray.push(projectPage);

        newProjectDiv.addEventListener('click', (event)=>{
            //this event runs in all the div but the delete button.
            if(event.target !== deleteButton){
                this.taskPageArray[index - 1].loadPage();
            }
        })
    }

    //mark the active page in the sidebar.
    activeStyleOnLoadPage = (newProjectDiv) => {
        let sidebarContainerArray = document.getElementsByClassName('sidebar__container');
        let sidebarContainer = newProjectDiv;
        sidebarContainer.addEventListener('click', () => {
            for(let j = 0, len = sidebarContainerArray.length; j < len; j++){
                sidebarContainerArray[j].classList.remove('sidebar__container-active');
            }
            sidebarContainer.classList.add('sidebar__container-active');
        })
    }
}

function CreateAddingProjectNameElements(){
    
    let div = document.createElement('div');
    div.className = "sidebar__container-addingProject sidebar__addProject";
    div.id = "sidebar__addingProject";
    
    let label = document.createElement('label');
    label.for = "sidebar__ProjectNameInput";
    label.textContent = "Project Name:";

    let input = document.createElement('input');
    input.type = "text";
    input.id = "sidebar__ProjectNameInput";
    input.maxLength = 20;
    input.minLength = 1;

    let greenButton = document.createElement('button');
    greenButton.classList.add("sidebar__button", "sidebar__accept");
    greenButton.id = "sidebar__accept";
    greenButton.textContent = "Accept";

    let redButton =  document.createElement('button');
    redButton.classList.add("sidebar__button", "sidebar__cancel");
    redButton.id = "sidebar__cancel";
    redButton.textContent = "Cancel";

    div.append(label);
    div.append(input);
    div.append(greenButton);
    div.append(redButton);

    return div;
}

function CreateNewProjectElements(){
    
    let projectName = document.getElementById("sidebar__ProjectNameInput").value;

    let div = document.createElement('div');
    div.className = "sidebar__container";

    let img = document.createElement('img');
    img.src = "./img/tag.svg";
    img.alt = "icon";
    img.className = "sidebar__icon";

    let button = document.createElement('button');
    button.className = "sidebar__button";
    button.textContent = projectName;

    let button2 = document.createElement('button');
    button2.className = "sidebar__delete";
    button2.textContent = "X";

    div.append(img);
    div.append(button);
    div.append(button2);

    return div;
}
