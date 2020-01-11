import _ from 'lodash';

const slid4 = document.createElement('div');

slid4.classList.add('slid', 'slid4', 'displayCenter');
slid4.style.height = document.documentElement.clientHeight + 'px';
slid4.innerHTML =  `<h1>Контакты</h1>`;
slid4.id = 'Contacts';

export default slid4;