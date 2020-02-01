import _ from 'lodash';
import Cat from '../../img/cat.png';
import Moon from '../../img/Moon.png';
import star from '../../img/star.png';
import  Comment from '../../img/commentText.png';
import snail from '../../img/grassSnail.png';

const obj = {
    slide    : document.createElement('div'),
    main     : document.createElement('div'),
    topBlock : document.createElement('div'),
    bottomBlock :document.createElement('div'),
    blockCat : document.createElement('div'),
    blockMoon: document.createElement('div'),
    cat      : document.createElement('div'),
    comm     : document.createElement('div'),
    wordsBlock: document.createElement('div'),
    inblWords : document.createElement('div'),
    left : 30,
    Cat  : new Image(),
    Moon : new Image(),
    Comment : new Image(),
    Snail : new Image()
}
// -------------------------------------------------------------
function addImage() {

    obj.Moon.src = Moon;
    obj.Moon.alt = 'Moon';
    obj.Moon.classList.add('moon');
    obj.blockMoon.appendChild(obj.Moon);

    obj.Cat.src = Cat;
    obj.Cat.alt = 'Cat';
    obj.cat.appendChild(obj.Cat);

    obj.Comment.src = Comment;
    obj.Comment.alt = 'Comment';
    obj.comm.appendChild(obj.Comment);

    obj.Snail.src = snail;
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
            el.style.left = (el.offsetLeft + 50) + 'px';
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
         Star.src = star;
         Star.alt = 'star';
         Star.classList.add('star');
         Star.style.height = sizeStar() + 'px';
         positionStar(Star);
         obj.main.appendChild(Star);

    }
}
//-------------------------------------------------------------
// function createSpan(value) {
//     let span = document.createElement('span');
//     span.innerHTML =  value;
//     obj.inblWords.appendChild(span);
//     span.classList.add('moveW')
//     setTimeout(()=>{span.remove();},6000);
// }
//--------------------------------------------------------------
// function words() {
//     let massWords = ['&lt;b>', '&lt;h1>', '&lt;div>', '&lt;p>'],
//         div = obj.inblWords,
        // left = 0,
        // p = document.createElement('p'),
        // index = Math.floor(Math.random() * massWords.length),
        // len = Math.floor(Math.random() * (5 - 2) + 2),
        // num = Math.floor(Math.random() * (135 - 60) + 60);

        // num < 90 ? left = Math.floor(Math.random() * (90 - 45) + 45):
        //            left = Math.floor(Math.random() * (125 - 90) + 90);
       // document.documentElement.style.setProperty('--left', `${num}%`);
       // document.documentElement.style.setProperty('--num', `${num}deg`);


           // for (let i = 0; i < len; i++) {
               // createSpan(massWords[index]);
               // let span = document.createElement('span');
               //     span.innerHTML = `${massWords[index]}`;
               //    div.appendChild(span);
                   // span.style.left = num + '%';
                   // span.style.marginTop = '-50px';

                   // span.classList.add('moveW');

               // setTimeout(()=>{span.remove();},6000);

           // }

    // span.style.transform = `rotate(${num}deg)`;

// }

// --------------------------------------------------------------
function container() {
    const slid1 = obj.slide,
          main  = obj.main,
          topBl = obj.topBlock,
          bttmBl = obj.bottomBlock,
          blockCat = obj.blockCat,
          blockMoon = obj.blockMoon,
          blockWords = obj.wordsBlock,
          inblW = obj.inblWords,
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

    blockWords.classList.add('wordsBlock');
    blockWords.appendChild(inblW);
    bttmBl.appendChild(blockWords);

    addImage();
    stars();
    cloudsImg();
    setInterval(changePositionStars, 20000);
    setInterval(moveClouds,0);
    setInterval(moveMoon,10000);
    setInterval(moveMoon,10000);
    // setInterval(words, 10000);

}

container();
export default obj.slide;