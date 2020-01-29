(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_downArrow_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/downArrow.png */ "./src/img/downArrow.png");
/* harmony import */ var _img_upArrow_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/upArrow.png */ "./src/img/upArrow.png");
/* harmony import */ var _slides_slide1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slides/slide1 */ "./src/app/slides/slide1.js");
/* harmony import */ var _slides_slide2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slides/slide2 */ "./src/app/slides/slide2.js");
/* harmony import */ var _slides_slide3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slides/slide3 */ "./src/app/slides/slide3.js");
/* harmony import */ var _slides_slide4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slides/slide4 */ "./src/app/slides/slide4.js");
/* harmony import */ var _slides_slide5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slides/slide5 */ "./src/app/slides/slide5.js");










const obj = {
    container : document.querySelector('.container'),
    menuButton: document.querySelector('.menu-btn'),
    divArrowUp: document.querySelector('.divArrowUP'),
    divArrowDown: document.querySelector('.divArrowDown'),
    modalWindow: null,
    openModal  : document.querySelector('.contacts'),
    closeModal : null,
    contacts   : document.querySelector('#Contacts'),
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
    cont.appendChild(_slides_slide5__WEBPACK_IMPORTED_MODULE_8__["default"]);
    cont.appendChild(_slides_slide4__WEBPACK_IMPORTED_MODULE_7__["default"]);
    cont.appendChild(_slides_slide3__WEBPACK_IMPORTED_MODULE_6__["default"]);
    cont.appendChild(_slides_slide2__WEBPACK_IMPORTED_MODULE_5__["default"]);
    cont.appendChild(_slides_slide1__WEBPACK_IMPORTED_MODULE_4__["default"]);

    obj.massSlides = cont.querySelectorAll('.slid');
}
//-------------------------------------------------------------------------------------
function arrowButtons() {

    const divArrowUp = obj.divArrowUp,
          divArrowDown = obj.divArrowDown;

    obj.ArrowUp.src = _img_upArrow_png__WEBPACK_IMPORTED_MODULE_3__["default"];
    obj.ArrowUp.alt = 'arrowUp';
    divArrowUp.appendChild( obj.ArrowUp);

    obj.ArrowDown.src = _img_downArrow_png__WEBPACK_IMPORTED_MODULE_2__["default"];
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
        if (item.nextElementSibling && item.nextElementSibling !== obj.divArrowUp
            && item.nextElementSibling.id != 'Contacts') {
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
        if (item.previousElementSibling && item.previousElementSibling !== obj.divArrowDown
            && item.previousElementSibling.id != 'Contacts') {
            lastItemOfArr();
            item.classList.remove('show', 'up');
            item.classList.add('down');

            setTimeout(() => {
                item.previousElementSibling.classList.add('show');
                }, 1000);
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

    for (let i = 1; i < len-1; i++) {
        obj.index = i;
        if(sliderGoUp(mass[i])){
            return;
        }
    }
}
// ------------------------------------------------------------------------------------
function changeSliderDOWN() {
    let mass = obj.massSlides,
        len = mass.length;

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

    let delta = e.deltaY || e.detail || e.wheelDelta;

    delta > 0 ? changeSliderDOWN()
              :  ( window.onmousewheel = null ,
                   changeSliderUP(),
                 setTimeout(()=> window.onmousewheel = mouseWheel, 500));
}
//-----------------------------------------------------------------------------------
function startListener(){
    document.addEventListener('keydown', buttonDown);
    // window.addEventListener('wheel', mouseWheel);
    window.onmousewheel = mouseWheel;

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
                    mass[i].classList.remove('show');
                    mass[i].classList.add('up');
                }else{
                    mass[i].classList.remove('show', 'up');
                    mass[i].classList.add('down');
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

// -------------------------------------------------------------
sliderContainer();
creatModalWindow();
arrowButtons();
startListener();




/***/ }),

/***/ "./src/app/slides/slide1.js":
/*!**********************************!*\
  !*** ./src/app/slides/slide1.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_cat_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/cat.png */ "./src/img/cat.png");
/* harmony import */ var _img_Moon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/Moon.png */ "./src/img/Moon.png");
/* harmony import */ var _img_star_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/star.png */ "./src/img/star.png");
/* harmony import */ var _img_commentText_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/commentText.png */ "./src/img/commentText.png");
/* harmony import */ var _img_grassSnail_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/grassSnail.png */ "./src/img/grassSnail.png");









const obj = {
    slide    : document.createElement('div'),
    main     : document.createElement('div'),
    topBlock : document.createElement('div'),
    bottomBlock :document.createElement('div'),
    blockCat : document.createElement('div'),
    blockMoon: document.createElement('div'),
    cat      : document.createElement('div'),
    comm     : document.createElement('div'),
    Cat : new Image(),
    Moon: new Image(),
    Comment : new Image(),
    Snail : new Image()
}
// -------------------------------------------------------------
function addImage() {

    obj.Moon.src = _img_Moon_png__WEBPACK_IMPORTED_MODULE_2__["default"];
    obj.Moon.alt = 'Moon';
    obj.Moon.classList.add('moon');
    obj.blockMoon.appendChild(obj.Moon);

    obj.Cat.src = _img_cat_png__WEBPACK_IMPORTED_MODULE_1__["default"];
    obj.Cat.alt = 'Cat';
    obj.cat.appendChild(obj.Cat);

    obj.Comment.src = _img_commentText_png__WEBPACK_IMPORTED_MODULE_4__["default"];
    obj.Comment.alt = 'Comment';
    obj.comm.appendChild(obj.Comment);

    obj.Snail.src = _img_grassSnail_png__WEBPACK_IMPORTED_MODULE_5__["default"];
    obj.Snail.alt = 'Snail';
    obj.Snail.classList.add('grass');
    obj.main.appendChild(obj.Snail);



}
//-------------------------------------------------------------
function cloudsImg() {
    let div1 = document.createElement('div'),
        div2 = document.createElement('div'),
        div3 = document.createElement('div');

    div1.classList.add('cloud1','cloud');
    obj.main.appendChild(div1);

    div2.classList.add('cloud2', 'cloud');
    obj.main.appendChild(div2);

    div3.classList.add('cloud3', 'cloud');
    obj.main.appendChild(div3);

}
//-----------------------------------------------------------
function moveClouds() {
    const  massCloud = obj.main.querySelectorAll('.cloud');

    massCloud.forEach( el => {
        let str = (el.style.left).slice(0,(el.style.left).length - 2);
        if(Number(str) > (document.documentElement.clientWidth + 10)){
            el.classList.add('none');
            el.style.left = '-' + (el.clientWidth + 500) + 'px';
        }else{
            el.classList.remove('none');
            el.style.left = (el.offsetLeft + 10) + 'px';
        }
    })
}
//------------------------------------------------------------
function moveMoon() {
    let moon = document.querySelector('.moon'),
        transf = (moon.style.transform).replace(/rotate\(/,''),
        num = transf.replace(/deg\)/,'');
       num = Number(num) +  0.5;
    if(moon.style.transform === ''){
        num = 0;
    }
    moon.style.transform = `rotate(${num}deg)`;

}
//-------------------------------------------------------------
function changePositionStars() {
    let massStars = obj.main.querySelectorAll('.star');

     for(let i = 0; i < massStars.length; i++){
         let top = Math.round(Math.random()*(40 - 5) + 5),
             left =  Math.round(Math.random()*(100 - 1) + 1);
             massStars[i].style.top = top + '%';
             massStars[i].style.left = left + '%';
     }
}
//-------------------------------------------------------------
function positionStar(newStar) {

    let top = Math.round(Math.random()*(40 - 5) + 5),
        left =  Math.round(Math.random()*(100 - 1) + 1);

        newStar.style.top = top + '%';
        newStar.style.left = left + '%';
}
//-------------------------------------------------------------
function sizeStar() {
    let size = 40;
    if(window.screen.width < 1000){
        size = 20;
    }
    return Math.round(Math.random()*(size - 5) + 5);
}
//--------------------------------------------------------------
function stars() {

    let amount = 0;

    if(window.screen.width < 1000){
        amount = Math.random()*(10 - 5) + 5;
    }else {
        amount = Math.random()*(20 - 10) + 10;
    }

    for (let i = 0; i < Math.round(amount); i++){
        let Star = new Image();
         Star.src = _img_star_png__WEBPACK_IMPORTED_MODULE_3__["default"];
         Star.alt = 'star';
         Star.classList.add('star');
         Star.style.height = sizeStar() + 'px';
         positionStar(Star);
         obj.main.appendChild(Star);

    }
}


// --------------------------------------------------------------
function container() {
    const slid1 = obj.slide,
          main  = obj.main,
          topBl = obj.topBlock,
          bttmBl = obj.bottomBlock,
          blockCat = obj.blockCat,
          blockMoon = obj.blockMoon,
          name = document.createElement('h1'),
          cat = obj.cat,
          comm = obj.comm;

    slid1.classList.add('slid', 'slid1', 'show');
    slid1.style.height = document.documentElement.clientHeight + 'px';
    slid1.id = 'Main';

    main.classList.add('mainDiv');
    slid1.appendChild(main);

    topBl.classList.add('topBlock');
    main.appendChild(topBl);

    bttmBl.classList.add('bottomBlock');
    main.appendChild(bttmBl);

    name.classList.add('h1');
    name.innerHTML = 'ANY WEB';
    main.appendChild(name);


    blockCat.classList.add('blockCat');
    bttmBl.appendChild(blockCat);

    cat.classList.add('cat');
    comm.classList.add('comment');
    blockCat.appendChild(cat);
    blockCat.appendChild(comm);

    blockMoon.classList.add('blockMoon');
    topBl.appendChild(blockMoon);


    addImage();
    stars();
    cloudsImg();
    setInterval(changePositionStars, 20000);
    setInterval(moveClouds,0);
    setInterval(moveMoon,10000);

}

container();



/* harmony default export */ __webpack_exports__["default"] = (obj.slide);

/***/ }),

/***/ "./src/app/slides/slide2.js":
/*!**********************************!*\
  !*** ./src/app/slides/slide2.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


const slid2 = document.createElement('div');

slid2.classList.add('slid', 'slid2', 'displayCenter');
slid2.style.height = document.documentElement.clientHeight + 'px';
slid2.innerHTML = `<h1>Мы предлагаем</h1>`;
slid2.id = 'We suppose';


/* harmony default export */ __webpack_exports__["default"] = (slid2);

/***/ }),

/***/ "./src/app/slides/slide3.js":
/*!**********************************!*\
  !*** ./src/app/slides/slide3.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


const slid3 = document.createElement('div');

slid3.classList.add('slid', 'slid3', 'displayCenter');
slid3.style.height = document.documentElement.clientHeight + 'px';
slid3.innerHTML = `<h1>Наши работы</h1>`;
slid3.id = 'Our work';




/* harmony default export */ __webpack_exports__["default"] = (slid3);

/***/ }),

/***/ "./src/app/slides/slide4.js":
/*!**********************************!*\
  !*** ./src/app/slides/slide4.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


const slid4 = document.createElement('div');

slid4.classList.add('slid', 'slid4', 'displayCenter');
slid4.style.height = document.documentElement.clientHeight + 'px';
slid4.innerHTML =  `<h1 class="contacts">PSD шаблоны</h1>`;
slid4.id = 'Templates';
/* harmony default export */ __webpack_exports__["default"] = (slid4);

/***/ }),

/***/ "./src/app/slides/slide5.js":
/*!**********************************!*\
  !*** ./src/app/slides/slide5.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


const slid5 = document.createElement('div');

slid5.classList.add('slid', 'slid5', 'displayCenter');
slid5.style.height = document.documentElement.clientHeight + 'px';
slid5.innerHTML =  `<h1 class="contacts">Контакты</h1>`;
slid5.id = 'Contacts';
/* harmony default export */ __webpack_exports__["default"] = (slid5);

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/img/Moon.png":
/*!**************************!*\
  !*** ./src/img/Moon.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "09d0a0887c349f20d02a7cea1e29e8ab.png");

/***/ }),

/***/ "./src/img/cat.png":
/*!*************************!*\
  !*** ./src/img/cat.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f757c0dd1166c11b5bc230542160ae71.png");

/***/ }),

/***/ "./src/img/commentText.png":
/*!*********************************!*\
  !*** ./src/img/commentText.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fbd225ee8ac38d426c6687bbcbaaa786.png");

/***/ }),

/***/ "./src/img/downArrow.png":
/*!*******************************!*\
  !*** ./src/img/downArrow.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "31fc534c140648af7b7841232bae2342.png");

/***/ }),

/***/ "./src/img/grassSnail.png":
/*!********************************!*\
  !*** ./src/img/grassSnail.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "68c882db6f82444eb8a20965ae42a216.png");

/***/ }),

/***/ "./src/img/star.png":
/*!**************************!*\
  !*** ./src/img/star.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "80c68e969c88d219cdd2bcdc5ffcd8d6.png");

/***/ }),

/***/ "./src/img/upArrow.png":
/*!*****************************!*\
  !*** ./src/img/upArrow.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0a29d0e754fe3ac9061df66836e60ab4.png");

/***/ })

},[["./src/app/index.js","runtime~index","vendors~index"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlLmNzcz82YjdiIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zbGlkZXMvc2xpZGUxLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2xpZGVzL3NsaWRlMi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NsaWRlcy9zbGlkZTMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zbGlkZXMvc2xpZGU0LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2xpZGVzL3NsaWRlNS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlLmNzcz8xNDVlIiwid2VicGFjazovLy8uL3NyYy9pbWcvTW9vbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9jYXQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvY29tbWVudFRleHQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvZG93bkFycm93LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2dyYXNzU25haWwucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvc3Rhci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy91cEFycm93LnBuZyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVCO0FBQ0c7QUFDbUI7QUFDSjtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixzREFBSztBQUMxQixxQkFBcUIsc0RBQUs7QUFDMUIscUJBQXFCLHNEQUFLO0FBQzFCLHFCQUFx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RXZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtlLG9FQUFLLEU7Ozs7Ozs7Ozs7OztBQ1pwQjtBQUFBO0FBQUE7QUFBdUI7O0FBRXZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ2Usb0VBQUssRTs7Ozs7Ozs7Ozs7O0FDUnBCO0FBQUE7QUFBQTtBQUF1Qjs7QUFFdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDZSxvRUFBSyxFOzs7Ozs7Ozs7OztBQ1JwQixVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLHlPQUFtSDs7QUFFcko7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixRQUFTOztBQUUxQjs7OztBQUlBLDBCOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEUiLCJmaWxlIjoiaW5kZXguMWIwMjVlMTUxMTc1MzkzMTkyY2YuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgJy4uL2Nzcy9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgQXJyb3dEb3duIGZyb20gJy4uL2ltZy9kb3duQXJyb3cucG5nJztcclxuaW1wb3J0IEFycm93VXAgZnJvbSAnLi4vaW1nL3VwQXJyb3cucG5nJztcclxuaW1wb3J0IHNsaWQxIGZyb20gXCIuL3NsaWRlcy9zbGlkZTFcIjtcclxuaW1wb3J0IHNsaWQyIGZyb20gXCIuL3NsaWRlcy9zbGlkZTJcIjtcclxuaW1wb3J0IHNsaWQzIGZyb20gXCIuL3NsaWRlcy9zbGlkZTNcIjtcclxuaW1wb3J0IHNsaWQ0IGZyb20gXCIuL3NsaWRlcy9zbGlkZTRcIjtcclxuaW1wb3J0IHNsaWQ1IGZyb20gXCIuL3NsaWRlcy9zbGlkZTVcIjtcclxuXHJcbmNvbnN0IG9iaiA9IHtcclxuICAgIGNvbnRhaW5lciA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKSxcclxuICAgIG1lbnVCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ0bicpLFxyXG4gICAgZGl2QXJyb3dVcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpdkFycm93VVAnKSxcclxuICAgIGRpdkFycm93RG93bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpdkFycm93RG93bicpLFxyXG4gICAgbW9kYWxXaW5kb3c6IG51bGwsXHJcbiAgICBvcGVuTW9kYWwgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RzJyksXHJcbiAgICBjbG9zZU1vZGFsIDogbnVsbCxcclxuICAgIGNvbnRhY3RzICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQ29udGFjdHMnKSxcclxuICAgIEFycm93VXAgICA6IG5ldyBJbWFnZSgpLFxyXG4gICAgQXJyb3dEb3duIDogbmV3IEltYWdlKCksXHJcbiAgICBtYXNzU2xpZGVzOiBbXSxcclxuICAgIGluZGV4ICAgICA6IG51bGwsXHJcbiAgICBpbml0aWFsWCAgOiBudWxsLFxyXG4gICAgaW5pdGlhbFkgIDpudWxsXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gc2xpZGVyQ29udGFpbmVyKCl7XHJcblxyXG4gICAgY29uc3QgY29udCA9IG9iai5jb250YWluZXI7XHJcbiAgICBjb250LmFwcGVuZENoaWxkKHNsaWQ1KTtcclxuICAgIGNvbnQuYXBwZW5kQ2hpbGQoc2xpZDQpO1xyXG4gICAgY29udC5hcHBlbmRDaGlsZChzbGlkMyk7XHJcbiAgICBjb250LmFwcGVuZENoaWxkKHNsaWQyKTtcclxuICAgIGNvbnQuYXBwZW5kQ2hpbGQoc2xpZDEpO1xyXG5cclxuICAgIG9iai5tYXNzU2xpZGVzID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZCcpO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBhcnJvd0J1dHRvbnMoKSB7XHJcblxyXG4gICAgY29uc3QgZGl2QXJyb3dVcCA9IG9iai5kaXZBcnJvd1VwLFxyXG4gICAgICAgICAgZGl2QXJyb3dEb3duID0gb2JqLmRpdkFycm93RG93bjtcclxuXHJcbiAgICBvYmouQXJyb3dVcC5zcmMgPSBBcnJvd1VwO1xyXG4gICAgb2JqLkFycm93VXAuYWx0ID0gJ2Fycm93VXAnO1xyXG4gICAgZGl2QXJyb3dVcC5hcHBlbmRDaGlsZCggb2JqLkFycm93VXApO1xyXG5cclxuICAgIG9iai5BcnJvd0Rvd24uc3JjID0gQXJyb3dEb3duO1xyXG4gICAgb2JqLkFycm93RG93bi5hbHQgPSAnYXJyb3dEb3duJztcclxuICAgIGRpdkFycm93RG93bi5hcHBlbmRDaGlsZChvYmouQXJyb3dEb3duKTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIGxhc3RJdGVtT2ZBcnIoKSB7XHJcbiAgIGNvbnN0IGluZGV4ID0gb2JqLmluZGV4O1xyXG5cclxuICAgaWYoaW5kZXggPT09IDIgJiYgb2JqLmRpdkFycm93VXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdub25lJykpIHtcclxuICAgICAgIG9iai5kaXZBcnJvd1VwLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcclxuICAgICAgIG9iai5kaXZBcnJvd0Rvd24uY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xyXG4gICAgICAgcmV0dXJuO1xyXG4gICB9XHJcbiAgIGlmKGluZGV4ID09PSAzICYmIG9iai5kaXZBcnJvd0Rvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdub25lJykpe1xyXG4gICAgICAgb2JqLmRpdkFycm93VXAuY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xyXG4gICAgICAgb2JqLmRpdkFycm93RG93bi5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XHJcbiAgICAgICByZXR1cm47XHJcblxyXG4gICB9ZWxzZSB7XHJcbiAgICAgICByZXR1cm47XHJcbiAgIH1cclxuXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gc2xpZGVyR29VcChpdGVtKSB7XHJcblxyXG4gICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcclxuICAgICAgICBpZiAoaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcgJiYgaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcgIT09IG9iai5kaXZBcnJvd1VwXHJcbiAgICAgICAgICAgICYmIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmlkICE9ICdDb250YWN0cycpIHtcclxuICAgICAgICAgICAgbGFzdEl0ZW1PZkFycigpO1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnLCAndXAnKTtcclxuICAgICAgICAgICAgaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnZG93bicpO1xyXG4gICAgICAgICAgICBpdGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdzaG93JywgJ3VwJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcblxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gc2xpZGVyR29Eb3duKGl0ZW0pIHtcclxuXHJcbiAgICBpZihpdGVtLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZyAmJiBpdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmcgIT09IG9iai5kaXZBcnJvd0Rvd25cclxuICAgICAgICAgICAgJiYgaXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlkICE9ICdDb250YWN0cycpIHtcclxuICAgICAgICAgICAgbGFzdEl0ZW1PZkFycigpO1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnLCAndXAnKTtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdkb3duJyk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gY2hhbmdlU2xpZGVyVVAoKSB7XHJcbiAgICBsZXQgbWFzcyA9IG9iai5tYXNzU2xpZGVzLFxyXG4gICAgICAgIGxlbiA9IG1hc3MubGVuZ3RoO1xyXG4gICAgb2JqLkFycm93VXAuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbUJ1dHRvbicpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuLTE7IGkrKykge1xyXG4gICAgICAgIG9iai5pbmRleCA9IGk7XHJcbiAgICAgICAgaWYoc2xpZGVyR29VcChtYXNzW2ldKSl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIGNoYW5nZVNsaWRlckRPV04oKSB7XHJcbiAgICBsZXQgbWFzcyA9IG9iai5tYXNzU2xpZGVzLFxyXG4gICAgICAgIGxlbiA9IG1hc3MubGVuZ3RoO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuOyBpKyspe1xyXG4gICAgICAgIG9iai5pbmRleCA9IGk7XHJcbiAgICAgICAgaWYoc2xpZGVyR29Eb3duKG1hc3NbaV0pKSByZXR1cm47XHJcbiAgICB9XHJcblxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tU3dpcGUgVXAgLyBEb3duIC8gTGVmdCAvIFJpZ2h0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBzdGFydFRvdWNoKGUpIHtcclxuICAgICAgIG9iai5pbml0aWFsWCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgb2JqLmluaXRpYWxZID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XHJcbn1cclxuZnVuY3Rpb24gbW92ZVRvdWNoKGUpIHtcclxuICAgICAgICBpZiAob2JqLmluaXRpYWxYID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvYmouaW5pdGlhbFkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRYID0gZS50b3VjaGVzWzBdLmNsaWVudFgsXHJcbiAgICAgICAgICAgIGN1cnJlbnRZID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XHJcblxyXG4gICAgICAgIGxldCBkaWZmWCA9IG9iai5pbml0aWFsWCAtIGN1cnJlbnRYLFxyXG4gICAgICAgICAgICBkaWZmWSA9IG9iai5pbml0aWFsWSAtIGN1cnJlbnRZO1xyXG5cclxuICAgICAgICBpZiAoTWF0aC5hYnMoZGlmZlgpID4gTWF0aC5hYnMoZGlmZlkpKSB7XHJcbiAgICAgICAgICAgIC8vIHNsaWRpbmcgaG9yaXpvbnRhbGx5XHJcbiAgICAgICAgICAgIGlmIChkaWZmWCA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIHN3aXBlZCBsZWZ0XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN3aXBlZCBsZWZ0XCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gc3dpcGVkIHJpZ2h0XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN3aXBlZCByaWdodFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHNsaWRpbmcgdmVydGljYWxseVxyXG4gICAgICAgICAgICBpZiAoZGlmZlkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzd2lwZWQgdXBcclxuICAgICAgICAgICAgICAgIGNoYW5nZVNsaWRlclVQKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzd2lwZWQgZG93blxyXG4gICAgICAgICAgICAgICAgY2hhbmdlU2xpZGVyRE9XTigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvYmouaW5pdGlhbFggPSBudWxsO1xyXG4gICAgICAgIG9iai5pbml0aWFsWSA9IG51bGw7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gYnV0dG9uRG93bihldmVudCkge1xyXG5cclxuICAgIGlmIChldmVudC5jb2RlID09PSAnQXJyb3dEb3duJykge1xyXG4gICAgICAgIGNoYW5nZVNsaWRlckRPV04oKTtcclxuICAgIH1cclxuICAgIGlmIChldmVudC5jb2RlID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgICBjaGFuZ2VTbGlkZXJVUCgpO1xyXG4gICAgfVxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gbW91c2VXaGVlbChlKSB7XHJcblxyXG4gICAgbGV0IGRlbHRhID0gZS5kZWx0YVkgfHwgZS5kZXRhaWwgfHwgZS53aGVlbERlbHRhO1xyXG5cclxuICAgIGRlbHRhID4gMCA/IGNoYW5nZVNsaWRlckRPV04oKVxyXG4gICAgICAgICAgICAgIDogICggd2luZG93Lm9ubW91c2V3aGVlbCA9IG51bGwgLFxyXG4gICAgICAgICAgICAgICAgICAgY2hhbmdlU2xpZGVyVVAoKSxcclxuICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4gd2luZG93Lm9ubW91c2V3aGVlbCA9IG1vdXNlV2hlZWwsIDUwMCkpO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gc3RhcnRMaXN0ZW5lcigpe1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGJ1dHRvbkRvd24pO1xyXG4gICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgbW91c2VXaGVlbCk7XHJcbiAgICB3aW5kb3cub25tb3VzZXdoZWVsID0gbW91c2VXaGVlbDtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBvYmouY29udGFpbmVyO1xyXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHN0YXJ0VG91Y2gsIGZhbHNlKTtcclxuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIG1vdmVUb3VjaCwgZmFsc2UpO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gc3RvcExpc3RlbmVyKCl7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYnV0dG9uRG93bik7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBtb3VzZVdoZWVsKTtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBvYmouY29udGFpbmVyO1xyXG4gICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHN0YXJ0VG91Y2gpO1xyXG4gICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgbW92ZVRvdWNoKTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIHJlbW92ZUNoYW5nZShpdGVtKSB7XHJcbiAgICBpdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJztcclxuICAgIGl0ZW0uc3R5bGUuYm9yZGVyUmFkaXVzID0gYDBgO1xyXG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51T3BlbicpO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIGNob29zZVBhZ2UoZSkge1xyXG4gICAgbGV0IG1hc3MgPSBvYmoubWFzc1NsaWRlcyxcclxuICAgICAgICBpZCA9IHRoaXMuaWQsXHJcbiAgICAgICAgZmxhZyA9IGZhbHNlLFxyXG4gICAgICAgIGxlbiA9IG1hc3MubGVuZ3RoO1xyXG5cclxuXHJcbiAgICBmb3IgKGxldCBpID0gbGVuLTE7IGkgPiAwOyBpLS0pe1xyXG5cclxuXHJcbiAgICAgICAgaWYoaWQgPT09ICdDb250YWN0cycpIHtcclxuICAgICAgICAgICAgY2xvc2VNZW51KG1hc3NbaV0pO1xyXG4gICAgICAgICAgICBtb2RhbFdpbmRvdygpO1xyXG5cclxuICAgICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgICAgIGlmKG1hc3NbaV0uaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICBvYmouaW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgbWFzc1tpXS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgbGFzdEl0ZW1PZkFycigpO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2hhbmdlKG1hc3NbaV0pO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZihmbGFnKXtcclxuICAgICAgICAgICAgICAgICAgICBtYXNzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXNzW2ldLmNsYXNzTGlzdC5hZGQoJ3VwJyk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBtYXNzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnLCAndXAnKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXNzW2ldLmNsYXNzTGlzdC5hZGQoJ2Rvd24nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlbW92ZUNoYW5nZShtYXNzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydExpc3RlbmVyKCk7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIGNsb3NlTWVudShpdGVtKSB7XHJcbiAgICBpdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJztcclxuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbWVudU9wZW4nKTtcclxuICAgIGl0ZW0uc3R5bGUuYm9yZGVyUmFkaXVzID0gYDBgO1xyXG4gICAgb2JqLmRpdkFycm93RG93bi5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XHJcbiAgICBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hvb3NlUGFnZSk7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBtZW51U2hvdygpIHtcclxuXHJcbiAgICBjb25zdCBtYXNzID0gb2JqLm1hc3NTbGlkZXMsXHJcbiAgICAgICAgbGVuID0gbWFzcy5sZW5ndGg7XHJcbiAgICBsZXQgdHJhbnNGb3JtID0gMDtcclxuICAgIG1hc3MuZm9yRWFjaCggZWwgPT4ge1xyXG4gICAgICAgIHNsaWRlckdvVXAoZWwpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XHJcblxyXG4gICAgICAgIGlmKCFtYXNzW2ldLnN0eWxlLnRyYW5zZm9ybSB8fCBtYXNzW2ldLnN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnKXtcclxuICAgICAgICAgICAgaWYoaSl7XHJcbiAgICAgICAgICAgICAgICB0cmFuc0Zvcm0gKz0gODA7XHJcbiAgICAgICAgICAgICAgICBtYXNzW2ldLnN0eWxlLmJvcmRlclJhZGl1cyA9IGA4cHggOHB4IDAgMGA7XHJcbiAgICAgICAgICAgICAgICBtYXNzW2ldLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7dHJhbnNGb3JtfXB4KWA7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1hc3NbaV0uY2xhc3NMaXN0LmFkZCgnbWVudU9wZW4nKTtcclxuICAgICAgICAgICAgbWFzc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNob29zZVBhZ2UpO1xyXG4gICAgICAgICAgICBvYmouZGl2QXJyb3dEb3duLmNsYXNzTGlzdC5hZGQoJ25vbmUnKTtcclxuICAgICAgICAgICAgb2JqLmRpdkFycm93VXAuY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xyXG4gICAgICAgICAgICBzdG9wTGlzdGVuZXIoKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGNsb3NlTWVudShtYXNzW2ldKTtcclxuICAgICAgICAgICAgc3RhcnRMaXN0ZW5lcigpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gY3JlYXRNb2RhbFdpbmRvdygpIHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgc3RyID0gYDxkaXYgY2xhc3M9XCJtb2RhbEZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj7QodCy0Y/QttC40YLQtdGB0Ywg0YEg0L3QsNC80Lg8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ta3lwZTogX19fX19fX19fX19fX19fX188L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5WaWJlOiBfX19fX19fX19fX19fX19fX188L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UZWxlZ3JhbTogX19fX19fX19fX19fX188L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuXCI+0JfQsNC60YDRi9GC0Yw8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsJ21vZGFsJyk7XHJcbiAgICBkaXYuaW5uZXJIVE1MID0gc3RyO1xyXG4gICAgb2JqLm1vZGFsV2luZG93ID0gZGl2O1xyXG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoZGl2LG9iai5jb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nKTtcclxuICAgIG9iai5jbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bicpO1xyXG59XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIG1vZGFsV2luZG93KCl7XHJcbiAgICBjb25zdCBtb2RhbCA9IG9iai5tb2RhbFdpbmRvdyxcclxuICAgICAgICAgIGJ0bkNsb3NlID0gb2JqLmNsb3NlTW9kYWw7XHJcblxyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWxBY3RpdmUnKTtcclxuICAgIHN0b3BMaXN0ZW5lcigpO1xyXG4gICAgYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcclxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbEFjdGl2ZScpO1xyXG4gICAgICAgIHN0YXJ0TGlzdGVuZXIoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5vYmoubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1lbnVTaG93KTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuc2xpZGVyQ29udGFpbmVyKCk7XHJcbmNyZWF0TW9kYWxXaW5kb3coKTtcclxuYXJyb3dCdXR0b25zKCk7XHJcbnN0YXJ0TGlzdGVuZXIoKTtcclxuXHJcblxyXG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgQ2F0IGZyb20gJy4uLy4uL2ltZy9jYXQucG5nJztcclxuaW1wb3J0IE1vb24gZnJvbSAnLi4vLi4vaW1nL01vb24ucG5nJztcclxuaW1wb3J0IHN0YXIgZnJvbSAnLi4vLi4vaW1nL3N0YXIucG5nJztcclxuaW1wb3J0ICBDb21tZW50IGZyb20gJy4uLy4uL2ltZy9jb21tZW50VGV4dC5wbmcnO1xyXG5pbXBvcnQgc25haWwgZnJvbSAnLi4vLi4vaW1nL2dyYXNzU25haWwucG5nJztcclxuXHJcblxyXG5cclxuY29uc3Qgb2JqID0ge1xyXG4gICAgc2xpZGUgICAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIG1haW4gICAgIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICB0b3BCbG9jayA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgYm90dG9tQmxvY2sgOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgYmxvY2tDYXQgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIGJsb2NrTW9vbjogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBjYXQgICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgY29tbSAgICAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIENhdCA6IG5ldyBJbWFnZSgpLFxyXG4gICAgTW9vbjogbmV3IEltYWdlKCksXHJcbiAgICBDb21tZW50IDogbmV3IEltYWdlKCksXHJcbiAgICBTbmFpbCA6IG5ldyBJbWFnZSgpXHJcbn1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBhZGRJbWFnZSgpIHtcclxuXHJcbiAgICBvYmouTW9vbi5zcmMgPSBNb29uO1xyXG4gICAgb2JqLk1vb24uYWx0ID0gJ01vb24nO1xyXG4gICAgb2JqLk1vb24uY2xhc3NMaXN0LmFkZCgnbW9vbicpO1xyXG4gICAgb2JqLmJsb2NrTW9vbi5hcHBlbmRDaGlsZChvYmouTW9vbik7XHJcblxyXG4gICAgb2JqLkNhdC5zcmMgPSBDYXQ7XHJcbiAgICBvYmouQ2F0LmFsdCA9ICdDYXQnO1xyXG4gICAgb2JqLmNhdC5hcHBlbmRDaGlsZChvYmouQ2F0KTtcclxuXHJcbiAgICBvYmouQ29tbWVudC5zcmMgPSBDb21tZW50O1xyXG4gICAgb2JqLkNvbW1lbnQuYWx0ID0gJ0NvbW1lbnQnO1xyXG4gICAgb2JqLmNvbW0uYXBwZW5kQ2hpbGQob2JqLkNvbW1lbnQpO1xyXG5cclxuICAgIG9iai5TbmFpbC5zcmMgPSBzbmFpbDtcclxuICAgIG9iai5TbmFpbC5hbHQgPSAnU25haWwnO1xyXG4gICAgb2JqLlNuYWlsLmNsYXNzTGlzdC5hZGQoJ2dyYXNzJyk7XHJcbiAgICBvYmoubWFpbi5hcHBlbmRDaGlsZChvYmouU25haWwpO1xyXG5cclxuXHJcblxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBjbG91ZHNJbWcoKSB7XHJcbiAgICBsZXQgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgIGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgZGl2MS5jbGFzc0xpc3QuYWRkKCdjbG91ZDEnLCdjbG91ZCcpO1xyXG4gICAgb2JqLm1haW4uYXBwZW5kQ2hpbGQoZGl2MSk7XHJcblxyXG4gICAgZGl2Mi5jbGFzc0xpc3QuYWRkKCdjbG91ZDInLCAnY2xvdWQnKTtcclxuICAgIG9iai5tYWluLmFwcGVuZENoaWxkKGRpdjIpO1xyXG5cclxuICAgIGRpdjMuY2xhc3NMaXN0LmFkZCgnY2xvdWQzJywgJ2Nsb3VkJyk7XHJcbiAgICBvYmoubWFpbi5hcHBlbmRDaGlsZChkaXYzKTtcclxuXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBtb3ZlQ2xvdWRzKCkge1xyXG4gICAgY29uc3QgIG1hc3NDbG91ZCA9IG9iai5tYWluLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbG91ZCcpO1xyXG5cclxuICAgIG1hc3NDbG91ZC5mb3JFYWNoKCBlbCA9PiB7XHJcbiAgICAgICAgbGV0IHN0ciA9IChlbC5zdHlsZS5sZWZ0KS5zbGljZSgwLChlbC5zdHlsZS5sZWZ0KS5sZW5ndGggLSAyKTtcclxuICAgICAgICBpZihOdW1iZXIoc3RyKSA+IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggKyAxMCkpe1xyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdub25lJyk7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLmxlZnQgPSAnLScgKyAoZWwuY2xpZW50V2lkdGggKyA1MDApICsgJ3B4JztcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnbm9uZScpO1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gKGVsLm9mZnNldExlZnQgKyAxMCkgKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gbW92ZU1vb24oKSB7XHJcbiAgICBsZXQgbW9vbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb29uJyksXHJcbiAgICAgICAgdHJhbnNmID0gKG1vb24uc3R5bGUudHJhbnNmb3JtKS5yZXBsYWNlKC9yb3RhdGVcXCgvLCcnKSxcclxuICAgICAgICBudW0gPSB0cmFuc2YucmVwbGFjZSgvZGVnXFwpLywnJyk7XHJcbiAgICAgICBudW0gPSBOdW1iZXIobnVtKSArICAwLjU7XHJcbiAgICBpZihtb29uLnN0eWxlLnRyYW5zZm9ybSA9PT0gJycpe1xyXG4gICAgICAgIG51bSA9IDA7XHJcbiAgICB9XHJcbiAgICBtb29uLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtudW19ZGVnKWA7XHJcblxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBjaGFuZ2VQb3NpdGlvblN0YXJzKCkge1xyXG4gICAgbGV0IG1hc3NTdGFycyA9IG9iai5tYWluLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFyJyk7XHJcblxyXG4gICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtYXNzU3RhcnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICBsZXQgdG9wID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKig0MCAtIDUpICsgNSksXHJcbiAgICAgICAgICAgICBsZWZ0ID0gIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSooMTAwIC0gMSkgKyAxKTtcclxuICAgICAgICAgICAgIG1hc3NTdGFyc1tpXS5zdHlsZS50b3AgPSB0b3AgKyAnJSc7XHJcbiAgICAgICAgICAgICBtYXNzU3RhcnNbaV0uc3R5bGUubGVmdCA9IGxlZnQgKyAnJSc7XHJcbiAgICAgfVxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBwb3NpdGlvblN0YXIobmV3U3Rhcikge1xyXG5cclxuICAgIGxldCB0b3AgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqKDQwIC0gNSkgKyA1KSxcclxuICAgICAgICBsZWZ0ID0gIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSooMTAwIC0gMSkgKyAxKTtcclxuXHJcbiAgICAgICAgbmV3U3Rhci5zdHlsZS50b3AgPSB0b3AgKyAnJSc7XHJcbiAgICAgICAgbmV3U3Rhci5zdHlsZS5sZWZ0ID0gbGVmdCArICclJztcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gc2l6ZVN0YXIoKSB7XHJcbiAgICBsZXQgc2l6ZSA9IDQwO1xyXG4gICAgaWYod2luZG93LnNjcmVlbi53aWR0aCA8IDEwMDApe1xyXG4gICAgICAgIHNpemUgPSAyMDtcclxuICAgIH1cclxuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqKHNpemUgLSA1KSArIDUpO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gc3RhcnMoKSB7XHJcblxyXG4gICAgbGV0IGFtb3VudCA9IDA7XHJcblxyXG4gICAgaWYod2luZG93LnNjcmVlbi53aWR0aCA8IDEwMDApe1xyXG4gICAgICAgIGFtb3VudCA9IE1hdGgucmFuZG9tKCkqKDEwIC0gNSkgKyA1O1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIGFtb3VudCA9IE1hdGgucmFuZG9tKCkqKDIwIC0gMTApICsgMTA7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLnJvdW5kKGFtb3VudCk7IGkrKyl7XHJcbiAgICAgICAgbGV0IFN0YXIgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgU3Rhci5zcmMgPSBzdGFyO1xyXG4gICAgICAgICBTdGFyLmFsdCA9ICdzdGFyJztcclxuICAgICAgICAgU3Rhci5jbGFzc0xpc3QuYWRkKCdzdGFyJyk7XHJcbiAgICAgICAgIFN0YXIuc3R5bGUuaGVpZ2h0ID0gc2l6ZVN0YXIoKSArICdweCc7XHJcbiAgICAgICAgIHBvc2l0aW9uU3RhcihTdGFyKTtcclxuICAgICAgICAgb2JqLm1haW4uYXBwZW5kQ2hpbGQoU3Rhcik7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gY29udGFpbmVyKCkge1xyXG4gICAgY29uc3Qgc2xpZDEgPSBvYmouc2xpZGUsXHJcbiAgICAgICAgICBtYWluICA9IG9iai5tYWluLFxyXG4gICAgICAgICAgdG9wQmwgPSBvYmoudG9wQmxvY2ssXHJcbiAgICAgICAgICBidHRtQmwgPSBvYmouYm90dG9tQmxvY2ssXHJcbiAgICAgICAgICBibG9ja0NhdCA9IG9iai5ibG9ja0NhdCxcclxuICAgICAgICAgIGJsb2NrTW9vbiA9IG9iai5ibG9ja01vb24sXHJcbiAgICAgICAgICBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKSxcclxuICAgICAgICAgIGNhdCA9IG9iai5jYXQsXHJcbiAgICAgICAgICBjb21tID0gb2JqLmNvbW07XHJcblxyXG4gICAgc2xpZDEuY2xhc3NMaXN0LmFkZCgnc2xpZCcsICdzbGlkMScsICdzaG93Jyk7XHJcbiAgICBzbGlkMS5zdHlsZS5oZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgJ3B4JztcclxuICAgIHNsaWQxLmlkID0gJ01haW4nO1xyXG5cclxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbkRpdicpO1xyXG4gICAgc2xpZDEuYXBwZW5kQ2hpbGQobWFpbik7XHJcblxyXG4gICAgdG9wQmwuY2xhc3NMaXN0LmFkZCgndG9wQmxvY2snKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQodG9wQmwpO1xyXG5cclxuICAgIGJ0dG1CbC5jbGFzc0xpc3QuYWRkKCdib3R0b21CbG9jaycpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChidHRtQmwpO1xyXG5cclxuICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnaDEnKTtcclxuICAgIG5hbWUuaW5uZXJIVE1MID0gJ0FOWSBXRUInO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChuYW1lKTtcclxuXHJcblxyXG4gICAgYmxvY2tDYXQuY2xhc3NMaXN0LmFkZCgnYmxvY2tDYXQnKTtcclxuICAgIGJ0dG1CbC5hcHBlbmRDaGlsZChibG9ja0NhdCk7XHJcblxyXG4gICAgY2F0LmNsYXNzTGlzdC5hZGQoJ2NhdCcpO1xyXG4gICAgY29tbS5jbGFzc0xpc3QuYWRkKCdjb21tZW50Jyk7XHJcbiAgICBibG9ja0NhdC5hcHBlbmRDaGlsZChjYXQpO1xyXG4gICAgYmxvY2tDYXQuYXBwZW5kQ2hpbGQoY29tbSk7XHJcblxyXG4gICAgYmxvY2tNb29uLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrTW9vbicpO1xyXG4gICAgdG9wQmwuYXBwZW5kQ2hpbGQoYmxvY2tNb29uKTtcclxuXHJcblxyXG4gICAgYWRkSW1hZ2UoKTtcclxuICAgIHN0YXJzKCk7XHJcbiAgICBjbG91ZHNJbWcoKTtcclxuICAgIHNldEludGVydmFsKGNoYW5nZVBvc2l0aW9uU3RhcnMsIDIwMDAwKTtcclxuICAgIHNldEludGVydmFsKG1vdmVDbG91ZHMsMCk7XHJcbiAgICBzZXRJbnRlcnZhbChtb3ZlTW9vbiwxMDAwMCk7XHJcblxyXG59XHJcblxyXG5jb250YWluZXIoKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb2JqLnNsaWRlOyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5jb25zdCBzbGlkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuc2xpZDIuY2xhc3NMaXN0LmFkZCgnc2xpZCcsICdzbGlkMicsICdkaXNwbGF5Q2VudGVyJyk7XHJcbnNsaWQyLnN0eWxlLmhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgKyAncHgnO1xyXG5zbGlkMi5pbm5lckhUTUwgPSBgPGgxPtCc0Ysg0L/RgNC10LTQu9Cw0LPQsNC10Lw8L2gxPmA7XHJcbnNsaWQyLmlkID0gJ1dlIHN1cHBvc2UnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNsaWQyOyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5jb25zdCBzbGlkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuc2xpZDMuY2xhc3NMaXN0LmFkZCgnc2xpZCcsICdzbGlkMycsICdkaXNwbGF5Q2VudGVyJyk7XHJcbnNsaWQzLnN0eWxlLmhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgKyAncHgnO1xyXG5zbGlkMy5pbm5lckhUTUwgPSBgPGgxPtCd0LDRiNC4INGA0LDQsdC+0YLRizwvaDE+YDtcclxuc2xpZDMuaWQgPSAnT3VyIHdvcmsnO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2xpZDM7IiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmNvbnN0IHNsaWQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5zbGlkNC5jbGFzc0xpc3QuYWRkKCdzbGlkJywgJ3NsaWQ0JywgJ2Rpc3BsYXlDZW50ZXInKTtcclxuc2xpZDQuc3R5bGUuaGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCArICdweCc7XHJcbnNsaWQ0LmlubmVySFRNTCA9ICBgPGgxIGNsYXNzPVwiY29udGFjdHNcIj5QU0Qg0YjQsNCx0LvQvtC90Ys8L2gxPmA7XHJcbnNsaWQ0LmlkID0gJ1RlbXBsYXRlcyc7XHJcbmV4cG9ydCBkZWZhdWx0IHNsaWQ0OyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IHNsaWQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbnNsaWQ1LmNsYXNzTGlzdC5hZGQoJ3NsaWQnLCAnc2xpZDUnLCAnZGlzcGxheUNlbnRlcicpO1xuc2xpZDUuc3R5bGUuaGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCArICdweCc7XG5zbGlkNS5pbm5lckhUTUwgPSAgYDxoMSBjbGFzcz1cImNvbnRhY3RzXCI+0JrQvtC90YLQsNC60YLRizwvaDE+YDtcbnNsaWQ1LmlkID0gJ0NvbnRhY3RzJztcbmV4cG9ydCBkZWZhdWx0IHNsaWQ1OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKG1vZHVsZS5pZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjA5ZDBhMDg4N2MzNDlmMjBkMDJhN2NlYTFlMjllOGFiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmNzU3YzBkZDExNjZjMTFiNWJjMjMwNTQyMTYwYWU3MS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmJkMjI1ZWU4YWMzOGQ0MjZjNjY4N2JiY2JhYWE3ODYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjMxZmM1MzRjMTQwNjQ4YWY3Yjc4NDEyMzJiYWUyMzQyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2OGM4ODJkYjZmODI0NDRlYjhhMjA5NjVhZTQyYTIxNi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODBjNjhlOTY5Yzg4ZDIxOWNkZDJiY2RjNWZmY2Q4ZDYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjBhMjlkMGU3NTRmZTNhYzkwNjFkZjY2ODM2ZTYwYWI0LnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=