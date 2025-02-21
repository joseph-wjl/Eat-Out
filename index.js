const searchField = document.getElementById("search-field")
const searchBtn = document.getElementById("search-btn")
const results = document.getElementById("results")
const resultCard = document.getElementById("result-card")
const hamburger = document.getElementById("hamburger")
const nav = document.getElementById("nav")
const logoCarousel = document.getElementById("logo-carousel");
const itemsSection = document.getElementById("items-section");

let restaurantData = []

// Event listeners

searchBtn.addEventListener("click", fetchResults)

searchField.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        fetchResults
    }
})

results.addEventListener("click", function (e) {
    const resultCard = e.target.closest(".result-card");
    if (resultCard) {
        const restaurantName = resultCard.getAttribute("data-restaurant");
        console.log("Clicked on restaurant:", restaurantName);
        fetchMenuItems(restaurantName);
    }
    console.log(e.target)
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
    results.innerHTML = ""
}

function displayResults(restaurant) {
    results.innerHTML = ""
    results.innerHTML +=
        `<div class="result-card" id="result-card" data-restaurant="${restaurant.restaurant}">
            <img src="${restaurant.logo}" alt="${restaurant.logoalt}" class="restaurant-logo" />
            <h3 class="card-restaurant">${restaurant.restaurant}</h3>
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
            console.log(menuItems)
        })
}

function displayMenuItems(menuItems) {
    console.log("logged")
    itemsSection.innerHTML = ""
    menuItems.forEach(item => {
        console.log(menuItems)
        const menuItemHTML = `
            <div class="menu-items-card">
                <h3 class="food">${item.food}</h3>
                <div class="food-details">
                    <p>Calories: ${item.calories}</p>
                    <p>Protein: ${item.protein}</p>
                    <p>Carbs: ${item.carbs}</p>
                    <p>Fat: ${item.fat}</p>
                </div>
            </div>`
        itemsSection.innerHTML += menuItemHTML
        // Add event listeners to toggle food details
        document.querySelectorAll('.food').forEach(foodItem => {
            foodItem.addEventListener('click', function () {
                const foodDetails = this.nextElementSibling;
                foodDetails.classList.toggle('show');
            });
        });
    })
}

// Mobile Nav
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active")
    nav.classList.toggle("show")
})

// Logo carousel

// Fetch the data and store it for filtering
fetch("data.json")
    .then(res => res.json())
    .then(data => {
        restaurantData = data;
        displayLogos(data);
    })
    .catch(error => console.error("Error fetching data:", error));

function displayLogos(data) {
    logoCarousel.innerHTML = "";
    const logoTrack = document.createElement("div");
    logoTrack.className = "logo-track";

    // Use a Set to ensure unique restaurant logos
    const uniqueRestaurants = new Set();

    data.forEach(item => {
        if (!uniqueRestaurants.has(item.restaurant)) {
            uniqueRestaurants.add(item.restaurant);
            const logoImg = document.createElement("img");
            logoImg.src = item.logo;
            logoImg.alt = item.restaurant;
            logoTrack.appendChild(logoImg);
        }
    });

    // Duplicate the logos to create a continuous loop
    uniqueRestaurants.forEach(restaurant => {
        const logoImg = document.createElement("img");
        const item = data.find(item => item.restaurant === restaurant);
        logoImg.src = item.logo;
        logoImg.alt = item.restaurant;
        logoTrack.appendChild(logoImg);
    });

    logoCarousel.appendChild(logoTrack);
}