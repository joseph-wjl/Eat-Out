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