import './style.css';
import backgroundImage from './images/background-image.jpg';

function component() {
    const element = document.createElement('div');
    element.classList.add('hello');

    const h1 = document.createElement('h1');
    h1.textContent = 'HI';
    element.appendChild(h1);

    const myImage = new Image();
    myImage.src = backgroundImage;
    element.appendChild(myImage);

    return element;
} 

document.body.appendChild(component());