import _ from 'lodash';

const slid2 = document.createElement('div');

slid2.classList.add('slid', 'slid2', 'displayCenter');
slid2.style.height = document.documentElement.clientHeight + 'px';
slid2.innerHTML = `<h1>О нас</h1>`;
slid2.id = 'About Us';


export default slid2;