import _ from 'lodash';
import slid1 from "./slide1";

const slid3 = document.createElement('div');

slid3.classList.add('slid', 'slid3', 'displayCenter');
slid3.style.height = document.documentElement.clientHeight + 'px';
slid3.innerHTML = `<p>SLID 3</p>`;




export default slid3;