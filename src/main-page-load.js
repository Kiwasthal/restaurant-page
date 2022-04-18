import gelsvg from './gelsvg.svg';

const appendingMain = () => {

const container = document.getElementById('content');
const iceBallTwo = document.createElement('div');
iceBallTwo.classList.add('ballTwo');
container.appendChild(iceBallTwo);
const iceCream = document.createElement('div');
iceCream.classList.add('text-container');
const firstLine = document.createElement('div');
firstLine.classList.add('textOne');
firstLine.textContent = "Ice Cream";
iceCream.appendChild(firstLine);
const secondLine = document.createElement('div');
secondLine.textContent = "Time";
secondLine.classList.add('textTwo');
iceCream.appendChild(secondLine)
container.appendChild(iceCream);

const imageWrapper = document.createElement('div');
imageWrapper.classList.add('image-container');
container.appendChild(imageWrapper);


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
function component() {
    const element = document.createElement('div');
    element.innerHTML = gelsvg;
    return element;
};

handwritten.appendChild(component());
container.appendChild(handwritten);

const buttonModal = document.createElement('div');
buttonModal.classList.add('button-modal');
const btnOne = document.createElement('div');
btnOne.classList.add('button-one');
const linkFirst = document.createElement('a');
linkFirst.classList.add('menuBtn');
const spanFirst = document.createElement('span');
linkFirst.appendChild(spanFirst);
spanFirst.textContent = "MENU";
btnOne.appendChild(linkFirst); 
const btnTwo = document.createElement('div');
btnTwo.classList.add('button-two');
const linkSecond = document.createElement('a');
const spanSecond = document.createElement('span');
spanSecond.textContent = "CONTACT";
linkSecond.appendChild(spanSecond);
btnTwo.appendChild(linkSecond); 
const btnThree = document.createElement('div');
btnThree.classList.add('button-three');
const linkThird= document.createElement('a');
const spanThird = document.createElement('span');
linkThird.appendChild(spanThird);
btnThree.appendChild(linkThird);
buttonModal.appendChild(btnOne);
buttonModal.appendChild(btnTwo);
buttonModal.appendChild(btnThree);
container.appendChild(buttonModal);

}


export {appendingMain};
