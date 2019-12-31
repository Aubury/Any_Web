import _ from 'lodash';
import slid1 from "./slide1";


const slid2 = document.createElement('div');

slid2.classList.add('slid', 'slid2');
slid2.style.height = document.documentElement.clientHeight + 'px';
slid2.innerHTML = `<p>SLID 2</p>`;




export default slid2;