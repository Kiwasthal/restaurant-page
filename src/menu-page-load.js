import ICone from './assets/ICone.svg'
import ICtwo from './assets/ICtwo.svg'
import ICthree from './assets/ICthree.svg'
import ICfour from './assets/ICfour.svg'
import ICfive from './assets/ICfive.svg'
import ICsix from './assets/ICsix.svg'
import ICseven from './assets/ICseven.svg'
import ICeight from './assets/ICeight.svg'

let populateMenu = () => {
    const container = document.getElementById('content'); 
    const menuContent = document.createElement('div');
    menuContent.classList.add('menuContent');
    container.appendChild(menuContent); 
    const header = document.createElement('div') 

    function iceCreamSvgCreator(path) {
        const element = document.createElement('div');
        element.innerHTML = path
        return element
    }
    menuContent.appendChild(iceCreamSvgCreator(ICone));
    menuContent.appendChild(iceCreamSvgCreator(ICtwo));
    menuContent.appendChild(iceCreamSvgCreator(ICthree));
    menuContent.appendChild(iceCreamSvgCreator(ICfour));
    menuContent.appendChild(iceCreamSvgCreator(ICfive));
    menuContent.appendChild(iceCreamSvgCreator(ICsix));
    menuContent.appendChild(iceCreamSvgCreator(ICseven));
    menuContent.appendChild(iceCreamSvgCreator(ICeight));   
}

export {populateMenu}