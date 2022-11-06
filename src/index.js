import {
    renderTopPage
} from './topPage';
import {
    createHomePage
} from './homePage';
import background from './bg.jpg';
const bodyContainer = renderTopPage(background);
createHomePage(bodyContainer);