const StoreProjects = {
    initialLoad: () => {
        let isStoredData = false;
        let projectArray = [];

        if (localStorage.getItem("projectArray") !== null) {
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
        localStorage.setItem("projectArray", JSON.stringify(projectArray));
    }
}

export default StoreProjects;
