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
function handleLogInClick (event) {
    // LOG IN BUTTON
    if (event.target.matches('#header__logInButton')) {
        try {
            signInWithGoogle()
            .then(user => {
                setUser(user);
                updateProfileImage(user);
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
            })
    }
}

export const setUpLogin = () => {
    LoginDiv.addEventListener('click', handleLogInClick);
    updateProfileImage(null);
}
