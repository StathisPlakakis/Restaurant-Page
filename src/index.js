import './style.css';
import contentLoad from './page-load';



class display {
    constructor () {
        this.name = 'Restaurant Page';
    }

    content () {
        const header = document.querySelector('.header');
        const domain = document.querySelector('header');
        domain.textContent = "Code & Coffee";
        const navBar = document.querySelector('nav');
        const content = document.querySelector('#content');

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

