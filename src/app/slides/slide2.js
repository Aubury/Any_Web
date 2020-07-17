import _ from 'lodash';
// import CatWeOffer from '../../img/catWeOfffer.png';
// import MoonWeOffer from '../../img/moonWeOffer.png';
// import Sun from '../../img/sun.png';
// import BackgroundHome from '../../img/backGround-min.png';
// import Grass from '../../img/grass.png';
// import Circle from '../../img/circle.png';
// import svgJSON from '../../json/svg.json';

const slid2 = document.createElement('div');

slid2.classList.add('slid', 'slid2');
slid2.style.height = document.documentElement.clientHeight + 'px';
slid2.id = 'We suppose';

// create elements for slide We offer ================================================

// const createElementsSlidWeOffer = {
//     titleWeOffer : document.createElement('h2'),
//     textTitleWeOffer : document.createTextNode('Мы предлагаем'),
//
//     blockSVGWeOffer : document.createElement('div'),
//     modalWindowInternetShop : document.createElement('div'),
//     modalWindowSiteCompany : document.createElement('div'),
//     modalWindowBlog : document.createElement('div'),
//     modalWindowPortfolio : document.createElement('div'),
//     modalWindowSocialNetwork : document.createElement('div'),
//     modalWindowForum : document.createElement('div'),
//     modalWindowLanding : document.createElement('div'),
//     modalWindowGameSours : document.createElement('div'),
//
//     containerModalInternetShop : document.createElement('div'),
//     containerModalSiteCompany : document.createElement('div'),
//     containerModalBlog : document.createElement('div'),
//     containerModalPortfolio : document.createElement('div'),
//     containerModalSocialNetwork : document.createElement('div'),
//     containerModalForum : document.createElement('div'),
//     containerModalLanding : document.createElement('div'),
//     containerModalGameSours : document.createElement('div'),
//
//     blockTextModalInternetShop : document.createElement('p'),
//     blockTextModalSiteCompany : document.createElement('p'),
//     blockTextModalBlog : document.createElement('p'),
//     blockTextModalPortfolio : document.createElement('p'),
//     blockTextModalSocialNetwork : document.createElement('p'),
//     blockTextModalForum : document.createElement('p'),
//     blockTextModalLanding : document.createElement('p'),
//     blockTextModalGameSours : document.createElement('p'),
//
//     buttonModalInternetShop : document.createElement('button'),
//     buttonModalSiteCompany : document.createElement('button'),
//     buttonModalBlog : document.createElement('button'),
//     buttonModalPortfolio : document.createElement('button'),
//     buttonModalSocialNetwork : document.createElement('button'),
//     buttonModalForum : document.createElement('button'),
//     buttonModalLanding : document.createElement('button'),
//     buttonModalGameSours : document.createElement('button'),
//
//     CatWeOffer : new Image(),
//     MoonWeOffer : new Image(),
//     Sun : new Image(),
//     BackgroundHome : new Image(),
//     Grass : new Image(),
// }
//
// // ===================================================================
//
//
//
// // text for modal windows ===========================================
//
// const createTextForModalWindows = {
//     textModalInternetShop : document.createTextNode('Здесь слова излишни. Желаете продать? Поможем!'),
//     textModalSiteCompany : document.createTextNode('У Вас есть фирма но знаете о ней только вы и сосед? Сделайте сайт - это шаг во всемирную паутину!'),
//     textModalBlog : document.createTextNode('В душе Вы блогер и хотите иметь кучу подписчиков и отвечать на их коментарии? Это не сложно!'),
//     textModalPortfolio : document.createTextNode('Вам надоело расказывать о себе. Или вы хотите чтобы о вас знали все - Портфолио, теперь все ваши достижения собраны в одном месте'),
//     textModalSocialNetwork : document.createTextNode('Портрет самого Марка висит у вас в спальне, его лозунги у вас на заставке? Тогда вперед! Социальная сеть строит себя сама!'),
//     textModalForum : document.createTextNode('Ваша цель помочь людям и сделать это мир чем-то лучше? Форум самое то! Вопросы и ответы сами найдутся - Вы есть "Супер модератор"!'),
//     textModalLanding : document.createTextNode('Ваши клиенты восновном любят ленту? Без проблем - лендинг, нет ограничений по длинне'),
//     textModalGameSours : document.createTextNode('Вы придумали неккий интерактив для развлечения офисного планктона или просто любиделей интернет серфинга. Вам необходим сайт с кучей условий и функций для воплощения этого в жизнь? Да не проблема)'),
//
//     // textButtonInternetShop : document.createTextNode('⨯'),
//     // textButtonSiteCompany : document.createTextNode('⨯'),
//     // textButtonBlog : document.createTextNode('⨯'),
//     // textButtonPortfolio : document.createTextNode('⨯'),
//     // textButtonSocialNetwork : document.createTextNode('⨯'),
//     // textButtonForum : document.createTextNode('⨯'),
//     // textButtonLanding : document.createTextNode('⨯'),
//     // textButtonGameSours : document.createTextNode('⨯'),
//     // textButton : document.createTextNode('⨯'),
//
// }
//
// // ==================================================================
//
//
//
// // img slide =======================================================
//
// function imagesSlidWeOffer() {
//     createElementsSlidWeOffer.CatWeOffer.src = CatWeOffer;
//     createElementsSlidWeOffer.CatWeOffer.alt = 'catWeOffer';
//     createElementsSlidWeOffer.CatWeOffer.classList.add('catWeOfffer');
//     slid2.appendChild(createElementsSlidWeOffer.CatWeOffer);
//
//     createElementsSlidWeOffer.MoonWeOffer.src = MoonWeOffer;
//     createElementsSlidWeOffer.MoonWeOffer.alt = 'moon';
//     createElementsSlidWeOffer.MoonWeOffer.classList.add('moonWeOfffer');
//     slid2.appendChild(createElementsSlidWeOffer.MoonWeOffer);
//
//     createElementsSlidWeOffer.Sun.src = Sun;
//     createElementsSlidWeOffer.Sun.alt = 'Sun';
//     createElementsSlidWeOffer.Sun.classList.add('sunWeOfffer');
//     slid2.appendChild(createElementsSlidWeOffer.Sun);
//
//     createElementsSlidWeOffer.BackgroundHome.src = BackgroundHome;
//     createElementsSlidWeOffer.BackgroundHome.alt = 'BackgroundHome';
//     createElementsSlidWeOffer.BackgroundHome.classList.add('homeWeOfffer');
//     slid2.appendChild(createElementsSlidWeOffer.BackgroundHome);
//
//     createElementsSlidWeOffer.Grass.src = Grass;
//     createElementsSlidWeOffer.Grass.alt = 'Grass';
//     createElementsSlidWeOffer.Grass.classList.add('grassWeOfffer');
//     slid2.appendChild(createElementsSlidWeOffer.Grass);
// }
//
// // ==================================================================
//
//
//
// // function for create page ===========================================
//
// function buildPage() {
//     //create title
//     createElementsSlidWeOffer.titleWeOffer.classList.add('titleWeOffer');
//     createElementsSlidWeOffer.titleWeOffer.appendChild(createElementsSlidWeOffer.textTitleWeOffer);
//     slid2.appendChild(createElementsSlidWeOffer.titleWeOffer);
//
//     // create svg
//     createElementsSlidWeOffer.blockSVGWeOffer.classList.add('blockSVG');
//     slid2.appendChild(createElementsSlidWeOffer.blockSVGWeOffer);
//
//     // create modal window for internet shop
//     createElementsSlidWeOffer.modalWindowInternetShop.classList.add('modalWeOfffer', 'internetShop');
//     createElementsSlidWeOffer.containerModalInternetShop.classList.add('containerWeOfffer');
//     createElementsSlidWeOffer.buttonModalInternetShop.classList.add('internetShopButton');
//     // createElementsSlidWeOffer.buttonModalInternetShop.appendChild(createTextForModalWindows.textButtonInternetShop);
//     createElementsSlidWeOffer.containerModalInternetShop.appendChild(createElementsSlidWeOffer.blockTextModalInternetShop);
//     createElementsSlidWeOffer.containerModalInternetShop.appendChild(createElementsSlidWeOffer.buttonModalInternetShop);
//     createElementsSlidWeOffer.blockTextModalInternetShop.appendChild(createTextForModalWindows.textModalInternetShop);
//     createElementsSlidWeOffer.modalWindowInternetShop.appendChild(createElementsSlidWeOffer.containerModalInternetShop);
//     slid2.appendChild(createElementsSlidWeOffer.modalWindowInternetShop);
//
//     // create modal window for site company
//     createElementsSlidWeOffer.modalWindowSiteCompany.classList.add('modalWeOfffer', 'siteCompany');
//     createElementsSlidWeOffer.containerModalSiteCompany.classList.add('containerWeOfffer');
//     createElementsSlidWeOffer.buttonModalSiteCompany.classList.add('siteCompanyButton');
//     // createElementsSlidWeOffer.buttonModalSiteCompany.appendChild(createTextForModalWindows.textButtonSiteCompany);
//     createElementsSlidWeOffer.containerModalSiteCompany.appendChild(createElementsSlidWeOffer.blockTextModalSiteCompany);
//     createElementsSlidWeOffer.containerModalSiteCompany.appendChild(createElementsSlidWeOffer.buttonModalSiteCompany);
//     createElementsSlidWeOffer.blockTextModalSiteCompany.appendChild(createTextForModalWindows.textModalSiteCompany);
//     createElementsSlidWeOffer.modalWindowSiteCompany.appendChild(createElementsSlidWeOffer.containerModalSiteCompany);
//     slid2.appendChild(createElementsSlidWeOffer.modalWindowSiteCompany);
//
//     // create modal window for Blog
//     createElementsSlidWeOffer.modalWindowBlog.classList.add('modalWeOfffer', 'blog');
//     createElementsSlidWeOffer.containerModalBlog.classList.add('containerWeOfffer');
//     createElementsSlidWeOffer.buttonModalBlog.classList.add('blogButton');
//     // createElementsSlidWeOffer.buttonModalBlog.appendChild(createTextForModalWindows.textButtonBlog);
//     createElementsSlidWeOffer.containerModalBlog.appendChild(createElementsSlidWeOffer.blockTextModalBlog);
//     createElementsSlidWeOffer.containerModalBlog.appendChild(createElementsSlidWeOffer.buttonModalBlog);
//     createElementsSlidWeOffer.blockTextModalBlog.appendChild(createTextForModalWindows.textModalBlog);
//     createElementsSlidWeOffer.modalWindowBlog.appendChild(createElementsSlidWeOffer.containerModalBlog);
//     slid2.appendChild(createElementsSlidWeOffer.modalWindowBlog);
//
//     // create modal window for Portfolio
//     createElementsSlidWeOffer.modalWindowPortfolio.classList.add('modalWeOfffer', 'portfolio');
//     createElementsSlidWeOffer.containerModalPortfolio.classList.add('containerWeOfffer');
//     createElementsSlidWeOffer.buttonModalPortfolio.classList.add('portfolioButton');
//     // createElementsSlidWeOffer.buttonModalPortfolio.appendChild(createTextForModalWindows.textButtonPortfolio);
//     createElementsSlidWeOffer.containerModalPortfolio.appendChild(createElementsSlidWeOffer.blockTextModalPortfolio);
//     createElementsSlidWeOffer.containerModalPortfolio.appendChild(createElementsSlidWeOffer.buttonModalPortfolio);
//     createElementsSlidWeOffer.blockTextModalPortfolio.appendChild(createTextForModalWindows.textModalPortfolio);
//     createElementsSlidWeOffer.modalWindowPortfolio.appendChild(createElementsSlidWeOffer.containerModalPortfolio);
//     slid2.appendChild(createElementsSlidWeOffer.modalWindowPortfolio);
//
//     // create modal window for Social Network
//     createElementsSlidWeOffer.modalWindowSocialNetwork.classList.add('modalWeOfffer', 'socialNetwork');
//     createElementsSlidWeOffer.containerModalSocialNetwork.classList.add('containerWeOfffer');
//     createElementsSlidWeOffer.buttonModalSocialNetwork.classList.add('socialNetworkButton');
//     // createElementsSlidWeOffer.buttonModalSocialNetwork.appendChild(createTextForModalWindows.textButtonSocialNetwork);
//     createElementsSlidWeOffer.containerModalSocialNetwork.appendChild(createElementsSlidWeOffer.blockTextModalSocialNetwork);
//     createElementsSlidWeOffer.containerModalSocialNetwork.appendChild(createElementsSlidWeOffer.buttonModalSocialNetwork);
//     createElementsSlidWeOffer.blockTextModalSocialNetwork.appendChild(createTextForModalWindows.textModalSocialNetwork);
//     createElementsSlidWeOffer.modalWindowSocialNetwork.appendChild(createElementsSlidWeOffer.containerModalSocialNetwork);
//     slid2.appendChild(createElementsSlidWeOffer.modalWindowSocialNetwork);
//
//     // create modal window for Forum
//     createElementsSlidWeOffer.modalWindowForum.classList.add('modalWeOfffer', 'forum');
//     createElementsSlidWeOffer.containerModalForum.classList.add('containerWeOfffer');
//     createElementsSlidWeOffer.buttonModalForum.classList.add('forumButton');
//     // createElementsSlidWeOffer.buttonModalForum.appendChild(createTextForModalWindows.textButtonForum);
//     createElementsSlidWeOffer.containerModalForum.appendChild(createElementsSlidWeOffer.blockTextModalForum);
//     createElementsSlidWeOffer.containerModalForum.appendChild(createElementsSlidWeOffer.buttonModalForum);
//     createElementsSlidWeOffer.blockTextModalForum.appendChild(createTextForModalWindows.textModalForum);
//     createElementsSlidWeOffer.modalWindowForum.appendChild(createElementsSlidWeOffer.containerModalForum);
//     slid2.appendChild(createElementsSlidWeOffer.modalWindowForum);
//
//     // create modal window for Landing
//     createElementsSlidWeOffer.modalWindowLanding.classList.add('modalWeOfffer', 'landing');
//     createElementsSlidWeOffer.containerModalLanding.classList.add('containerWeOfffer');
//     createElementsSlidWeOffer.buttonModalLanding.classList.add('landingButton');
//     // createElementsSlidWeOffer.buttonModalLanding.appendChild(createTextForModalWindows.textButtonLanding);
//     createElementsSlidWeOffer.containerModalLanding.appendChild(createElementsSlidWeOffer.blockTextModalLanding);
//     createElementsSlidWeOffer.containerModalLanding.appendChild(createElementsSlidWeOffer.buttonModalLanding);
//     createElementsSlidWeOffer.blockTextModalLanding.appendChild(createTextForModalWindows.textModalLanding);
//     createElementsSlidWeOffer.modalWindowLanding.appendChild(createElementsSlidWeOffer.containerModalLanding);
//     slid2.appendChild(createElementsSlidWeOffer.modalWindowLanding);
//
//     // create modal window for Game Sours
//     createElementsSlidWeOffer.modalWindowGameSours.classList.add('modalWeOfffer', 'gameSours');
//     createElementsSlidWeOffer.containerModalGameSours.classList.add('containerWeOfffer');
//     createElementsSlidWeOffer.buttonModalGameSours.classList.add('gameSoursButton');
//     // createElementsSlidWeOffer.buttonModalGameSours.appendChild(createTextForModalWindows.textButtonGameSours);
//     createElementsSlidWeOffer.containerModalGameSours.appendChild(createElementsSlidWeOffer.blockTextModalGameSours);
//     createElementsSlidWeOffer.containerModalGameSours.appendChild(createElementsSlidWeOffer.buttonModalGameSours);
//     createElementsSlidWeOffer.blockTextModalGameSours.appendChild(createTextForModalWindows.textModalGameSours);
//     createElementsSlidWeOffer.modalWindowGameSours.appendChild(createElementsSlidWeOffer.containerModalGameSours);
//     slid2.appendChild(createElementsSlidWeOffer.modalWindowGameSours);
// }
//
// // ==================================================================
//
//
// imagesSlidWeOffer();
// buildPage();
//
//
// const variables = {
//     counterDivs : 0,
//     counter : 0,
//     classRedStars : '.starRed',
//     classYellowStars : '.starYellow',
//     classBlueStars : '.starBlue',
//     bgcColorRedStar : '#FA8072',
//     bgcColorYellowStar : 'yellow',
//     bgcColorBlueStar : '#00FFFF',
//     r1color : 4,
//     r2color : 14,
//     r3color : 114,
//     r4color : 66,
//     r5color : 106,
//     r6color : 224,
//     linkSvgDataJSON: '/svg.json',
//     arrSvgElements : ['textSiteCompany', 'textSocialNetwork', 'textForum', 'textGameSours', 'textBlog', 'textLanding', 'textPortfolio', 'textInternetShop'],
//     modalWindows : ['.siteCompany', '.socialNetwork', '.forum', '.gameSours', '.blog', '.landing', '.portfolio', '.internetShop'],
//     closeModalWindows : ['siteCompanyButton', 'socialNetworkButton', 'forumButton', 'gameSoursButton', 'blogButton', 'landingButton', 'portfolioButton', 'internetShopButton'],
//     paramsScreen : [300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1150, 1300, 1450, 1600, 1950, 2600],
// }
//
//
//
// // position for <text> in svg and animation circle ==========================
//
// const fnwh = function heigthWidth(data){
//     if(window.innerHeight < 450){
//         createElementsSlidWeOffer.blockSVGWeOffer.innerHTML = data.h450;
//     }else{
//         for(let i = 0; i <= variables.paramsScreen.length; i++){
//             if(window.innerWidth < variables.paramsScreen[i]){
//                 createElementsSlidWeOffer.blockSVGWeOffer.innerHTML = data[variables.paramsScreen[i]];
//                 break;
//             }
//         }
//     }
// }
// fnwh(svgJSON);
//
//
// const sizeWindow = window.addEventListener('resize', () => { fnwh(svgJSON) });
//
// // ===========================================================================
//
//
//
// // function for stars ========================================================
//
// const createDiv = setInterval(() =>{
//     let div = document.createElement('div');
//     variables.counterDivs < 33 ? div.classList.add('starRed') : '';
//     (variables.counterDivs > 33 && variables.counterDivs < 66) ? div.classList.add('starYellow') : '';
//     variables.counterDivs > 66 ? div.classList.add('starBlue') : '';
//     slid2.appendChild(div);
//     variables.counterDivs++;
//     variables.counterDivs === 100 ? clearInterval(createDiv) : '';
// }, 0.01);
//
//
// const coordinatesAndColorStars = function stars(color, htmlClass){
//     let askDiv = document.querySelectorAll(htmlClass);
//     askDiv.forEach((item) => {
//         item.style.top = Math.floor(Math.random() * Math.floor(80)) + '%';
//         item.style.left = Math.floor(Math.random() * Math.floor(98)) + '%';
//         item.style.backgroundColor = color;
//     });
// }
//
//
// const callFunctionStars = setInterval(() => {
//     variables.counter ++;
//     variables.counter === 3 ? variables.counter = 0 : '';
//     variables.counter === 0 ? coordinatesAndColorStars(variables.bgcColorYellowStar, variables.classYellowStars) : '';
//     variables.counter === 1 ? coordinatesAndColorStars(variables.bgcColorRedStar, variables.classRedStars) : '';
//     variables.counter === 2 ? coordinatesAndColorStars(variables.bgcColorBlueStar, variables.classBlueStars) : '';
// }, 3000);
//
// // ==========================================================================
//
//
//
// // functions for modal windows ==============================================
//
// const openModal = function openModalWindow(classModal){
//     let someModal = document.querySelector(variables.modalWindows[classModal]);
//
//     createElementsSlidWeOffer.blockSVGWeOffer.style.left = 100 + '%';
//     createElementsSlidWeOffer.MoonWeOffer.style.right = -35 + '%';
//     createElementsSlidWeOffer.Sun.style.opacity = 1;
//     someModal.style.opacity = 1;
//
//     setTimeout(() => {
//         bgcColorModWin('day');
//         createElementsSlidWeOffer.blockSVGWeOffer.style.opacity = 0;
//         createElementsSlidWeOffer.MoonWeOffer.style.opacity = 0;
//         createElementsSlidWeOffer.MoonWeOffer.style.right = 100 + '%';
//         createElementsSlidWeOffer.blockSVGWeOffer.style.left = -100 + '%';
//         someModal.style.left = 0 + '%';
//         createElementsSlidWeOffer.Sun.style.right = 0 + '%';
//         variables.bgcColorRedStar = 'transparent';
//         variables.bgcColorBlueStar = 'transparent';
//         variables.bgcColorYellowStar = 'transparent';
//     }, 1000);
// }
//
//
// const closeModal = function closeModalWindow(classModal){
//     let someModal = document.querySelector(variables.modalWindows[classModal]);
//
//     someModal.style.left = 100 + '%';
//     createElementsSlidWeOffer.Sun.style.right = -35 + '%';
//     createElementsSlidWeOffer.MoonWeOffer.style.opacity = 1;
//     createElementsSlidWeOffer.blockSVGWeOffer.style.opacity = 1;
//
//     setTimeout(() => {
//         bgcColorModWin('night');
//         someModal.style.opacity = 0;
//         createElementsSlidWeOffer.Sun.style.opacity = 0;
//         createElementsSlidWeOffer.Sun.style.right = 100 + '%';
//         someModal.style.left = -100 + '%';
//         createElementsSlidWeOffer.blockSVGWeOffer.style.left = 0 + '%';
//         createElementsSlidWeOffer.MoonWeOffer.style.right = 0 + '%';
//         variables.bgcColorRedStar = '#FA8072';
//         variables.bgcColorBlueStar = '#00FFFF';
//         variables.bgcColorYellowStar = 'yellow';
//     }, 1000);
// }
//
// // bgc nigth or day
// const bgcColorModWin = function backgroundColorModalWindows(paramsBgcol){
//     paramsBgcol === 'day' ? slid2.style.backgroundPositionY = 100 + '%' : slid2.style.backgroundPositionY = 0 + '%';
// }
//
//
// slid2.addEventListener('click', (event) => {
//     if(event.target.closest('div.blockSVG')){
//         variables.arrSvgElements.forEach((item, index) => {
//             item === event.target.className.baseVal ? openModal(index) : '';
//         });
//     }
//     if(event.target.closest('div')){
//         variables.closeModalWindows.forEach((item, index) => {
//             item === event.target.className ? closeModal(index) : '';
//         });
//     }
// });
//
// // =========================================================================


export default slid2;