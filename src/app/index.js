import _ from 'lodash';
import '../css/style.css';
import slid1 from "./slides/slide1";
import slid2 from "./slides/slide2";
import slid3 from "./slides/slide3";
import slid4 from "./slides/slide4";

const obj = {
    scrollPos : 0,
    massSlider: []
}

function sliderContainer(){

    const cont = document.createElement('div');

    cont.classList.add('container');
    cont.appendChild(slid4);
    cont.appendChild(slid3);
    cont.appendChild(slid2);
    cont.appendChild(slid1);

    document.body.appendChild(cont);
}
function changeSliderUP(ev) {

    let item = ev.target;

    if(item.classList.contains('show')){
        if(item.nextElementSibling){
            item.classList.remove('show', 'up');
            item.nextElementSibling.classList.remove('down');
            // item.nextElementSibling.classList.add('up');
            item.nextElementSibling.classList.add('show', 'up');
        }

    }


}
function changeSliderDOWN(ev) {

    let item = ev.target;

    if(item.classList.contains('show')){
        if(item.previousElementSibling){
            item.classList.remove('show', 'up');
            item.classList.add('down');
            setTimeout(()=>{
                item.previousElementSibling.classList.add('show');
            },2000);


        }

    }

}
window.onwheel = function(e) {
    e = e || window.event;

    // wheelDelta не даёт возможность узнать количество пикселей
    let delta = e.deltaY || e.detail || e.wheelDelta;
        // massSlider = document.querySelectorAll('.slid');

    delta > 0 ? changeSliderUP(e) : changeSliderDOWN(e);

};
sliderContainer();

