function menuPage () {
    const background = document.createElement('div');
    background.classList.add('background');

    const menu = document.createElement('div');
    menu.classList.add('menuu');


    const category1 = document.createElement('div');
    const catHead1 = document.createElement('h2');
    catHead1.textContent = "Coffee and Beverages";
    category1.appendChild(catHead1);
    const code11 = document.createElement('h4');
    code11.textContent = "Espresso";
    category1.appendChild(code11);
    const code12 = document.createElement('h4');
    code12.textContent = "Americano";
    category1.appendChild(code12);
    const code13 = document.createElement('h4');
    code13.textContent = "Latte";
    category1.appendChild(code13);
    const code14 = document.createElement('h4');
    code14.textContent = "Cappuccino";
    category1.appendChild(code14);
    const code15 = document.createElement('h4');
    code15.textContent = "Flat White";
    category1.appendChild(code15);
    const code16 = document.createElement('h4');
    code16.textContent = "Mocha";
    category1.appendChild(code16);

    const category2 = document.createElement('div');
    const catHead2 = document.createElement('h2');
    catHead2.textContent = "After-Hours Specials";
    category2.appendChild(catHead2);
    const code21 = document.createElement('h4');
    code21.textContent = "Craft Beers";
    category2.appendChild(code21);
    const code22 = document.createElement('h4');
    code22.textContent = "Classic Cocktails";
    category2.appendChild(code22);
    const code23 = document.createElement('h4');
    code23.textContent = "Wine Selection";
    category2.appendChild(code23);

    const category3 = document.createElement('div');
    const catHead3 = document.createElement('h2');
    catHead3.textContent = "Sandwiches/ Wraps and Desserts";
    category3.appendChild(catHead3);
    const code31 = document.createElement('h4');
    code31.textContent = "Chicken Caesar Wrap";
    category3.appendChild(code31);
    const code32 = document.createElement('h4');
    code32.textContent = "Veggie Panini";
    category3.appendChild(code32);
    const code33 = document.createElement('h4');
    code33.textContent = "Turkey Club Sandwich";
    category3.appendChild(code33);
    const code34 = document.createElement('h4');
    code34.textContent = "Cheesecake";
    category3.appendChild(code34);
    const code35 = document.createElement('h4');
    code35.textContent = "Brownies";
    category3.appendChild(code35);
    const code36 = document.createElement('h4');
    code36.textContent = "Cookies";
    category3.appendChild(code36);



    menu.appendChild(category1);
    menu.appendChild(category3);
    menu.appendChild(category2);

    background.appendChild(menu);

    return background;
}

export default menuPage;