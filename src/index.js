import './style.css';
import Image from './images/background-image.jpg';

function component() {
    const element = document.createElement('div');
    element.classList.add('hello');

    const h1 = document.createElement('h1');
    h1.textContent = 'HIIIIIII';
    element.appendChild(h1);

    const myImage = new Image();
    myImage.src = Image;

    element.appendChild(myImage);

    return element;
} 

document.body.appendChild(component());