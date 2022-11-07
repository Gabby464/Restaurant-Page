import {
    renderTopPage
} from './topPage';
import {
    createHomePage
} from './homePage';
import background from './bg.jpg';
import Item from './menuPage';
import {menuCreator} from './menuPage';
import image1 from './slideshow/1.jpg';
import image2 from './slideshow/2.jpg';
import image3 from './slideshow/3.jpg';
import image4 from './slideshow/4.jpg';
export const images = [image1, image2, image3, image4]
// require.context('./slideshow', true, /.jpg$/);
const bodyContainer = renderTopPage(background);
createHomePage(bodyContainer);

function listeners (){
    const menuBtn = document.getElementById('menu');
    const homeBtn = document.getElementById('home');
    const galleryBtn = document.getElementById('gallery');

    menuBtn.addEventListener('click', function () {menuCreator(bodyContainer)});
    homeBtn.addEventListener('click', function () {createHomePage(bodyContainer)});
}
listeners();