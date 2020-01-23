import _ from 'lodash';

const slid5 = document.createElement('div');

slid5.classList.add('slid', 'slid5', 'displayCenter');
slid5.style.height = document.documentElement.clientHeight + 'px';
slid5.innerHTML =  `<h1 class="contacts">Контакты</h1>`;
slid5.id = 'Contacts';
export default slid5;