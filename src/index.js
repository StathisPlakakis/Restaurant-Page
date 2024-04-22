import './style.css';

function component() {
    const element = document.createElement('div');
    element.setAttribute('id', 'content');
    
    return element;
} 

document.body.appendChild(component());