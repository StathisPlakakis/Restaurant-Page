import './style.css';
import contentLoad from './page-load';
import welcomePage from './welcome';
import homePage from './home';
import aboutPage from './about';
import menuPage from './menu';




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

        
        const menu = document.createElement('li');
        menu.classList.add('menu');
        menu.textContent = "Menu";
        menu.addEventListener('click', () => {
            content.innerHTML = '';
            let newContent = menuPage();
            content.appendChild(newContent);
        });
        navBar.appendChild(menu);

        const home = document.createElement('li');
        home.classList.add('home');
        home.textContent = "Info";
        home.addEventListener('click', () => {
            content.innerHTML = '';
            let newContent = homePage();
            content.appendChild(newContent);
        });
        navBar.appendChild(home);

        const about = document.createElement('li');
        about.classList.add('about');
        about.textContent = "About";
        about.addEventListener('click', () => {
            content.innerHTML = '';
            let newContent = aboutPage();
            content.appendChild(newContent);
        });
        navBar.appendChild(about);

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

