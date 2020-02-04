import _ from 'lodash';
import Temp_1 from '../../img/template_1-min.png';
import Temp_2 from '../../img/template_2-min.png';
import Temp_3 from '../../img/template_3-min.png';
import Temp_4 from '../../img/template_4-min.png';
import Temp_5 from '../../img/template_5-min.png';
import Temp_6 from '../../img/template_6-min.png';
import Temp_7 from '../../img/template_7-min.png';
import Temp_8 from '../../img/template_8-min.png';

const obj = {
    slide : document.createElement('div'),
    main  : document.createElement('div'),
    massImages : [],

}
// --------------------------------------------------------------------
function Images() {
    let temp_1 = new Image();
        temp_1.src = Temp_1;
        temp_1.alt = 'Template';
        obj.massImages.push(temp_1);

    let temp_2 = new Image();
        temp_2.src = Temp_2;
        temp_2.alt = 'Template';
        obj.massImages.push(temp_2);

    let temp_3 = new Image();
        temp_3.src = Temp_3;
        temp_3.alt = 'Template';
        obj.massImages.push(temp_3);

    let temp_4 = new Image();
        temp_4.src = Temp_4;
        temp_4.alt = 'Template';
        obj.massImages.push(temp_4);

    let temp_5 = new Image();
        temp_5.src = Temp_5;
        temp_5.alt = 'Template';
        obj.massImages.push(temp_5);

    let temp_6 = new Image();
        temp_6.src = Temp_6;
        temp_6.alt = 'Template';
        obj.massImages.push(temp_6);

    let temp_7 = new Image();
        temp_7.src = Temp_7;
        temp_7.alt = 'Template';
        obj.massImages.push(temp_7);

    let temp_8 = new Image();
        temp_8.src = Temp_8;
        temp_8.alt = 'Template';
        obj.massImages.push(temp_8);

    let temp_9 = new Image();
        temp_9.src = Temp_1;
        temp_9.alt = 'Template';
        obj.massImages.push(temp_9);
}
// --------------------------------------------------------
// function resizeImage(e) {
//
//     if( document.innerWidth < 1000){
//         this.classList.contains('resize')? this.classList.remove('resize')
//                                          :this.classList.add('resize');
//     }else {
//         this.removeEventListener('click',resizeImage);
//     }
//
// }
// -------------------------------------------------------
function templates() {

    for (let i = 0; i < 9; i++){
        let div = document.createElement('div');
            div.classList.add('template');
            div.style.backgroundImage = `url("${obj.massImages[i].src}")`;
            obj.main.appendChild(div);

            // div.addEventListener('click',resizeImage);
    }

}

// -------------------------------------------------------
function container() {
    const container = obj.slide,
          main = obj.main,
          name = document.createElement('h2');


    container.classList.add('slid', 'slid4');
    container.style.height = document.documentElement.clientHeight + 'px';
    container.id = 'Templates';

    name.innerHTML = 'PSD шаблоны';
    container.appendChild(name);

    main.classList.add('main');
    container.appendChild(main);
    Images();
    templates();
}
container();

export default obj.slide;
