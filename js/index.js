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
    let pricePerTime;
    if (hoursCounter == 1) pricePerTime = 120;
    else if (hoursCounter == 2) pricePerTime = 250;
    else if (hoursCounter == 3) pricePerTime = 300;
    else pricePerTime = 350 + (hoursCounter-3) * 100;

    let suplementPerHumans = 0;
    if (humansCounter > 4) suplementPerHumans = (humansCounter-4) * 50

    let pricePerShower = humansCounter * 25;

    let cost = pricePerTime + pricePerShower + suplementPerHumans;

    drawSaunaPrice(cost, humansCounter);
}

function drawSaunaPrice(cost, humansCounter) {
    saunaCostBlock.innerHTML = `
        <p>Общая сумма за баню: ${cost.toFixed(2)} грн</p>
        <p>С каждого человека: ${(cost / humansCounter).toFixed(2)} грн</p>
    `;
}