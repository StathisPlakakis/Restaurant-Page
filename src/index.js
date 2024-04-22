import './style.css';
import contentLoad from './page-load';



class display {
    constructor () {
        this.name = 'Restaurant Page';
    }

    content () {
        const element = document.createElement('h1');
        element.textContent = 'jdsfhjkjsadbfkas,';
        document.querySelector('#content').appendChild(element);
    }

    addContent () {
        contentLoad(this.content);
    }

}

const restaurantDisplay = new display();
restaurantDisplay.addContent();

