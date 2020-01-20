import _ from 'lodash';
import '../css/style.css';
import ArrowDown from '../img/downArrow.png';
import ArrowUp from '../img/upArrow.png';
import slid1 from "./slides/slide1";
import slid2 from "./slides/slide2";
import slid3 from "./slides/slide3";
import slid4 from "./slides/slide4";

const obj = {
    container : document.querySelector('.container'),
    menuButton: document.querySelector('.menu-btn'),
    divArrowUp: document.querySelector('.divArrowUP'),
    divArrowDown: document.querySelector('.divArrowDown'),
    ArrowUp   : new Image(),
    ArrowDown : new Image(),
    massSlides: [],
    index     : null,
    initialX  : null,
    initialY  :null
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
//-------------------------------------------------------------------------------------
function arrowButtons() {

    const divArrowUp = obj.divArrowUp,
          divArrowDown = obj.divArrowDown;

    obj.ArrowUp.src = ArrowUp;
    obj.ArrowUp.alt = 'arrowUp';
    divArrowUp.appendChild( obj.ArrowUp);

    obj.ArrowDown.src = ArrowDown;
    obj.ArrowDown.alt = 'arrowDown';
    divArrowDown.appendChild(obj.ArrowDown);
}
//-----------------------------------------------------------------------------------
function lastItemOfArr() {
   const mass = obj.massSlides,
       len = mass.length,
       index = obj.index;

   if(index === 1){
       obj.divArrowUp.classList.remove('none');
       obj.divArrowDown.classList.add('none');
   }
   if(index === len-2){
       obj.divArrowUp.classList.add('none');
       obj.divArrowDown.classList.remove('none');
   }else {
       return;
   }

}
//------------------------------------------------------------------------------------
function sliderGoUp(item) {

    if (item.classList.contains('show')) {
        if (item.nextElementSibling && item.nextElementSibling !== obj.divArrowUp && item.nextElementSibling !== obj.menuButton) {
            lastItemOfArr();
            item.classList.remove('show', 'up');
            item.nextElementSibling.classList.remove('down');
            item.nextElementSibling.classList.add('show', 'up');

            return true;
           }
        }
    return false;

}
//-----------------------------------------------------------------------------------
function sliderGoDown(item) {

    if(item.classList.contains('show')) {
        if (item.previousElementSibling && item.previousElementSibling !== obj.divArrowDown && item.previousElementSibling !== obj.menuButton) {
            lastItemOfArr();
            item.classList.remove('show', 'up');
            item.classList.add('down');

            setTimeout(() => {
                item.previousElementSibling.classList.add('show');
                }, 2000);
            return true;
        }
    }
    return false;
}
//-----------------------------------------------------------------------------------
function changeSliderUP() {
    let mass = obj.massSlides,
        len = mass.length;
    obj.ArrowUp.classList.remove('animButton');

    for (let i = 0; i < len; i++) {
        obj.index = i;
        if(sliderGoUp(mass[i])) return;
    }
}
// ------------------------------------------------------------------------------------
function changeSliderDOWN() {
    let mass = obj.massSlides,
        len = mass.length;

    for (let i = 0; i < len; i++){
        obj.index = i;
        if(sliderGoDown(mass[i])) return;
    }

}
//---------------------Swipe Up / Down / Left / Right-------------------------------------------------------------
function startTouch(e) {
       obj.initialX = e.touches[0].clientX;
       obj.initialY = e.touches[0].clientY;
}
function moveTouch(e) {
        if (obj.initialX === null) {
            return;
        }

        if (obj.initialY === null) {
            return;
        }

        let currentX = e.touches[0].clientX,
            currentY = e.touches[0].clientY;

        let diffX = obj.initialX - currentX,
            diffY = obj.initialY - currentY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            // sliding horizontally
            if (diffX > 0) {
                // swiped left
                // console.log("swiped left");
            } else {
                // swiped right
                // console.log("swiped right");
            }
        } else {
            // sliding vertically
            if (diffY > 0) {
                // swiped up
                changeSliderUP();
            } else {
                // swiped down
                changeSliderDOWN();
            }
        }

        obj.initialX = null;
        obj.initialY = null;

        e.preventDefault();
}
//----------------------------------------------------------------------------
function buttonDown(event) {

    if (event.code === 'ArrowDown') {
        changeSliderDOWN();
    }
    if (event.code === 'ArrowUp') {
        changeSliderUP();
    }
}
//--------------------------------------------------------------------------
function mouseWheel(e) {
    let delta = e.deltaY || e.detail;
    delta > 0 ? changeSliderUP() : changeSliderDOWN();

}
//-----------------------------------------------------------------------------------
function startListener(){
    document.addEventListener('keydown', buttonDown);
    window.addEventListener('wheel', mouseWheel);

    const container = obj.container;
    container.addEventListener("touchstart", startTouch, false);
    container.addEventListener("touchmove", moveTouch, false);
}
//-----------------------------------------------------------------------------------
function stopListener(){
    document.removeEventListener('keydown', buttonDown);
    window.removeEventListener('wheel', mouseWheel);

    const container = obj.container;
    container.removeEventListener("touchstart", startTouch);
    container.removeEventListener("touchmove", moveTouch);
}
//--------------------------------------------------------------------------------
function removeChange(item) {
    item.style.transform = 'none';
    item.style.borderRadius = `0`;
    item.classList.remove('menuOpen');
}
//---------------------------------------------------------------------------------
function choosePage(e) {
    let mass = obj.massSlides,
        id = this.id,
        len = mass.length;

    for (let i = len-1; i >= 0; i--){
        if(mass[i].id === id) {
            removeChange(mass[i]);
            continue;
        }
        if(mass[i].classList.contains('show')) {
            if (mass[i].previousElementSibling && mass[i].previousElementSibling !== obj.menuButton) {
                mass[i].classList.remove('show', 'up');
                mass[i].classList.add('down');
                mass[i].previousElementSibling.classList.add('show');

            }
        }
        removeChange(mass[i]);
    }
    startListener();
}
//-----------------------------------------------------------------------------------
function menuShow() {

    const mass = obj.massSlides,
        len = mass.length;
    let transForm = 0;
    mass.forEach( el => {
        sliderGoUp(el);
    });

    for (let i = 0; i < len; i++){

        if(!mass[i].style.transform || mass[i].style.transform === 'none'){
            if(i){
                transForm += 80;
                mass[i].style.borderRadius = `8px 8px 0 0`;
                mass[i].style.transform = `translateY(${transForm}px)`;

            }
            mass[i].classList.add('menuOpen');
            mass[i].addEventListener('click', choosePage);
            obj.divArrowDown.classList.add('none');
            obj.divArrowUp.classList.add('none');
            stopListener();
        }else {
            mass[i].style.transform = 'none';
            mass[i].classList.remove('menuOpen');
            mass[i].style.borderRadius = `0`;
            obj.divArrowDown.classList.remove('none');
            startListener();
            mass[i].removeEventListener('click', choosePage);

        }
    }
}
// -----------------------------------------------------------------------------------
// Прослушка события смены ориентации
window.addEventListener("orientationchange", function(ev) {
    // Выводим числовое значение ориентации
    console.log(window.orientation);
}, false);
// ----------------------------------------------------
obj.menuButton.addEventListener('click', menuShow);
sliderContainer();
startListener();
arrowButtons();


