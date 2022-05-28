const smallCups = document.querySelectorAll('.cup-small')
const liters = document.querySelector('#liters')
const percentage = document.querySelector('#percentage')
const remained = document.querySelector('#remained')

let currentCupsQuantity = 0;
let total = 0;

const cupsToggle = (index) => {
    if (smallCups[index].classList.contains('full')) {
        for (let i = index; i < smallCups.length; i++) {
            smallCups[i].classList.remove('full')
        }
        currentCupsQuantity = index;
        return;
    }

    for (let i = 0; i < index + 1; i++) {
        let el = smallCups[i];
        el.classList.add('full');
    }
    currentCupsQuantity = index + 1
}

const updateBigCup = () => {
    if (currentCupsQuantity === smallCups.length) {
        remained.style.visibility = 'hidden'
        remained.style.height = '0px'
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = smallCups.length - currentCupsQuantity;
    }

    if (currentCupsQuantity === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        total = currentCupsQuantity / smallCups.length * 100;
        percentage.style.visibility = 'visible'
        percentage.style.height = `${total}%`
        percentage.innerText = `${total}%`
    }


}

smallCups.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        cupsToggle(index)
        updateBigCup()
    })
})
