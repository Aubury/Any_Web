import _ from 'lodash';
import slid1 from "./slide1";

const slid4 = document.createElement('div');

slid4.classList.add('slid', 'slid1');
slid4.style.height = document.documentElement.clientHeight + 'px';
slid4.innerHTML =  `<p>SLID 4</p>`;

export default slid4;