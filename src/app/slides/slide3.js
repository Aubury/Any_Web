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
import Temp_13 from '../../img/rainforestfoods.jpg';
import Close_icon from '../../img/close_tr.png';

const obj = {
    slide : document.createElement('div'),
    main  : document.createElement('div'),
    massImg: [Temp_1, Temp_2, Temp_3, Temp_4, Temp_5, Temp_6, Temp_7, Temp_8, Temp_9, Temp_10,
              Temp_11, Temp_12, Temp_13],
    massBlocks : [],
    moveBlocksInterval : null,
    flag : true
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
// -----------------------------------------------------------
function addListener() {
  obj.massBlocks.forEach( el => el.onclick = focus);
}
         //---------------------------
function  stopListener() {
    obj.massBlocks.forEach( el => el.onclick = null);
}
        //----------------------------
function  Interval() {
    obj.flag = true;
    obj.moveBlocksInterval = setInterval(()=>{
        if(obj.slide.classList.contains('show')){
            if(obj.main.classList.contains('stop-blocks')){
                obj.moveBlocksInterval = clearInterval(obj.moveBlocksInterval);
            }else {
                positionBlock();
            }
        }

    }, 30000);
}
       //--------------------------
function stopInterval() {
    obj.flag = false;
    obj.moveBlocksInterval = clearInterval(obj.moveBlocksInterval);
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
            obj.massBlocks.push(div);
    }
   addListener();
}
//---------------------------------------------------------------
function newPositionTop(el) {
    let parent = el.offsetParent,
        elH = el.offsetHeight,
        prH = parent.offsetHeight,
        endPoint = (prH - elH) - 10;

    return Math.round(Math.random()*(endPoint - 10 + 10) + 10);
}
//---------------------------------------------------------------
function newPositionLeft(el) {
    let parent = el.offsetParent,
        elW = el.offsetWidth,
        prW = parent.offsetWidth,
        endPoint = (prW - elW) - 10;
    return Math.round(Math.random()*(endPoint - 10 + 10) + 10);
}
//---------------------------------------------------------------
function zIndex() {
    return Math.round(Math.random()*(10 - 1) + 1);
}
// ---------------------------------------------------------------
 function positionBlock() {
    let mass = obj.massBlocks;

    mass.forEach(el=>{
        // el.firstElementChild.style.width = newWidth(el.parentElement) +'px';
        el.style.top = newPositionTop(el) + 'px';
        el.style.left = newPositionLeft(el) + 'px';
        el.style.zIndex = zIndex();
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
    let container = obj.slide,
        main = obj.main,
        name = document.createElement('h2'),
        mass = obj.massBlocks,
        flag = false;



    container.classList.add('slid', 'slid3');
    container.style.height = document.documentElement.clientHeight + 'px';
    container.id = 'Our work';

    name.innerHTML = 'Наши работы';
    container.appendChild(name);

    main.classList.add('mainSlide3');
    container.appendChild(main);
    massBlocks();
    fillMain();


    setTimeout(()=> positionBlock(), 0);

    // создаем экземпляр наблюдателя
    let observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if(mutation.type === 'attributes'){
                if(container.classList.contains('show') && obj.flag){
                    if(obj.moveBlocksInterval === null){
                        Interval();
                       }
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
    console.log(ev.target);
    if(!ev.target.classList.contains('close-icon') && ev.target.parentElement.classList.contains('block')){

        stopInterval();

        const el = ev.target,
            parent = el.parentElement,
            main_parent = obj.main,
            docWidth = main_parent.clientWidth,
            docHeight = main_parent.clientHeight,
            close_icon = new Image(),
            top  = parent.style.top.substr(0, parent.style.top.length-2),
            left = parent.style.left.substr(0, parent.style.left.length-2),
            width = parent.clientWidth,
            height = parent.clientHeight;

        let size = undefined;

        stopListener();

        close_icon.src = Close_icon;
        close_icon.style.width = 20 + 'px';
        close_icon.style.height = 20 + 'px';

        el.clientWidth > el.clientHeight ? size = docWidth - 50 : size = docHeight - 20;

        el.clientWidth > el.clientHeight ? (el.style.width = size + 'px', el.style.height = 'auto' ):
            (el.style.height = size + 'px', el.style.width = 'auto');
        parent.style.zIndex = '20';
        parent.classList.add('transition');
        main_parent.classList.add('stop-blocks');
        parent.style.left = positionCenter(docWidth, el.clientWidth) + 'px';
        parent.style.top = positionCenter(docHeight, el.clientHeight) + 'px';

        close_icon.style.position = 'absolute';
        close_icon.style.top = 10 + 'px';
        close_icon.style.left = (parent.clientWidth - 30) + 'px';
        close_icon.classList.add('close-icon');
        close_icon.style.cursor = 'point';
        parent.appendChild(close_icon);

        close_icon.addEventListener('click', ()=>{

            parent.style.left = left + 'px';
            parent.style.top = top + 'px';
            el.style.width = width + 'px';
            el.style.height = height + 'px';
            parent.style.zIndex = null;
            parent.classList.remove('transition');
            main_parent.classList.remove('stop-blocks');
            parent.removeChild(close_icon);
            parent.classList.remove('transition');
            main_parent.classList.remove('stop-blocks');
            setTimeout(()=> positionBlock(), 500);
            Interval();
            addListener();

        });
    }



}

container();


export default obj.slide;


