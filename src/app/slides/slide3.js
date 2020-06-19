import _ from 'lodash';
import Temp_1 from '../../img/template_1.png';
import Temp_2 from '../../img/template_2.jpg';
import Temp_3 from '../../img/template_3.png';
import Temp_4 from '../../img/template_4.png';
import Temp_5 from '../../img/template_5.png';
import Temp_6 from '../../img/template_6.png';
import Temp_7 from '../../img/template_7.png';
import Temp_8 from '../../img/amaioswim.jpg';
import Temp_9 from '../../img/anyW4Ytmpl.jpg';
import Temp_10 from '../../img/cosm.jpg';
import Temp_11 from '../../img/destiny.jpg';
import Temp_12 from '../../img/proudandpunch.jpg';
import Temp_13 from '../../img/rainforestfoods.jpg'

const obj = {
    slide : document.createElement('div'),
    main  : document.createElement('div'),
    massImg: [Temp_1, Temp_2, Temp_3, Temp_4, Temp_5, Temp_6, Temp_7, Temp_8, Temp_9, Temp_10,
              Temp_11, Temp_12, Temp_13],
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
// function newHeight(parent) {
//     let height = parent.clientHeight;
//     if(window.screen.width < 900)
//     {
//         height = parent.clientWidth/2;
//     }else {
//         height = parent.clientWidth/3
//     }
//     return Math.round(Math.random()*(height - height/3) + height/3);
// }
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
        return block;
}

//--------------------------------------------------------------
function massBlocks() {
   let size = sizeScreen(),
       massImg = obj.massImg,
       len = massImg.length;

        if(window.screen.width < 1000){
            len = 10;
        }
        for (let i = 0; i < len; i++){
        let div = null,
            img = new Image();
            img.src = massImg[i];
            img.width = sizeBlock(size);
            div = createBlock('div', size, 'block',`block_${i+1}`);
            div.appendChild(img);
            div.addEventListener('click', focus);
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
        el.firstElementChild.style.width = newWidth(el.parentElement) +'px';
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

                moveBlocksInterval = setInterval(()=> positionBlock(), 20000);
            }else {
    let moveBlocksInterval = undefined;
        setTimeout(()=> positionBlock(), 0);

    // создаем экземпляр наблюдателя
    let observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if(mutation.type === 'attributes'){
                if(container.classList.contains('show')){

                    moveBlocksInterval = setInterval(()=> positionBlock(), 20000);

                     }else {

                     clearInterval(moveBlocksInterval);
                     }
                }
           });
       });

    // настраиваем наблюдатель
        let config = { attributes: true }

    // передаем элемент и настройки в наблюдатель
        observer.observe(container, config);

}
//---------------------------------------------------------------
function positionCenter(valueScr, valueBl) {
    return Math.round(valueScr/2 - valueBl/2);
}

//----------------------------------------------------------------
function focus(ev) {
    let el = ev.target,
        parent = el.parentElement,
        docWidth = parent.parentElement.clientWidth,
        docHeight = parent.parentElement.clientHeight,
        size = undefined;

     el.clientWidth > el.clientHeight ? size = docWidth/1.5 : size = docHeight-20;

    el.clientWidth > el.clientHeight ? el.style.width = Math.ceil(size) + 'px' :
        (el.style.height = Math.ceil(size) + 'px', el.classList.add('blockCenter'));
    parent.style.zIndex = 20;
    parent.classList.add('transition');
    parent.style.left = positionCenter(docWidth, el.clientWidth) + 'px';
    parent.style.top = positionCenter(docHeight, el.clientHeight) + 'px';
    setTimeout(()=>{
        positionBlock();
        parent.classList.remove('transition');
        el.classList.remove('blockCenter');
    },5000);
}

container();


export default obj.slide;


