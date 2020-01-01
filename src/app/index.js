import _ from 'lodash';
import '../css/style.css';
import Arrow from '../img/arrow640.png';
import slid1 from "./slides/slide1";
import slid2 from "./slides/slide2";
import slid3 from "./slides/slide3";
import slid4 from "./slides/slide4";

//------------------------------------------------------------------------------------
function sliderContainer(){

    const cont = document.createElement('div');

    cont.classList.add('container');
    cont.appendChild(slid4);
    cont.appendChild(slid3);
    cont.appendChild(slid2);
    cont.appendChild(slid1);

    document.body.appendChild(cont);
}

//------------------------------------------------------------------------------------
function sliderGoUp(item) {
    const arrowUp =  document.querySelector('.divArrowUP');
    if (item.classList.contains('show')) {
        if (item.nextElementSibling) {
            item.classList.remove('show', 'up');
            item.nextElementSibling.classList.remove('down');
            item.nextElementSibling.classList.add('show', 'up');

        }else {
            arrowUp.classList.add('none');
        }
        return true;
    }
    return false;
}
//-----------------------------------------------------------------------------------
function sliderGoDown(item) {
    const arrowUp =  document.querySelector('.divArrowUP');
    if(item.classList.contains('show')) {
        if (item.previousElementSibling) {
            arrowUp.classList.remove('none');
            item.classList.remove('show', 'up');
            item.classList.add('down');
            setTimeout(() => {
                item.previousElementSibling.classList.add('show');
            }, 2000);

        }else {
            arrowUp.classList.add('none');
        }

      return true;
    }
    return false;
}
//-------------------------------------------------------------------------------------

function arrowButtons() {

    const divArrowUp = document.createElement('div'),
          divArrowDown = document.createElement('div'),
          ArrowUp = new Image(),
          ArrowDown = new Image();

    ArrowUp.src = Arrow;
    ArrowUp.alt = 'arrowUp';
    divArrowUp.classList.add('divArrowUP', 'displayCenter', 'none');
    divArrowUp.appendChild(ArrowUp);


    ArrowDown.src = Arrow;
    ArrowDown.alt = 'arrowDown';
    divArrowDown.classList.add('divArrowDown', 'displayCenter');
    divArrowDown.appendChild(ArrowDown);



    document.body.appendChild(divArrowUp);
    document.body.appendChild(divArrowDown);
    ArrowUp.addEventListener('click',clickUpArrow);
    ArrowDown.addEventListener('click',clickDownArrow);
}
//-------------------------------------------------------------------------------------
function changeSliderUP(ev) {

    let item = ev.target;
    sliderGoUp(item);
}
//-----------------------------------------------------------------------------------
function changeSliderDOWN(ev) {

    let item = ev.target;
    sliderGoDown(item);

}
// -----------------------------------------------------------------------------------
function clickUpArrow() {
    const mass = document.querySelectorAll('.slid'),
        len = mass.length;
    for (let i = 0; i < len; i++) {
        if(sliderGoUp(mass[i])) return;
    }
}
// ------------------------------------------------------------------------------------
function clickDownArrow() {
    const mass = document.querySelectorAll('.slid'),
        len = mass.length;

    for (let i = 0; i < len; i++){
        if(sliderGoDown(mass[i])) return;
    }

}
//------------------------------------------------------------------------------
document.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowDown') {
        clickDownArrow();
    }
    if (event.code === 'ArrowUp') {
        clickUpArrow();
    }

});
//------------------------------------------------------------------------------
window.onwheel = function(e) {
    // wheelDelta не даёт возможность узнать количество пикселей
    let delta = e.deltaY || e.detail || e.wheelDelta;
    delta > 0 ? changeSliderUP(e) : changeSliderDOWN(e);

};
//----------------------------------------------------------------------------
sliderContainer();
arrowButtons();

