import { signInWithGoogle, sign_out } from "../services/authentication";
// import { getLoggedIn, getProfileImage, setLoggedIn } from "../config/config-variables";
import './header-log-in.css';

// HTML TEMPLATES
import { LoggedInImageTemplate, logInButtonTemplate } from "../htmlScripts/html_header-log-in";

// DOM elements
const LoginDiv = document.querySelector('#header__logIn');
const LogInButton = () => document.querySelector('#header__logInButton');

// Control Variables
let userVariable = null;
let isConfigMenuActive = false;

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
function handleLogInClick (event) {
    // LOG IN BUTTON
    if (event.target.matches('#header__logInButton')) {
        try {
            signInWithGoogle()
            .then(user => {
                userVariable = user;
                updateProfileImage(user);
            })
        }catch (err){
            console.log('log in not disponible \n', err);
        }
    }

    // LOGGED IN IMAGE -> open menu
    if(event.target.matches('#header__profile-image')) {
        isConfigMenuActive = !isConfigMenuActive;
        updateProfileImage(userVariable);
    }

    // SIGN OUT BUTTON
    if (event.target.matches('#header__signOutButton')) {
        sign_out()
            .then(result => {
                updateProfileImage(null);
                userVariable = null;
            })
    }
}

export const setUpLogin = () => {
    LoginDiv.addEventListener('click', handleLogInClick);
    updateProfileImage(null);
}
