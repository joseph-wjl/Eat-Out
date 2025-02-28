const restaurantsCard = document.getElementById("restaurants-card")
const restaurantLogo = document.getElementById("restaurant-logo")
const hamburger = document.getElementById("hamburger")
const nav = document.getElementById("nav")
const navHome = document.getElementById("nav-home")
const returnHome = document.getElementById("return-home")
const navTdee = document.getElementById("nav-tdee")
const eatoutLogo = document.getElementById("eatout-logo")

// Navigation
navHome.addEventListener("click", function () {
    window.location.href = "index.html"
})
returnHome.addEventListener("click", function () {
    window.location.href = "index.html"
})
navTdee.addEventListener("click", function () {
    window.location.href = "tdee.html"
    console.log("nav")
})
eatoutLogo.addEventListener("click", function () {
    window.location.href = "index.html"
})

// Display Restaurants
function displayRestaurants() {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            const uniqueRestaurants = new Set()
            data.forEach(function (restaurant) {
                // Eliminate duplicates
                if (!uniqueRestaurants.has(restaurant.restaurant)) {
                    uniqueRestaurants.add(restaurant.restaurant)
                    // 
                    restaurantsCard.innerHTML += `
                    <div class="restaurant-card">
                        <img src="${restaurant.logo}" alt="${restaurant.restaurant}" class="restaurant-logos" id="restaurant-logo">
                    <div>`
                }
            })
            // Logo navigation
            document.querySelectorAll(".restaurant-logos").forEach(restaurant => {
                restaurant.addEventListener("click", function (e) {
                    console.log(e.target.restaurant)
                    const restaurantName = e.target.alt;
                    window.location.href = `menu.html?restaurant=${encodeURIComponent(restaurantName)}`
                })
            })
        })
}

displayRestaurants()

// Mobile Nav
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active")
    nav.classList.toggle("show")
})