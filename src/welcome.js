function welcomePage () {
    const blackFilter = document.createElement('div');
    blackFilter.classList.add('filter');

    const welcomingText = document.createElement('p');
    welcomingText.classList.add('welcome');
    welcomingText.textContent = 'Welcome to "Code & Coffee," a unique place designed with software developers in mind. '
    blackFilter.appendChild(welcomingText);

    return blackFilter;
}

export default welcomePage;