import './style.css';
import myImage1 from './images/avatar-michelle.jpg';
import myImage2 from './images/drawers.jpg';
import myImage3 from './images/icon-facebook.svg';
import myImage4 from './images/icon-pinterest.svg';
import myImage5 from './images/icon-share.svg';
import myImage6 from './images/icon-twitter.svg'

function component() {
    const myBody = document.createElement('div');
    myBody.classList.add('myBody');
    
    const myHeaderDiv = document.createElement('div');
    myHeaderDiv.classList.add('myHeaderDiv');

    const myHeaderImg = new Image();
    myHeaderImg.src = myImage2;
    myHeaderImg.classList.add('myHeaderImg');

    myHeaderDiv.append(myHeaderImg);
    
    myBody.append(myHeaderDiv);

    const myCard = document.createElement('div');
    myCard.classList.add('myCard');

    const myCardHeader = document.createElement('div');
    myCardHeader.classList.add('myCardHeader');
    myCardHeader.textContent = `shift the overall look and feel
    by adding these wonderful touches to furniture in your home`;

    const myCardBody = document.createElement('div');
    myCardBody.classList.add('myCardBody');
    myCardBody.textContent = `Ever been in a room and felt like
    something was missing? Perhaps it felt slightly bare and uninviting.
    I've got some simple tips to help you make any room feel complete.`;

    const userInfo = document.createElement('div');
    userInfo.classList.add('userInfo');

    const profilePic = document.createElement('img');
    profilePic.src = myImage1;
    profilePic.classList.add('profilePic')

    const userData = document.createElement('div');
    userData.classList.add('userData');

    const userName = document.createElement('p');
    userName.classList.add('userName');
    userName.textContent = 'Michelle Appleton';

    const userDate = document.createElement('p');
    userDate.classList.add('userDate');
    userDate.textContent = '28 Jun 2020';

    const button = document.createElement('img');
    button.src = myImage5;
    button.classList.add('myButton');

    userInfo.append(profilePic);
    userInfo.append(userData);
    userInfo.append(button);

    userData.append(userName);
    userData.append(userDate);

    myCard.append(myCardHeader);
    myCard.append(myCardBody);
    myCard.append(userInfo);

    myBody.append(myCard);

    return myBody;
}

document.body.append(component());