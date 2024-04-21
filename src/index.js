import Image from './images/background-image.jpg';

function component() {
    const element = document.createElement('div');

    const myImage = new Image();
    myImage.src = Image;

    element.appendChild(myImage);

    return element;
} 

document.body.appendChild(component());