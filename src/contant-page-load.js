const appendingContact = () => {
    const container = document.getElementById('content');
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer')

    const header = document.createElement('div');
    header.classList.add('contactHeader');
    const returnBtn = document.createElement('button');
    returnBtn.classList = 'returnMain';
    returnBtn.textContent = "RETURN";
    const contactTitle = document.createElement('h1');
    contactTitle.textContent = "Contacts us";
    const menuBtn = document.createElement('button');
    menuBtn.classList = "menuBtn";
    menuBtn.textContent = "MENU";
    header.appendChild(returnBtn);
    header.appendChild(contactTitle);
    header.appendChild(menuBtn);
    contactContainer.appendChild(header);



    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contactInfo');
    contactContainer.appendChild(header);


    container.appendChild(contactContainer);


};


export {appendingContact};