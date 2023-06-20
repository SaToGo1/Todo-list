export function ProjectErrorMessage ({ message }) {
    let message2Element = document.querySelector('#sidebar__addingProject>p');
    let messageElement = document.createElement('p');
    messageElement.style.color = 'red'
    messageElement.style.fontSize = '0.9rem'
    messageElement.textContent = message;
    // #1 does not exist a message
    if(message2Element == null) {
        document.querySelector('#sidebar__addingProject').append(messageElement);
        return 0;
    }

    // #2 our error message already is displayed.
    if(message2Element.textContent == messageElement.textContent) return 0;

    // #3 different error message
    message2Element.remove();
    document.querySelector('#sidebar__addingProject').append(messageElement);
    return 0;
}