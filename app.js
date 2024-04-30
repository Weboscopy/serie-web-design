const h1 =  document.querySelector("h1")
const moon =  document.querySelector(".moon")
const stars =  document.querySelector(".stars")

const initApp = () => {
    window.addEventListener("scroll", () => {
         let val = window.scrollY
        moon.style.bottom = 30 - val * 0.1 + "%"
        moon.style.right = 30 - val * 0.04 + "%"
        stars.style.top =  val * 0.1 + "%"
        h1.style.bottom = 50 - val * 0.1 + "%"
    })
}

document.addEventListener("DOMContentLoaded", initApp)