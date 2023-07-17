import { signInWithGoogle, sign_out } from "../services/authentication";
// import { getLoggedIn, getProfileImage, setLoggedIn } from "../config/config-variables";
import './header-log-in.css';

// DOM elements
const LoginDiv = document.querySelector('#header__logIn');
const LogInButton = () => document.querySelector('#header__logInButton');

// Control Variables
let userVariable = null;
let isConfigMenuActive = false;

// TEMPLATES
const configMenu = () => {
    let menuClass = "header__userConfig";
    if (isConfigMenuActive) menuClass = '"header__userConfig header__userConfig-active"';

    return (`
    <div class=${menuClass}>
        <button id="header__signOutButton">Sign Out</button>
    </div>`)
}

let LoggedInImageTemplate = (url) => {
    return `
    <img id="header__profile-image" class="header__profile-image" alt="Profile Image" src=${url}>
    ${configMenu()}`
}

let logInButtonTemplate = `
    <button class="header__logInButton" id="header__logInButton">Log in</button>
    `

// FUNCTIONS 
function updateProfileImage (user) {
    if (user) {
        const url = user.photoURL;
        LoginDiv.innerHTML = LoggedInImageTemplate(url)
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
                updateProfileImage(user)
            })
        }catch (err){
            console.log('log in not disponible \n', err)
        }
    }

    // LOGGED IN IMAGE -> open menu
    if(event.target.matches('#header__profile-image')) {
        isConfigMenuActive = !isConfigMenuActive
        updateProfileImage(userVariable);
    }

    // SIGN OUT BUTTON
    if (event.target.matches('#header__signOutButton')) {
        sign_out()
            .then(result => {
                updateProfileImage(null)
            })
    }
}

export const setUpLogin = () => {
    LoginDiv.addEventListener('click', handleLogInClick);
    updateProfileImage(null)
}
