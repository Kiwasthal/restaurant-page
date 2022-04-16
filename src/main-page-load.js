import Icon from './gelaccio.svg'

const appendingMain = () => {

const container = document.getElementById('content');
const iceCream = document.createElement('div');
iceCream.classList.add('text-container')
iceCream.textContent = 'Ice Cream Time';
container.appendChild(iceCream);

const imageWrapper = document.createElement('div');
imageWrapper.classList.add('image-container');


const leftBar = document.createElement('div');
leftBar.classList.add('left-side-bar');
const leftModalFirst = document.createElement('div');

leftModalFirst.classList.add('left-modal-one');
const leftModalSecond = document.createElement('div');
leftModalSecond.classList.add('left-modal-two');
leftBar.appendChild(leftModalFirst);
leftBar.appendChild(leftModalSecond);
container.appendChild(leftBar);

const handwritten = document.createElement('div');
handwritten.classList.add('handwritten');
const myIcon = new Icon();
myIcon.src = Icon;
handwritten.appendChild(myIcon);
container.appendChild(handwritten);

const buttonModal = document.createElement('div');
buttonModal.classList.add('button-modal')
const btnOne = document.createElement('div');
btnOne.classList.add('button-one');
const btnTwo = document.createElement('div');
btnTwo.classList.add('button-two');
const btnThree = document.createElement('div');
btnThree.classList.add('button-three');

}


export {appendingMain}
