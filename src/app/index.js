import _ from 'lodash';
import '../css/style.css';

const div = document.createElement('div');
div.innerHTML = `<h1>Hello, Any Web!</h1>`;
div.classList.add('color');
document.body.appendChild(div);

console.log("Hello");