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

        const home = document.createElement('li');
        home.textContent = "Home";
        navBar.appendChild(home);

        const menu = document.createElement('li');
        menu.textContent = "Menu";
        navBar.appendChild(menu);

        const contact = document.createElement('li');
        contact.textContent = "Contact";
        navBar.appendChild(contact);
    }

    addContent () {
        contentLoad(this.content);
    }

}

const restaurantDisplay = new display();
restaurantDisplay.addContent();

