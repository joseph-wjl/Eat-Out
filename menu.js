

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search)
    const restaurantName = urlParams.get("restaurant")

    const eatoutLogo = document.getElementById("eatout-logo")
    const hamburger = document.getElementById("hamburger")
    const nav = document.getElementById("nav")
    const navHome = document.getElementById("nav-home")
    const returnHome = document.getElementById("return-home")
    const navTdee = document.getElementById("nav-tdee")
    const menuSection = document.getElementById("menu-section")

    if (restaurantName) {
        document.getElementById("restaurant-name").textContent = restaurantName
        fetchMenuItems(restaurantName)
    }

    function fetchMenuItems(restaurantName) {
        fetch("data.json")
            .then(res => res.json())
            .then(data => {
                const menuItems = data.filter(item => item.restaurant === restaurantName)
                displayMenuItems(menuItems)
            })
            .catch(error => console.error("Error fetching menu items:", error))
    }

    function displayMenuItems(menuItems) {
        const menuItemsContainer = document.getElementById("menu-items")
        menuItemsContainer.innerHTML = "" // Clear previous content

        if (menuItems.length === 0) {
            menuItemsContainer.innerHTML = "<p>No menu items found</p>"
            return
        }

        menuItems.forEach(item => {
            const menuItemHTML = `
                <div class="menu-item">
                    <h3>${item.food}</h3>
                    <p>Calories: ${item.calories}kcal</p>
                    <p>Protein: ${item.protein}g</p>
                    <p>Carbs: ${item.carbs}g</p>
                    <p>Fat: ${item.fat}g</p>
                </div>`
            menuItemsContainer.innerHTML += menuItemHTML
        })
    }
    // Navigation
    navHome.addEventListener("click", function () {
        window.location.href = "index.html"
    })
    returnHome.addEventListener("click", function () {
        window.location.href = "index.html"
        console.log("nav")
    })
    navTdee.addEventListener("click", function () {
        window.location.href = "tdee.html"
    })
    eatoutLogo.addEventListener("click", function () {
        window.location.href = "index.html"
    })

    // Mobile Nav
    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active")
        nav.classList.toggle("show")
    })
})

