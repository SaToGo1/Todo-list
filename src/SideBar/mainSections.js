import taskPage from "../Main/taskPage";

export default class  {
    constructor(){        
        this.home = new taskPage("Home");
        this.today = new taskPage("Today");
        this.week = new taskPage("Week");
        this.month = new taskPage("Month");
    }

    initialize = () => {
        this.home.loadPage();

        let sidebarTimes = document.getElementById('sidebar__times');
        let sidebarButtonArray = sidebarTimes.getElementsByClassName('sidebar__container');
        //Put event listener on everyone of the main 4 buttons(home, ...).
        for(let i = 0, len = sidebarButtonArray.length; i < len; i++){
            let pageButton = sidebarButtonArray[i]
            pageButton.addEventListener('click', () => {
                //example of eval()-> this.home.loadPage();
                eval( "this." + pageButton.textContent.toLowerCase()).loadPage();
            })
        }

        //Event to change the active sidebar button.
        let sidebarContainerArray = document.getElementsByClassName('sidebar__container');
        for(let i = 0, len = sidebarContainerArray.length; i < len; i++){
            let sidebarContainer = sidebarContainerArray[i];
            sidebarContainer.addEventListener('click', () => {
                for(let j = 0, len = sidebarContainerArray.length; j < len; j++){
                    sidebarContainerArray[j].classList.remove('sidebar__container-active');
                }
                sidebarContainer.classList.add('sidebar__container-active');
            })
        }
    }
}
