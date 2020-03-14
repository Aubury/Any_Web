import _ from 'lodash';

const obj = {
    slide : document.createElement('div'),
    main  : document.createElement('div'),
    massBlocks : [],

}
//-------------------------------------------------------------
function sizeBlock(size) {
    return Math.round(Math.random()*(size - 160) + 160);
}
//--------------------------------------------------------------
function sizeScreen() {
    let size = 0,
        docWidth = document.documentElement.clientWidth*.8,
        docHeight = document.documentElement.clientHeight*.8;

    docWidth > docHeight ?
        size = Math.round(docHeight / 2.1):
        size = Math.round( docWidth/ 3.1);
    if(window.screen.width < 1000){
        size = Math.round(docWidth/ 2);
    }
    return size;
}
//----------------------------------------------------------
function newHeight(parent) {
    let height = parent.clientHeight;
    if(window.screen.width < 900)
    {
        height = parent.clientWidth/2;
    }else {
        height = parent.clientWidth/3
    }
    return Math.round(Math.random()*(height - height/3) + height/3);
}
//--------------------------------------------------------------
function newWidth(parent) {
    let width = 0;
    if(window.screen.width < 900)
    {
        width = parent.clientWidth/2;
    }else {
        width = parent.clientWidth/3
    }
    return Math.round(Math.random()*(width - width/2) + width/2);
}
// ---------------------------------------------------------
function createBlock( type, size, ...classes) {
    let block = document.createElement(type);
        block.classList.add(...classes);
        block.style.height = sizeBlock(size) + "px";
        block.style.width = sizeBlock(size) + "px";
        return block;
}

//--------------------------------------------------------------
function massBlocks() {
   let len = 16,
       size = sizeScreen();

        if(window.screen.width < 1000){
            len = 10;
        }
        for (let i = 0; i < len; i++){
        let div = null;
        if(!i){
               div = document.createElement('div');
               div.classList.add('block',`block_${i+1}`);
               div.style.height = size + 'px';
               div.style.width = size + 'px';
               div.style.zIndex = zIndex();
        }else{
            div = createBlock('div', size, 'block',`block_${i+1}`);
        }

        obj.massBlocks.push(div);
    }

}
//---------------------------------------------------------------
function newPositionTop(el) {
    let parent = el.offsetParent,
        elH = el.offsetHeight,
        prH = parent.offsetHeight,
        endPoint = prH - elH;

    return Math.round(Math.random()*(endPoint - 1 + 1) + 1);
}
//---------------------------------------------------------------
function newPositionLeft(el) {
    let parent = el.offsetParent,
        elW = el.offsetWidth,
        prW = parent.offsetWidth,
        endPoint = prW - elW;
    return Math.round(Math.random()*(endPoint - 1 + 1) + 1);
}
//---------------------------------------------------------------
function zIndex() {
    return Math.round(Math.random()*(10 - 1) + 1);
}
// ---------------------------------------------------------------
 function positionBlock() {
    let mass = obj.massBlocks;

    mass.forEach(el=>{
        el.style.top = newPositionTop(el) + 'px';
        el.style.left = newPositionLeft(el) + 'px';
        el.style.zIndex = zIndex();
        el.style.width = newWidth(el.parentElement) +'px';
        el.style.height = newHeight(el.parentElement) + 'px';
        el.style.position = 'absolute';
    })
}
//--------------------------------------------------------
function  fillMain() {
    let main = obj.main,
        mass = obj.massBlocks;

    mass.forEach(el=>{
        main.appendChild(el);
    });
}
// -------------------------------------------------------
function container() {
    const container = obj.slide,
        main = obj.main,
        name = document.createElement('h2');


    container.classList.add('slid', 'slid3');
    container.style.height = document.documentElement.clientHeight + 'px';
    container.id = 'Our work';

    name.innerHTML = 'Наши работы';
    container.appendChild(name);

    main.classList.add('mainSlide3');
    container.appendChild(main);
    massBlocks();
    fillMain();
    setTimeout(()=> positionBlock(), 10);
    setInterval(()=> positionBlock(), 50000);
}
//--------------------------------------------------------------
//вспомогательная функция
function putToCache(elem, cache){
    if(cache.indexOf(elem) != -1){
        return;
    }
    var i = Math.floor(Math.random()*(cache.length + 1));
    cache.splice(i, 0, elem);
}
//функция, возвращающая свеженький, девственный компаратор
function madness(){
    var cache = [];
    return function(a, b){
        putToCache(a, cache);
        putToCache(b, cache);
        return cache.indexOf(b) - cache.indexOf(a);
    }
}
//собственно функция перемешивания
function shuffle(arr){
    var compare = madness();
    return arr.sort(compare);
}
//---------------------------------------------------------------
function positionCenter(valueScr, valueBl) {
    return Math.round(valueScr/2 - valueBl/2);
}
//----------------------------------------------------------------

container();

export default obj.slide;


