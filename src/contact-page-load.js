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
    contactContainer.appendChild(contactInfo);

    const gelaccio = document.createElement('h3');
    gelaccio.textContent = 'Gelaccio';
    contactInfo.appendChild(gelaccio)

    const adress = document.createElement('p');
    adress.textContent = 'As for now you can not find us anywhere on the map.'
    contactInfo.appendChild(adress);

    const fill = document.createElement('p');
    fill.textContent = 'You can still fill this form for reasons.';
    contactInfo.appendChild(fill);

    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    const form = document.createElement('form');
    form.id = 'main-form';
    formContainer.appendChild(form)

    const formContentName = document.createElement('div');
    formContentName.classList.add('form-one');

    const inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.id = 'first-name';
    inputName.name = 'user-first-name';
    inputName.placeholder = ' ';

    const nameLabel = document.createElement('label');
    nameLabel.for = 'first-name';
    nameLabel.textContent = 'NAME'


    formContentName.appendChild(inputName);
    formContentName.appendChild(nameLabel);

    const formContentMail = document.createElement('div');
    formContentMail.classList.add('form-two');

    const inputMail = document.createElement('input');
    inputMail.type = 'email';
    inputMail.id = 'email';
    inputMail.name = 'user-mail';
    inputMail.placeholder = ' ';

    const mailLabel = document.createElement('label');
    mailLabel.for = 'email';
    mailLabel.textContent = 'EMAIL';

    const submitBtn = document.createElement('button');
    submitBtn.classList = "submit"
    submitBtn.textContent = "SUBMIT"
    

    formContentMail.appendChild(inputMail);
    formContentMail.appendChild(mailLabel);

    
    formContainer.appendChild(formContentName);
    formContainer.appendChild(formContentMail);
    formContainer.appendChild(submitBtn);
    contactInfo.appendChild(formContainer);



    const IceCreamBallOne = document.createElement('div');
    IceCreamBallOne.classList.add('decorBallOne');
    contactContainer.appendChild(IceCreamBallOne);

    const IceCreamBallTwo = document.createElement('div');
    IceCreamBallTwo.classList.add('decorBallTwo');
    contactContainer.appendChild(IceCreamBallTwo)

    const IceCreamBallThree = document.createElement('div');
    IceCreamBallThree.classList.add('decorBallThree');
    contactContainer.appendChild(IceCreamBallThree)

    const IceCreamBallFour = document.createElement('div');
    IceCreamBallFour.classList.add('decorBallFour');
    contactContainer.appendChild(IceCreamBallFour)



    


    container.appendChild(contactContainer);


};


export {appendingContact};