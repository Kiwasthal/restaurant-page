import { appendingMain } from './main-page-load';
import {delay} from './animation-main';
import './style.css';
import {emptyContent} from './empty-content';
import {populateMenu} from './menu-page-load';
import {appendingContact} from './contant-page-load';


const eventHandler = (() => {

    appendingMain();

    setTimeout(delay, 4800);
    
    

    let container = document.getElementById('content');

    let createMenu = () => {
        emptyContent(container);
        container.style.display = "flex";
        populateMenu();
        document.querySelector('.returnMain').addEventListener('click',eventHandler.createMain);
        document.querySelector('.contactBtn').addEventListener('click',eventHandler.createContact);
    };

    let createMain = () => {
        emptyContent(container);
        container.style.display = "grid";
        appendingMain();
        setTimeout(delay, 4800);
        document.querySelector('.menuBtn').addEventListener('click',eventHandler.createMenu); 
        document.querySelector('.contactBtn').addEventListener('click',eventHandler.createContact);
    };

    let createContact = () => {
        emptyContent(container);
        container.style.display = "flex";
        appendingContact();
        document.querySelector('.returnMain').addEventListener('click',eventHandler.createMain);
        document.querySelector('.menuBtn').addEventListener('click',eventHandler.createMenu); 
    }

    

    return {
        createMenu,
        createMain,
        createContact,
    };

})();

document.querySelector('.menuBtn').addEventListener('click',eventHandler.createMenu);
document.querySelector('.contactBtn').addEventListener('click',eventHandler.createContact);





