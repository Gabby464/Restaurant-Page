import {
    renderTopPage
} from './topPage';
import {
    createHomePage
} from './homePage';
import background from './bg.jpg';
import Item from './menuPage';
import {menuCreator} from './menuPage'
const bodyContainer = renderTopPage(background);
createHomePage(bodyContainer);

function listeners (){
    const menuBtn = document.getElementById('menu');
    const homeBtn = document.getElementById('home');

    menuBtn.addEventListener('click', function () {menuCreator(bodyContainer)});
    homeBtn.addEventListener('click', function () {createHomePage(bodyContainer)});
}
listeners();