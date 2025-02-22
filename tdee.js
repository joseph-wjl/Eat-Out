const hamburger = document.getElementById("hamburger")
const nav = document.getElementById("nav")
const navHome = document.getElementById("nav-home")
const returnHome = document.getElementById("return-home")
const ageEl = document.getElementById("age")
const weightEl = document.getElementById("weight")
const heightEl = document.getElementById("height")
const calculateBtn = document.getElementById("calculate-btn")

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active")
    nav.classList.toggle("show")
})

navHome.addEventListener("click", function () {
    window.location.href = "index.html"
})

returnHome.addEventListener("click", function () {
    window.location.href = "index.html"
})

calculateBtn.addEventListener("click", function () {
    calculate()
})

// Calculate TDEE

function calculate() {
    const tdee = ageEl.value + weightEl.value
    console.log(tdee)
}

// API

const url = 'https://fitness-api.p.rapidapi.com/fitness';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '61fc0c5602msh7e836f3665b54dfp1fa97fjsn4bfa6e09ea7d',
        'x-rapidapi-host': 'fitness-api.p.rapidapi.com',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
        height: '190',
        weight: '80',
        age: '30',
        gender: 'male',
        exercise: 'little',
        neck: '41',
        hip: '100',
        waist: '88',
        goal: 'maintenance',
        deficit: '500',
        goalWeight: '85'
    })
};

async function fetchFitnessData() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchFitnessData();
