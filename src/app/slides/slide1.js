import _ from 'lodash';

const slid1 = document.createElement('div');

slid1.classList.add('slid', 'slid1', 'show');
slid1.style.height = document.documentElement.clientHeight + 'px';
slid1.innerHTML = `<p>SLID 1</p>`;


export default slid1;