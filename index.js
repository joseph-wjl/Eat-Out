const searchField = document.getElementById("search-field")
const searchBtn = document.getElementById("search-btn")
const results = document.getElementById("results")

searchBtn.addEventListener("click", fetchResults)

function fetchResults() {
    const query = searchField.value.toLowerCase()
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            const matchingRestaurants = data.filter(item =>
                item.restaurant && item.restaurant.toLowerCase().includes(query))
            console.log(matchingRestaurants)
            displayResults(matchingRestaurants[0])
        })
    searchField.value = ""
}

function displayResults(item) {
    results.innerHTML = ""
    results.innerHTML +=
        `<div class="result-card">
            <img src="${item.logo}" alt="${item.logoalt}" class="restaurant-logo" />
            <h3>${item.restaurant}</h3>
        </div>
         `
}