import { appendingMain } from './main-page-load';
import {delay} from './animation-main';
import './style.css';
import {emptyContent} from './empty-content';
import {populateMenu} from './menu-page-load';


const eventHandler = (() => {

    appendingMain();

    setTimeout(delay, 4800);

    let container = document.getElementById('content');

    let createMenu = () => {
        emptyContent(container);
        container.style.display = "flex";
        populateMenu();
        document.querySelector('.returnMain').addEventListener('click',eventHandler.createMain);
    }

    let createMain = () => {
        emptyContent(container);
        container.style.display = "grid";
        appendingMain();
        setTimeout(delay, 4800);
        document.querySelector('.menuBtn').addEventListener('click',eventHandler.createMenu); 
    }

    return {
        createMenu,
        createMain,
    }


})();

document.querySelector('.menuBtn').addEventListener('click',eventHandler.createMenu);
document.querySelector('.returnMain').addEventListener('click',eventHandler.createMain);




