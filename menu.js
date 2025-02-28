const menuSection = document.getElementById("menu-section")

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const restaurantName = urlParams.get("restaurant");

    if (restaurantName) {
        document.getElementById("restaurant-name").textContent = restaurantName;
        fetchMenuItems(restaurantName);
    }

    function fetchMenuItems(restaurantName) {
        fetch("data.json")
            .then(res => res.json())
            .then(data => {
                const menuItems = data.filter(item => item.restaurant === restaurantName);
                displayMenuItems(menuItems);
            })
            .catch(error => console.error("Error fetching menu items:", error));
    }

    function displayMenuItems(menuItems) {
        const menuItemsContainer = document.getElementById("menu-items");
        menuItemsContainer.innerHTML = ""; // Clear previous content

        if (menuItems.length === 0) {
            menuItemsContainer.innerHTML = "<p>No menu items found</p>";
            return;
        }

        menuItems.forEach(item => {
            const menuItemHTML = `
                <div class="menu-item">
                    <h3>${item.food}</h3>
                    <p>Calories: ${item.calories}kcal</p>
                    <p>Protein: ${item.protein}g</p>
                    <p>Carbs: ${item.carbs}g</p>
                    <p>Fat: ${item.fat}g</p>
                </div>`;
            menuItemsContainer.innerHTML += menuItemHTML;
        });
    }
});