import { appendingMain } from './main-page-load';
import {delay} from './animation-main';
import './style.css';
import {emptyContent} from './empty-content';
import {populateMenu} from './menu-page-load';

appendingMain();
setTimeout(delay, 4800)
let menuBtn = document.querySelector('.menuBtn').addEventListener('click', () => {
    let container = document.getElementById('content');
    emptyContent(container);
    container.style.display = "flex"
    populateMenu();
})


