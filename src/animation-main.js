export {delay};

const delay = () => {
    document.querySelector('.left-modal-two').classList.add('dropping');
    document.querySelector('.button-modal').classList.add('extending');
    document.querySelector('.button-one').classList.add('extOne');
    document.querySelector('.button-two').classList.add('extTwo');
    document.querySelector('.button-three').classList.add('extThree');
    document.querySelector('.ballTwo').classList.add('revealing')
    document.querySelectorAll('a').forEach(a => a.classList.add('revealing'));
    document.querySelectorAll('a').forEach(a => a.classList.add('revealing'));
    document.querySelectorAll('button').forEach(a => a.classList.add('revealing'));
    document.querySelector('.text-container').classList.add('fade');
};