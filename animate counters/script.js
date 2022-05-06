const counters = document.querySelectorAll('.counter');


counters.forEach(el => {
    el.innerHTML = `<div>0</div>`
    // el.innerText = '0'
    let counter = 0;
    let targetCount = +el.dataset.target;

    let timer = setInterval(() => {
        if (counter !== targetCount) {
            el.innerHTML = `<div>${counter += 100}</div>`;
            // el.innerText = counter += 100;
        } else {
            clearInterval(timer)
        }
    }, 150000 / targetCount)
})