const hamburgerBtn = document.querySelector("button")
const mobileMenu = document.querySelector("#mobile-menu")

const initApp = () => {

    const toggle = () => {
        hamburgerBtn.classList.toggle("btn-active")
        mobileMenu.classList.toggle("mobile-active")
    }

    hamburgerBtn.addEventListener("click", toggle)
    mobileMenu.addEventListener("click", toggle)
}

document.addEventListener("DOMContentLoaded", initApp)