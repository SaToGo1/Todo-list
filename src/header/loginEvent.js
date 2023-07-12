import { signInWithGoogle } from "../services/authentication";
import { getLoggedIn, getProfileImage, setLoggedIn } from "../config/config-variables";

const LoginDiv = document.querySelector('#header__logIn');
const LogInButton = () => document.querySelector('#header__logInButton');

let LoogedInImageTemplate = (url) => {
    return `<img id="header__profile-image" class="header__profile-image" alt="Profile Image" src=${url}>`
}

let buttonTemplate = `
    <button class="header__logInButton" id="header__logInButton">Log in</button>`

function updateProfileImage () {
    const isLoggedIn = getLoggedIn();
    if (isLoggedIn) {
        let url = getProfileImage()
        LoginDiv.innerHTML = LoogedInImageTemplate(url)
    } else {
        LoginDiv.innerHTML = buttonTemplate;
    }
}

function handleLogInClick (event) {
    // We click when we are still not logged in
    if (event.target.matches('#header__logInButton')) {
        try {
            signInWithGoogle()
            .then(result => {
                updateProfileImage()
            })
        }catch (err){
            console.log('log in not disponible \n')
        }
    }

    // TODO:
    // We click when we are logged in
    if (event.target.matches('#header__profile-image')) {
        setLoggedIn(false);
        updateProfileImage()
    }
}
export const setUpLogin = () => {
    LoginDiv.addEventListener('click', handleLogInClick);
}
