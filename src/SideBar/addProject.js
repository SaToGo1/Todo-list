import projectDataMod from "./projectData";
import taskPageMod from "../Main/taskPage";
import { CreateAddingProjectNameElements, CreateNewProjectElements, deleteConfirmationDiv } from '../htmlScripts/html_addProject'
import { ProjectErrorMessage } from "../ErrorMessages/addProjectErrMessages";

export default class addProject {
    constructor(taskData){
        this.addProjectButton = document.getElementById("addProject");
        this.addProjectButtonContainer = document.getElementById("addProjectContainer");

        //Confusing name (?)
        this.addProjectSidebarContainer = document.getElementById("sidebar__projects");

        // Esto no es muy bueno.
        this.taskPageArray = [];

        this.taskData = taskData;

        this.projectData = new projectDataMod();
        if (localStorage.getItem("projectArray") !== null) {
            this.loadProjectFromStorage();
        }
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


    addAcceptClick = (addingProjectDiv) => {
        //ChildNodes[1] => input from adding Project
        //we check if input(name of the project) has more than 0 character.
        let projectNameLen = addingProjectDiv.childNodes[1].value.length;
        let projectName = addingProjectDiv.childNodes[1].value;

        if(this.projectData.isDuplicated(projectName)){
            ProjectErrorMessage({ message: "Project Name already exists." });
            return 0;
        }

        if( projectNameLen > 0 && projectNameLen < 21 ){
            //Create div with new project and add to the DOM.
            let newProjectDiv = CreateNewProjectElements();
            this.addProjectSidebarContainer.append(newProjectDiv);

            //Put add project button as last item in the sidebar project section.
            this.addProjectButtonContainer.parentNode.appendChild(this.addProjectButtonContainer);

            //display add project button as visible again.
            this.addProjectButtonContainer.style.display = 'flex';

            //save the project into project data module.
            this.projectData.saveProject(projectName);

            //Delete button
            let deleteButton = newProjectDiv.childNodes[2]; //maybe i should change childNodes selection(?)

            //load page when clicking on project.
            //LOAD PAGE
            let index = this.projectLoadPageEvent(newProjectDiv, projectName, deleteButton);
            this.activeStyleOnLoadPage(newProjectDiv);

            //Add Function to Delete button
            this.addDeleteClick(projectName, deleteButton, index);

            //delete adding project DIV.
            addingProjectDiv.remove();
        }
        //0 characters or 20+ character.
        else{
            ProjectErrorMessage({ message: "Project name must have between 1 and 20 characters." });
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
    
    // Add delete functionality when you click the delete button on a project
    // When you click delete project a popup will appear to confirm the action.
    addDeleteClick = (projectName, button, index) => {
        button.addEventListener('click', (event) => {
            const message = "Are you sure you wanna delete the project? \nif you remove the project you will delete all the tasks of this project."
            let confirmDiv = deleteConfirmationDiv({
                message,
                x: event.clientX,
                y: event.clientY
            })
            document.getElementsByTagName('body')[0].append(confirmDiv)

            let buttonAccept = confirmDiv.querySelector(`button`);
            let buttonDecline = confirmDiv.querySelector(`button~button`);

            // CONFIRM DELETING THE PROJECT
            buttonAccept.addEventListener('click', () => {
                this.deleteAllTasksInProject(projectName, index);
                this.projectData.deleteProject(projectName);
                
                button.parentNode.remove();

                confirmDiv.remove();
                

                // if actual taskpage is = to page deleted then reset content page.
                let childs = document.getElementsByClassName('content__page')[0].childNodes//[0].innerText
                if (childs.length > 0) {
                    let title = childs[0].innerText
                    if (projectName === title) {
                        document.querySelector('.content__page').remove()
                    }
                }
            })

            // CANCEL DELETING THE PROJECT
            buttonDecline.addEventListener('click', () => {
                confirmDiv.remove();
            })
        })
    }

    projectLoadPageEvent = (newProjectDiv, projectName, deleteButton) => {
        let projectPage = new taskPageMod(projectName, this.taskData);
        let index = this.taskPageArray.push(projectPage);

        newProjectDiv.addEventListener('click', (event)=>{
            //this event runs in all the div but the delete button.
            if(event.target !== deleteButton){
                this.taskPageArray[index - 1].loadPage();
            }
        })
        return index
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

    deleteAllTasksInProject = (projectName, index) => {
        this.taskPageArray[index - 1].deleteAllTasksInPage(projectName);
    }

    loadProjectFromStorage = async () => {
        const sidebarContainers = document.querySelectorAll('.sidebar__container-projects');
        sidebarContainers.forEach(container => container.remove());
        this.taskPageArray = [];

        await this.projectData.loadProjects();

        let length = await this.projectData.getLength();

        for(let i = 0; i < length; i++){
            let projectName = this.projectData.getTitleOnIndex(i);

            //Create div with new project and add to the DOM.
            let newProjectDiv = CreateNewProjectElements(projectName);
            this.addProjectSidebarContainer.append(newProjectDiv);

            //Put add project button as last item in the sidebar project section.
            this.addProjectButtonContainer.parentNode.appendChild(this.addProjectButtonContainer);

            //display add project button as visible again.
            this.addProjectButtonContainer.style.display = 'flex';

            //Delete button
            let deleteButton = newProjectDiv.childNodes[2]; //maybe i should change childNodes selection(?)

            //load page when clicking on project.
            //LOAD PAGE
            let index = this.projectLoadPageEvent(newProjectDiv, projectName, deleteButton);
            this.activeStyleOnLoadPage(newProjectDiv);

            //Add Function to Delete button
            this.addDeleteClick(projectName, deleteButton, index);
            
        }
    }
}
