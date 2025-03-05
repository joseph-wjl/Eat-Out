document.addEventListener("DOMContentLoaded", function () {
    const eatoutLogo = document.getElementById("eatout-logo")
    const hamburger = document.getElementById("hamburger")
    const nav = document.getElementById("nav")
    const navHome = document.getElementById("nav-home")
    const returnHome = document.getElementById("return-home")
    const ageEl = document.getElementById("age")
    const weightEl = document.getElementById("weight")
    const heightEl = document.getElementById("height")
    const genderEl = document.getElementById("gender")
    const exerciseEl = document.getElementById("exercise")
    const calculateBtn = document.getElementById("calculate-btn")
    const tdeeResult = document.getElementById("tdee-result")

    // Navigation
    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active")
        nav.classList.toggle("show")
    });
    navHome.addEventListener("click", function () {
        window.location.href = "index.html"
    });
    returnHome.addEventListener("click", function () {
        window.location.href = "index.html"
    });
    eatoutLogo.addEventListener("click", function () {
        window.location.href = "index.html"
    });

    calculateBtn.addEventListener("click", function (event) {
        event.preventDefault()
        calculateTDEE()
    });

    function calculateTDEE() {
        const age = parseInt(ageEl.value)
        const weight = parseFloat(weightEl.value)
        const height = parseFloat(heightEl.value)
        const gender = genderEl.value
        const exercise = exerciseEl.value

        let bmr;

        if (gender === "male") {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5
        } else if (gender === "female") {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161
        } else {
            console.error("Invalid gender")
            return
        }

        let activityFactor

        switch (exercise) {
            case "sedentary":
                activityFactor = 1.2
                break
            case "light":
                activityFactor = 1.375
                break
            case "moderate":
                activityFactor = 1.55
                break
            case "active":
                activityFactor = 1.725
                break
            case "very active":
                activityFactor = 1.9
                break
            default:
                console.error("Invalid exercise level")
                return
        }

        const tdee = bmr * activityFactor
        tdeeResult.textContent = `Your TDEE is ${tdee.toFixed(2)} calories per day!`
        // console.log(`Your TDEE is ${tdee.toFixed(2)} calories per day.`)
    }
})