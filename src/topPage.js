import './style.css';
import image from './bg.jpg'
export const renderTopPage = () => {
    //get content el
    const contentElement = document.querySelector('.content');
    const createHeader = () => {
        const headerDiv = document.createElement('div');
        headerDiv.className = 'header';
        const headerEl = document.createElement('h1');
        headerEl.textContent = 'Scazz';
        headerDiv.appendChild(headerEl);
        const headerTwoEl = document.createElement('h2');
        headerTwoEl.textContent = 'An Experience...';
        headerDiv.appendChild(headerTwoEl);
        contentElement.appendChild(headerDiv);
    }
    //create nav
    const createNav = () => {
        const navEl = document.createElement('nav');
        const createButton = (id, content) => {
            const btn = document.createElement('button');
            btn.className = 'navButtons'
            btn.innerHTML = content;
            btn.setAttribute('id', id);
            navEl.appendChild(btn);
            return btn;
        }
        const homeBtn = createButton('home', 'Home');
        const menuBtn = createButton('menu', 'Menu');
        const galeryBtn = createButton('galery', 'Galery');
        const contactsBtn = createButton('contact', 'Contact us')
        contentElement.appendChild(navEl)
    }

    const getBackground = () => {
        const backgroundDiv = document.createElement('div');
        backgroundDiv.classList.add('background');
        contentElement.appendChild(backgroundDiv);
        const myIcon = new Image();
        myIcon.src = image;
        backgroundDiv.appendChild(myIcon);
    }

 
        getBackground()
        createHeader();
        createNav();
        const bodyContainer = document.createElement('div');
        bodyContainer.classList.add('body-container')
        contentElement.appendChild(bodyContainer);

    return(bodyContainer);
};

