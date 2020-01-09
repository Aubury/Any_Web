import _ from 'lodash';
import '../css/style.css';
import Arrow from '../img/arrow640.png';
import slid1 from "./slides/slide1";
import slid2 from "./slides/slide2";
import slid3 from "./slides/slide3";
import slid4 from "./slides/slide4";

const obj = {
    container : document.querySelector('.container'),
    menuButton: document.querySelector('.menu-btn'),
    massSlides: []
}
//------------------------------------------------------------------------------------
function sliderContainer(){

    const cont = obj.container;

    cont.appendChild(slid4);
    cont.appendChild(slid3);
    cont.appendChild(slid2);
    cont.appendChild(slid1);

    obj.massSlides = cont.querySelectorAll('.slid');
}

//------------------------------------------------------------------------------------
function sliderGoUp(item) {
    const arrowUp =  document.querySelector('.divArrowUP'),
        arrowDown =document.querySelector('.divArrowDown');

    if (item.classList.contains('show')) {
        if (item.nextElementSibling && item.nextElementSibling !== arrowUp && item.nextElementSibling !== obj.menuButton) {
            item.classList.remove('show', 'up');
            item.nextElementSibling.classList.remove('down');
            item.nextElementSibling.classList.add('show', 'up');
            arrowDown.classList.remove('none');
        }else {
            arrowUp.classList.add('none');
        }
        return true;
    }
    return false;
}
//-----------------------------------------------------------------------------------
function sliderGoDown(item) {
    const arrowUp =  document.querySelector('.divArrowUP'),
        arrowDown = document.querySelector('.divArrowDown');
    if(item.classList.contains('show')) {
        if (item.previousElementSibling && item.previousElementSibling !== arrowDown && item.previousElementSibling !== obj.menuButton) {
            arrowUp.classList.remove('none');
            item.classList.remove('show', 'up');
            item.classList.add('down');
            setTimeout(() => {
                item.previousElementSibling.classList.add('show');
            }, 2000);

        }else {
            arrowDown.classList.add('none');
        }

      return true;
    }
    return false;
}
//-------------------------------------------------------------------------------------

function arrowButtons() {

    const divArrowUp = document.createElement('div'),
          divArrowDown = document.createElement('div'),
          cont = document.querySelector('.container'),
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

    cont.appendChild(divArrowUp);
    cont.appendChild(divArrowDown);
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
//-----------------------------------------------------------------------------------

function clickUpArrow() {
    const mass = obj.massSlides,
        len = mass.length;
    for (let i = 0; i < len; i++) {
        if(sliderGoUp(mass[i])) return;
    }
}
// ------------------------------------------------------------------------------------
function clickDownArrow() {
    const mass = obj.massSlides,
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
function menuShow() {
    const mass = obj.massSlides,
        len = mass.length;
    let transForm = 0,
        transDelay = .0;

    for (let i = 0; i < len; i++){
        if(!mass[i].style.transform || mass[i].style.transform === 'none'){
            mass[i].style.transform = `translateY(${transForm}px)`;
            // mass[i].style.transitionDelay = `${transDelay}s`;
            mass[i].classList.add('menuOpen');
            transForm += 80;
            // transDelay += .05;
        }else {
            mass[i].style.transform = 'none';
            mass[i].classList.remove('menuOpen');
        }

    }

}

// -----------------------------------------------------------------------------------
obj.menuButton.addEventListener('click', menuShow);
sliderContainer();
arrowButtons();
