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
    myCardHeader.textContent = `Shift the overall look and feel
    by adding these wonderful touches to furniture in your home`;

    const myCardBody = document.createElement('div');
    myCardBody.classList.add('myCardBody');
    myCardBody.textContent = `Ever been in a room and felt like
    something was missing? Perhaps it felt slightly bare and uninviting.
    I've got some simple tips to help you make any room feel complete.`;

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('infoContainer');

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

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonContainer');
    const button = document.createElement('img');
    button.src = myImage5;
    button.classList.add('myButton');
    buttonContainer.append(button);

    infoContainer.append(userInfo);

    const shareContainer = document.createElement('div');
    shareContainer.classList.add('shareContainer');

    const share = document.createElement('p');
    share.textContent = 'share';
    share.classList.add('share');

    shareContainer.append(share);

    const shareIconContainer = document.createElement('div');
    shareIconContainer.classList.add('shareIconContainer');

    const facebookIcon = document.createElement('img');
    facebookIcon.src = myImage3;
    facebookIcon.classList.add('facebookIcon');
    shareIconContainer.append(facebookIcon);

    const twitterIcon = document.createElement('img');
    twitterIcon.src = myImage6;
    twitterIcon.classList.add('twitterIcon');
    shareIconContainer.append(twitterIcon);

    const pinterestIcon = document.createElement('img');
    pinterestIcon.src = myImage4;
    pinterestIcon.classList.add('pinterestIcon');
    shareIconContainer.append(pinterestIcon);

    shareContainer.append(shareIconContainer);

    const invertedShareContainer = document.createElement('div');
    invertedShareContainer.classList.add('invertedShareContainer');

    const shareContainerButton = document.createElement('img');
    shareContainerButton.src = myImage5;
    shareContainerButton.classList.add('shareContainerButton');
    invertedShareContainer.append(shareContainerButton);

    shareContainer.append(invertedShareContainer);

    userInfo.append(profilePic);
    userInfo.append(userData);
    userInfo.append(buttonContainer);
    
    infoContainer.append(shareContainer);

    userData.append(userName);
    userData.append(userDate);

    myCard.append(myCardHeader);
    myCard.append(myCardBody);
    myCard.append(infoContainer);

    myBody.append(myCard);
    

    return myBody;
}

document.body.append(component());