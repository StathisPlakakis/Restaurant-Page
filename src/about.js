function aboutPage () {
    const blackFilter = document.createElement('div');
    blackFilter.classList.add('filter');

    const aboutText1 = document.createElement('h2');
    aboutText1.classList.add('aboutt');
    aboutText1.textContent = 'About us'
    blackFilter.appendChild(aboutText1);

    const aboutText2 = document.createElement('p');
    aboutText2.classList.add('aboutt');
    aboutText2.textContent = "Code & Coffee, is the cafe-bar-restaurant designed for software developers. Nestled in the heart of the tech district, our space is a haven for coding enthusiasts, tech entrepreneurs, and digital creatives. The interior is styled with a sleek, modern aesthetic, featuring large communal tables with ample power outlets and high-speed Wi-Fi. Come for the coffee, stay for the code, and leave with new connections and ideas. At Code & Coffee, it's more than just a place to work; it's where the tech community comes to life."
    blackFilter.appendChild(aboutText2);



    return blackFilter;
}

export default aboutPage;