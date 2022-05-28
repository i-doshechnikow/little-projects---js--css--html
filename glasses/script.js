const smallCups = document.querySelectorAll('.cup-small')
const liters = document.querySelector('#liters')
const percentage = document.querySelector('#percentage')
const remained = document.querySelector('#reamined')

const cupsToggle = (index) => {
    if (smallCups[index].classList.contains('full')) {
        for (let i = index; i < smallCups.length; i++) {
            smallCups[i].classList.remove('full')
        }
        return;
    }

    for (let i = 0; i < index + 1; i++) {
        let el = smallCups[i];
        el.classList.add('full');
    }
}

smallCups.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        cupsToggle(index)
    })
})
