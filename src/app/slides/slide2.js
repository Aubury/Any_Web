import _ from 'lodash';
import Json from '../../json/my.json';

const slid2 = document.createElement('div');


slid2.classList.add('slid', 'slid2');
slid2.style.height = document.documentElement.clientHeight + 'px';
slid2.innerHTML = `<h2>Мы предлагаем</h2>`;
slid2.innerHTML += '<h3>'+ Json.string + '</h3>'
slid2.id = 'We suppose';


export default slid2;