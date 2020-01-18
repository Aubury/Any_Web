import _ from 'lodash';
import Cat from '../../img/cat.png';
import Moon from '../../img/moon.png';
import star from '../../img/star.png';


const obj = {
    slide    : document.createElement('div'),
    container: document.createElement('div'),
    Cat : new Image(),
    Moon: new Image()
}
// -------------------------------------------------------------
function addImage() {

    obj.Moon.src = Moon;
    obj.Moon.alt = 'Moon';
    obj.Moon.classList.add('moon');
    obj.container.appendChild( obj.Moon);
    // obj.Moon.style.left = (document.documentElement.clientWidth - (obj.Moon.width + 15)) + 'px';

    obj.Cat.src = Cat;
    obj.Cat.alt = 'Cat';
    obj.Cat.classList.add('cat');
    obj.container.appendChild( obj.Cat);


}
//-------------------------------------------------------------
function cloudsImg() {
    let div1 = document.createElement('div'),
        div2 = document.createElement('div'),
        div3 = document.createElement('div');


    div1.classList.add('cloud1','cloud');
    obj.container.appendChild(div1);

    div2.classList.add('cloud2', 'cloud');
    obj.container.appendChild(div2);

    div3.classList.add('cloud3', 'cloud');
    obj.container.appendChild(div3);
}
//-----------------------------------------------------------
function moveClouds() {
    const  massCloud = obj.container.querySelectorAll('.cloud');

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
//-------------------------------------------------------------
function changePositionStars() {
    let massStars = obj.container.querySelectorAll('.star'),
        top = Math.round(Math.random()*(50 - 10) + 10),
        left =  Math.round(Math.random()*(60 - 10) + 10);

     for(let i = 0; i < massStars.length; i++){
         let top = Math.round(Math.random()*(50 - 10) + 10),
             left =  Math.round(Math.random()*(60 - 10) + 10);
             massStars[i].style.top = top + '%';
             massStars[i].style.left = left + '%';
     }
}
//-------------------------------------------------------------
function positionStar(newStar) {

    let top = Math.round(Math.random()*(50 - 10) + 10),
        left =  Math.round(Math.random()*(60 - 10) + 10);

        newStar.style.top = top + '%';
        newStar.style.left = left + '%';
}
//-------------------------------------------------------------
function sizeStar() {
    return Math.round(Math.random()*(60 - 5) + 5);
}
//--------------------------------------------------------------
function stars() {

    let amount = 0;

    if(window.screen.width < 1000){
        amount = Math.random()*(7 - 5) + 5;
    }else {
        amount = Math.random()*(20 - 10) + 10;
    }

    for (let i = 0; i < Math.round(amount); i++){
        let Star = new Image();
         Star.src = star;
         Star.alt = 'star';
         Star.classList.add('star');
         Star.style.height = sizeStar() + 'px';
         positionStar(Star);
         obj.container.appendChild(Star);

    }
}


// --------------------------------------------------------------
function container() {
    const slid1 = obj.slide,
          container = obj.container;

    slid1.classList.add('slid', 'slid1', 'show', 'displayCenter');
    slid1.style.height = document.documentElement.clientHeight + 'px';
    slid1.id = 'Main';

    container.classList.add('mainDiv');
    slid1.appendChild(container);

    addImage();
    stars();
    cloudsImg();
    setInterval(changePositionStars, 20000);
    setInterval(moveClouds,0);
}

container();



export default obj.slide;