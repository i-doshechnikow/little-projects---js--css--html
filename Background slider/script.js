const body = document.querySelector('body');
const rightButton = document.querySelector('.right-arrow')
const leftButton = document.querySelector('.left-arrow')

const photos = document.querySelectorAll('.slide');

let photoPointer = 0;

const changeImage = () => {
    photos.forEach((element, ind) => {
        if (ind === photoPointer) {
            element.classList.add('active')
            body.style.backgroundImage = element.style.backgroundImage
        } else {
            element.classList.remove('active')
        }
    })
}

rightButton.addEventListener('click', (event) => {
    photoPointer++;
    if (photoPointer === photos.length) {
        photoPointer = 0;
    }
    changeImage(photoPointer);
})

leftButton.addEventListener('click', (event) => {
    photoPointer--;
    if (photoPointer < 0) {
        photoPointer = photos.length - 1;
    }
    changeImage(photoPointer);
})