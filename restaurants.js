const restaurantsCard = document.getElementById("restaurants-card")
const hamburger = document.getElementById("hamburger")
const nav = document.getElementById("nav")
const navHome = document.getElementById("nav-home")
const returnHome = document.getElementById("return-home")
const navTdee = document.getElementById("nav-tdee")

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

// Display Restaurants
function displayRestaurants() {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            data.forEach(function (restaurant) {
                restaurantsCard.innerHTML += `
                    <div>
                        <img src="${restaurant.logo}" alt="${restaurant.restaurant}" class="restaurant-logos">
                    <div>`
                // if (data.restaurant.includes(restaurant.restaurant)) {
                //     restaurantsCard.innerHTML = ""
                // } else {
                //     restaurantsCard.innerHTML += `
                //     <div>
                //         <img src="${restaurant.logo}" alt="${restaurant.restaurant}" class="restaurant-logos">
                //     <div>`
                // }
            })
        })
}

displayRestaurants()