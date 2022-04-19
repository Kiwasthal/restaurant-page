import ICone from './assets/ICone.svg';
import ICtwo from './assets/ICtwo.svg';
import ICthree from './assets/ICthree.svg';
import ICfour from './assets/ICfour.svg';
import ICfive from './assets/ICfive.svg';
import ICsix from './assets/ICsix.svg';
import ICseven from './assets/ICseven.svg';
import ICeight from './assets/ICeight.svg';

let populateMenu = () => {

    const container = document.getElementById('content'); 
    const menuContent = document.createElement('div');
    menuContent.classList.add('menuContent');
    const header = document.createElement('div');
    header.classList.add('menuHeader')
    const returnBtn = document.createElement('button');
    returnBtn.classList = 'returnMain';
    returnBtn.textContent = "RETURN";
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = "Choose Your Flavor!";
    const contractBtn = document.createElement('button');
    contractBtn.classList = "contactBtn"
    contractBtn.textContent = "CONTACT"
    header.appendChild(returnBtn);
    header.appendChild(menuTitle);
    header.appendChild(contractBtn);
    menuContent.appendChild(header);


    function iceCreamSvgCreator(path) {
        const element = document.createElement('div');
        element.innerHTML = path
        return element
    };

    menuContent.appendChild(iceCreamSvgCreator(ICone));
    menuContent.appendChild(iceCreamSvgCreator(ICtwo));
    menuContent.appendChild(iceCreamSvgCreator(ICthree));
    menuContent.appendChild(iceCreamSvgCreator(ICfour));
    menuContent.appendChild(iceCreamSvgCreator(ICfive));
    menuContent.appendChild(iceCreamSvgCreator(ICsix));
    menuContent.appendChild(iceCreamSvgCreator(ICseven));
    menuContent.appendChild(iceCreamSvgCreator(ICeight));   


    const IceCreamBallOne = document.createElement('div');
    IceCreamBallOne.classList.add('decorBallOne');
    menuContent.appendChild(IceCreamBallOne)

    const IceCreamBallTwo = document.createElement('div');
    IceCreamBallTwo.classList.add('decorBallTwo');
    menuContent.appendChild(IceCreamBallTwo)

    const IceCreamBallThree = document.createElement('div');
    IceCreamBallThree.classList.add('decorBallThree');
    menuContent.appendChild(IceCreamBallThree)

    const IceCreamBallFour = document.createElement('div');
    IceCreamBallFour.classList.add('decorBallFour');
    menuContent.appendChild(IceCreamBallFour)

    container.appendChild(menuContent); 
}

export {populateMenu};