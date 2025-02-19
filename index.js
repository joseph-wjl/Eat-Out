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
            displayResults()
        })
    searchField.value = ""
}

function displayResults(matchingRestaurants) {
    results.innerHTML = ""
    matchingRestaurants.forEach(item => {
        results.innerHTML +=
            `<div class="card">
            <h3>${item.restaurant}</h3>
            </div>
            `
    })
}