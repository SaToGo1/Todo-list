// TEMPLATES
export const configMenu = ({ isConfigMenuActive }) => {
    let menuClass = "header__userConfig";
    if (isConfigMenuActive) menuClass = '"header__userConfig header__userConfig-active"';

    return (`
    <div class=${menuClass}>
        <button id="header__signOutButton">Sign Out</button>
    </div>`)
}

export const LoggedInImageTemplate = ({ url, isConfigMenuActive }) => {
    return `
    <img id="header__profile-image" class="header__profile-image" alt="Profile Image" src=${url}>
    ${configMenu({ isConfigMenuActive })}`
}

export const logInButtonTemplate = `
    <button class="header__logInButton" id="header__logInButton">Log in</button>
    `