import './style.css';
import myImage1 from './images/avatar-michelle.jpg';
import myImage2 from './images/drawers.jpg';
import myImage3 from './images/icon-facebook.svg';
import myImage4 from './images/icon-pinterest.svg';
import myImage5 from './images/icon-share.svg';
import myImage6 from './images/icon-twitter.svg'

function component() {
    const element = document.createElement('div');
    element.classList.add('myElement');
    

    return element;
}

document.body.append(component());