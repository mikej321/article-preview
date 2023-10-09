function fadeOut(event) {
    let tarElement = event.target
    if (tarElement.classList.contains('buttonContainer')) {
            tarElement.parentElement.classList.add('fadeOut');
            tarElement.parentElement.nextSibling.classList.add('fadeIn');
        
    }

    if (tarElement.classList.contains('myButton')) {
        tarElement.parentElement.parentElement.classList.add('fadeOut');
        tarElement.parentElement.parentElement.nextSibling.classList.add('fadeIn');
    }

    if (tarElement.classList.contains('shareContainerButton') || tarElement.classList.contains('share')) {
        tarElement.parentElement.parentElement.classList.remove('fadeIn');
        tarElement.parentElement.parentElement.parentElement.firstChild.classList.remove('fadeOut');
    }

    if (tarElement.classList.contains('invertedShareContainer') || tarElement.classList.contains('share')) {
        tarElement.parentElement.classList.remove('fadeIn');
        tarElement.parentElement.parentElement.firstChild.classList.remove('fadeOut');
    }
}

export { fadeOut };