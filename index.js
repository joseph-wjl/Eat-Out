const searchField = document.getElementById("search-field")
const searchBtn = document.getElementById("search-btn")
const results = document.getElementById("results")
const resultCard = document.getElementById("result-card")
const hamburger = document.getElementById("hamburger")
const nav = document.getElementById("nav")

searchBtn.addEventListener("click", fetchResults)

searchField.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        fetchResults()
    }
})

resultCard.addEventListener("click", fetchMenuItems)

function fetchResults() {
    const query = searchField.value.toLowerCase()
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            const matchingRestaurants = data.filter(item =>
                item.restaurant && item.restaurant.toLowerCase().includes(query))
            // if (matchingRestaurants.length === 0) {
            displayResults(matchingRestaurants[0])
        })
    searchField.value = ""
}

function displayResults(item) {
    results.innerHTML = ""
    results.innerHTML +=
        `<div class="result-card" id="result-card">
            <img src="${item.logo}" alt="${item.logoalt}" class="restaurant-logo" />
            <h3 class="card-restaurant">${item.restaurant}</h3>
        </div>
         `
    results.scrollIntoView({ behavior: "smooth" })
}

function fetchMenuItems() {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {

        })
}

// Mobile nav

hamburger.addEventListener("click", function () {
    nav.classList.toggle("show")
})