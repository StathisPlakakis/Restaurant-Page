function homePage () {
    const blackFilter = document.createElement('div');
    blackFilter.classList.add('filter');

    const div1 = document.createElement('div');
    div1.classList.add('homet');
    const div2 = document.createElement('div');
    div2.classList.add('homet');
    const div3 = document.createElement('div');
    div3.classList.add('homet');





    const workingHours = document.createElement('h2');
    workingHours.textContent = 'Working Hours';
    div1.appendChild(workingHours);

    const monday = document.createElement('p');
    monday.textContent = 'Monday: 6am - 6pm';
    div1.appendChild(monday);
    const tuesday = document.createElement('p');
    tuesday.textContent = 'Tuesday: 6am - 6pm';
    div1.appendChild(tuesday);
    const wednesday = document.createElement('p');
    wednesday.textContent = 'Wednesday: 6am - 6pm';
    div1.appendChild(wednesday);
    const thursday = document.createElement('p');
    thursday.textContent = 'Thursday: 6am - 10pm';
    div1.appendChild(thursday);
    const friday = document.createElement('p');
    friday.textContent = 'Friday: 6am - 10pm';
    div1.appendChild(friday);
    const saturday = document.createElement('p');
    saturday.textContent = 'Saturday: 8am - 10pm';
    div1.appendChild(saturday);
    const sunday = document.createElement('p');
    sunday.textContent = 'Sunday: 8am - 8pm';
    div1.appendChild(sunday);


    const location = document.createElement('h2');
    location.textContent = 'Location';
    div2.appendChild(location);

    const address = document.createElement('p');
    address.textContent = '1658 Market St, San Francisco, CA 94102, United States';
    div2.appendChild(address);

    const contact = document.createElement('h2');
    contact.textContent = 'Contact';
    div3.appendChild(contact);

    const info1 = document.createElement('p');
    info1.textContent = '115-743-7854';
    div3.appendChild(info1);

    const info2 = document.createElement('p');
    info2.textContent = 'code&coffee@email.com';
    div3.appendChild(info2);

    blackFilter.appendChild(div1);
    blackFilter.appendChild(div2);
    blackFilter.appendChild(div3);

    return blackFilter;
}

export default homePage;