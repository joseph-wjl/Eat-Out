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

results.addEventListener("click", function (e) {
    const resultCard = e.target.closest(".result-card");
    if (resultCard) {
        const restaurantName = resultCard.getAttribute("data-restaurant");
        console.log("Clicked on restaurant:", restaurantName);
        fetchMenuItems(restaurantName);
    }
})

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
        .catch(error => console.error("Error fetching data:", error))
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
    results.classList.add("scroll-smooth")
    results.scrollIntoView({ behavior: "smooth" })
}

function fetchMenuItems(restaurantName) {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            const menuItems = data.filter(item => item.restaurant === restaurantName)
            displayMenuItems(menuItems)
        })
}

function displayMenuItems(menuItems) {
    results.innerHTML = ""
    menuItems.forEach(item => {
        const menuItemHTML = `
            <div class="menu-items">
                <h3>${item.food}</h3>
                <p>${item.calories}</p>
                <p>${item.protein}</p>
                <p>${item.carbs}</p>
                <p>${item.fat}</p>
            </div>`
        results.innerHTML += menuItemHTML
    })
}

// Mobile Nav

hamburger.addEventListener("click", function () {
    nav.classList.toggle("show")
})