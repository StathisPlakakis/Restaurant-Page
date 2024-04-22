import './style.css';
import contentLoad from './page-load';
import welcomePage from './welcome';




class display {
    constructor () {
        this.name = 'Restaurant Page';
    }

    content () {

        const navBar = document.querySelector('nav');
        const content = document.querySelector('#content');

        const domain = document.querySelector('header');
        domain.textContent = "Code & Coffee";
        domain.addEventListener('click', () => {
            content.innerHTML = '';
            let newContent = welcomePage();
            content.appendChild(newContent);
        });

        const home = document.createElement('li');
        home.classList.add('home');
        home.textContent = "Home";
        navBar.appendChild(home);

        const menu = document.createElement('li');
        menu.classList.add('menu');
        menu.textContent = "Menu";
        navBar.appendChild(menu);

        const contact = document.createElement('li');
        contact.classList.add('contact');
        contact.textContent = "Contact";
        navBar.appendChild(contact);

        const blackFilter = document.createElement('div');
        blackFilter.classList.add('filter');
        content.appendChild(blackFilter);

        const welcomingText = document.createElement('p');
        welcomingText.classList.add('welcome');
        welcomingText.textContent = 'Welcome to "Code & Coffee," a unique place designed with software developers in mind. '
        blackFilter.appendChild(welcomingText);

    }

    addContent () {
        contentLoad(this.content);
    }

}

const restaurantDisplay = new display();
restaurantDisplay.addContent();

