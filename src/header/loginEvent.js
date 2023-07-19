import { signInWithGoogle, sign_out } from "../services/authentication";
// import { getLoggedIn, getProfileImage, setLoggedIn } from "../config/config-variables";
import './header-log-in.css';

// HTML TEMPLATES
import { LoggedInImageTemplate, logInButtonTemplate } from "../htmlScripts/html_header-log-in";

// Control Variables
import { getUser, setUser } from "../config/user-config";
let isConfigMenuActive = false;

// DOM elements
const LoginDiv = document.querySelector('#header__logIn');
const LogInButton = () => document.querySelector('#header__logInButton');

// FUNCTIONS 
function updateProfileImage (user) {
    if (user) {
        const url = user.photoURL;
        LoginDiv.innerHTML = LoggedInImageTemplate({ url, isConfigMenuActive });
    } else {
        LoginDiv.innerHTML = logInButtonTemplate;
    }
}

// EVENT
function handleLogInClick ({event, taskData, addProjectObj, mainSections}) {
    // LOG IN BUTTON
    if (event.target.matches('#header__logInButton')) {
        try {
            signInWithGoogle()
            .then(user => {
                setUser(user);
                updateProfileImage(user);
                taskData.loadTasks();
                addProjectObj.loadProjectFromStorage();
                mainSections.loadHome();
            })
        }catch (err){
            console.log('log in not disponible \n', err);
        }
    }

    // LOGGED IN IMAGE -> open menu
    if(event.target.matches('#header__profile-image')) {
        isConfigMenuActive = !isConfigMenuActive;
        updateProfileImage(getUser());
    }

    // SIGN OUT BUTTON
    if (event.target.matches('#header__signOutButton')) {
        sign_out()
            .then(result => {
                updateProfileImage(null);
                setUser(null);
                taskData.loadTasks();
                addProjectObj.loadProjectFromStorage();
                mainSections.loadHome();
                
            })
    }
}

export const setUpLogin = ({taskData, addProjectObj, mainSections}) => {
    LoginDiv.addEventListener('click', (event) => {
        handleLogInClick({event, taskData, addProjectObj, mainSections});
    });
    updateProfileImage(null);
}

/*
TODO
- load project from storage on log in

*/