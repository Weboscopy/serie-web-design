const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector("nav")

const app = () => {

    const toggleMenu = () => {
        hamburger.classList.toggle("active")
        nav.classList.toggle("mobile")
    }

    hamburger.addEventListener("click", toggleMenu)
}

document.addEventListener("DOMContentLoaded", app)