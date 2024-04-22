import './style.css';
import contentLoad from './page-load';



class display {
    constructor () {
        this.name = 'Restaurant Page';
    }

    content () {
        const header = document.querySelector('.header');
        const domain = document.querySelector('header');
        domain.textContent = "Soft Rest";
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

    }

    addContent () {
        contentLoad(this.content);
    }

}

const restaurantDisplay = new display();
restaurantDisplay.addContent();

