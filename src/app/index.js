import _ from 'lodash';
import '../css/style.css';
import ArrowDown from '../img/downArrow.png';
import ArrowUp from '../img/upArrow.png';
import slid1 from "./slides/slide1";
import slid2 from "./slides/slide2";
import slid3 from "./slides/slide3";
import slid4 from "./slides/slide4";
import slid5 from "./slides/slide5";

const obj = {
    container : document.querySelector('.container'),
    menuButton: document.querySelector('.menu-btn'),
    divArrowUp: document.querySelector('.divArrowUP'),
    divArrowDown: document.querySelector('.divArrowDown'),
    modalWindow: null,
    openModal  : document.querySelector('.contacts'),
    closeModal : null,
    contacts   : document.querySelector('#Contacts'),
    template  : document.querySelector('#Templates'),
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
    cont.appendChild(slid5);
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
   const index = obj.index;

   if(index === 2 && obj.divArrowUp.classList.contains('none')) {
       obj.divArrowUp.classList.remove('none');
       obj.divArrowDown.classList.add('none');
       return;
   }
   if(index === 3 && obj.divArrowDown.classList.contains('none')){
       obj.divArrowUp.classList.add('none');
       obj.divArrowDown.classList.remove('none');
       return;

   }else {
       return;
   }

}
//------------------------------------------------------------------------------------
function sliderGoUp(item) {

    if (item.classList.contains('show')) {
        if (window.screen.width > 1100) {
            if (item.nextElementSibling && item.nextElementSibling !== obj.divArrowUp
                && item.nextElementSibling.id !== 'Contacts') {
                lastItemOfArr();
                item.classList.remove('show', 'up');
                item.nextElementSibling.classList.remove('down');
                item.nextElementSibling.classList.add('show', 'up');

                return true;
            }
        } else {
            if (item.previousElementSibling && item.previousElementSibling !== obj.divArrowDown) {
                if(item.previousElementSibling.id === 'Contacts'){
                    return false;
                }else {
                    lastItemOfArr();
                    item.classList.remove('show');
                    item.classList.add('upW');

                    setTimeout(() => {
                        item.previousElementSibling.classList.add('show');
                    }, 1000);
                    return true;
                }
            }
        }
    }
    return false;

}
//-----------------------------------------------------------------------------------
function sliderGoDown(item) {

    if(item.classList.contains('show')) {
        if (window.screen.width > 1100) {
            if (item.previousElementSibling && item.previousElementSibling !== obj.divArrowDown
                && item.previousElementSibling.id !== 'Contacts') {
                lastItemOfArr();
                item.classList.remove('show', 'up');
                item.classList.add('down');

                setTimeout(() => {
                    item.previousElementSibling.classList.add('show');
                }, 1000);

                return true;
            }
        }else {
            if (item.nextElementSibling && item.nextElementSibling !== obj.divArrowUp) {
                if(item.nextElementSibling.id === 'Contacts'){
                    return false;
                }else {
                    lastItemOfArr();
                    if(item.id === 'Templates'){
                        if(item.lastElementChild.scrollTop === 0){
                            item.classList.remove('show', 'up');
                            item.nextElementSibling.classList.remove('upW');
                            item.nextElementSibling.classList.add('show');
                        }
                    }else {
                        item.classList.remove('show', 'downW');
                        item.nextElementSibling.classList.remove('upW');
                        item.nextElementSibling.classList.add('show', 'downW');
                    }
                    return true;
                }

            }
        }
    }
    return false;
}
//-----------------------------------------------------------------------------------
function changeSliderUP() {
    let mass = obj.massSlides,
        len = null;
        (window.screen.width > 1100) ? len = mass.length - 1: len = mass.length;
    obj.ArrowUp.classList.remove('animButton');

    for (let i = 1; i < len; i++) {
        obj.index = i;
        if(sliderGoUp(mass[i])){
            return;
        }
    }
}
// ------------------------------------------------------------------------------------
function changeSliderDOWN() {
    let mass = obj.massSlides,
        len = null;
    (window.screen.width > 1100) ? len = mass.length: len = mass.length-1;
    obj.ArrowUp.classList.remove('animButton');

    for (let i = 1; i < len; i++){
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
            } else {
                // swiped right
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
}
//----------------------------------------------------------------------------
function buttonDown(event) {
    if(window.screen.width > 1100) {
        if (event.code === 'ArrowDown') {
            changeSliderDOWN();
        }
        if (event.code === 'ArrowUp') {
            changeSliderUP();
        }
    }else{
        if (event.code === 'ArrowDown') {
            changeSliderUP();
        }
        if (event.code === 'ArrowUp') {
            changeSliderDOWN();
        }
    }
}
//--------------------------------------------------------------------------
function mouseWheel(e) {

    let delta = e.deltaY || e.detail || e.wheelDelta;
    if(window.screen.width > 1100){
        delta > 0 ? changeSliderDOWN()
            :  ( window.onmousewheel = null ,
                changeSliderUP(),
                setTimeout(()=> window.onmousewheel = mouseWheel, 500));
    }else {
        delta > 0 ? changeSliderUP()
            :  ( window.onmousewheel = null,
                changeSliderDOWN(),
                setTimeout(()=> window.onmousewheel = mouseWheel, 500));
    }

}
//-----------------------------------------------------------------------------------
function startListener(){
    document.onkeydown = buttonDown;
    window.onmousewheel = mouseWheel;
    document.ontouchstart = startTouch;
    document.ontouchmove = moveTouch;

}
//-----------------------------------------------------------------------------------
function stopListener(){
    document.onkeydown = null;
    window.onmousewheel = null;
    document.ontouchstart = null;
    document.ontouchmove = null;
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
        flag = false,
        len = mass.length;


    for (let i = len-1; i > 0; i--){

        if(id === 'Contacts') {
            closeMenu(mass[i]);
            modalWindow();

        }else{
            if(mass[i].id === id) {
                obj.index = i;
                flag = true;
                setTimeout(()=>{
                    mass[i].classList.add('show');
                  }, 1000);
                lastItemOfArr();
                removeChange(mass[i]);
                continue;

            }else {
                if(flag){
                    if(window.screen.width > 1100){
                        mass[i].classList.remove('show');
                        mass[i].classList.add('up');
                    }else{
                        mass[i].classList.remove('show');
                    }

                }else{
                    if(window.screen.width > 1100) {
                        mass[i].classList.remove('show', 'up');
                        mass[i].classList.add('down');
                    }else {
                        mass[i].classList.remove('show');
                        mass[i].classList.add('upW');
                    }
                }
                removeChange(mass[i]);
            }
        }
    }

    startListener();
}
//----------------------------------------------------------------------------------
function closeMenu(item) {
    item.style.transform = 'none';
    item.classList.remove('menuOpen');
    item.style.borderRadius = `0`;
    obj.divArrowDown.classList.remove('none');
    item.removeEventListener('click', choosePage);
}
//-----------------------------------------------------------------------------------
function menuShow() {

    const mass = obj.massSlides,
        len = mass.length;
    let transForm = 0;

        mass.forEach( el => {
            el.classList.remove('up', 'down', 'upW', 'downW','show');
        });
        mass[len-1].classList.add('show');

        for (let i = 0; i < len; i++){

        if(!mass[i].style.transform || mass[i].style.transform === 'none'){
            if(i){
                window.screen.width < 1100 ? transForm += 70 : transForm += 80;
                mass[i].style.borderRadius = `8px 8px 0 0`;
                mass[i].style.transform = `translateY(${transForm}px)`;

            }
            mass[i].classList.add('menuOpen');
            mass[i].addEventListener('click', choosePage);
            obj.divArrowDown.classList.add('none');
            obj.divArrowUp.classList.add('none');
            stopListener();
        }else {
            closeMenu(mass[i]);
            startListener();

        }
    }
}
// -----------------------------------------------------------------------------------
function creatModalWindow() {
    const div = document.createElement('div'),
          str = `<div class="modalForm">
                        <header>
                            <h2>Свяжитесь с нами</h2>
                        </header>
                        <main>
                            <p>Skype: _________________</p>
                            <p>Vibe: __________________</p>
                            <p>Telegram: ______________</p>
                        </main>
                        <footer>
                            <a class="btn">Закрыть</a>
                        </footer>
                   </div>`;

    div.setAttribute('id','modal');
    div.innerHTML = str;
    obj.modalWindow = div;
    document.body.insertBefore(div,obj.container.nextElementSibling);
    obj.closeModal = document.querySelector('.btn');
}
// -----------------------------------------------------------------------------------
function modalWindow(){
    const modal = obj.modalWindow,
          btnClose = obj.closeModal;

    modal.classList.add('modalActive');
    stopListener();
    btnClose.addEventListener('click', ()=> {
        modal.classList.remove('modalActive');
        startListener();
    });
}
// --------------------------------------------------------
obj.menuButton.addEventListener('click', menuShow);
// window.addEventListener('touchmove', e => e.preventDefault(), { passive: false });
// -------------------------------------------------------------
sliderContainer();
creatModalWindow();
arrowButtons();
startListener();




