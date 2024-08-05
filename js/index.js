const saunaDataForm = document.querySelector('#sauna_form');
const saunaHumansInput = document.querySelector('#sauna_humans');
const saunaHoursInput = document.querySelector('#sauna_hours');
const saunaCostBlock = document.querySelector('#sauna_cost');
let saunaCheck = {};

saunaDataForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let humansCounter = saunaHumansInput.value;
    let hoursCounter = saunaHoursInput.value;

    calculateSaunaCost(humansCounter, hoursCounter);
});

function calculateSaunaCost(humansCounter, hoursCounter) {
    let cost = getPricePerTime(hoursCounter) + getPricePerShower(humansCounter) + getSuplementPerHumans(humansCounter);

    renderSaunaPrice(cost, humansCounter);
}

function getPricePerTime(hoursCounter) {
    if (hoursCounter == 1) return 120;
    else if (hoursCounter == 2) return 250;
    else if (hoursCounter == 3) return 300;
    else return 300 + (hoursCounter-3) * 100;
}

function getPricePerShower(humansCounter) {
    let showerCost = 25;
    return showerCost * humansCounter;
}

function getSuplementPerHumans(humansCounter) {
    if (humansCounter <= 4) return 0;
    return (humansCounter - 4) * 50;
}

function renderSaunaPrice(cost, humansCounter) {
    saunaCostBlock.innerHTML = `
        <p>Общая сумма за баню: ${cost.toFixed(2)} грн</p>
        <p>С каждого человека: ${(cost / humansCounter).toFixed(2)} грн</p>
    `;
}