import _ from 'lodash';

const slid1 = document.createElement('div');

slid1.classList.add('slid', 'slid1', 'show', 'displayCenter');
slid1.style.height = document.documentElement.clientHeight + 'px';
slid1.innerHTML = `<h1>Главная</h1>`;
slid1.id = 'Main';


export default slid1;