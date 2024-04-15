const tabs = document.querySelectorAll(".tab")
const items = document.querySelectorAll(".item")
const line = document.querySelector(".line")


const app = () => {
    tabs.forEach((tab, index) => {
        tab.addEventListener("click", (e) => {
            tabs.forEach(tab => tab.classList.remove("active"))
            tab.classList.add("active")

            line.style.width = e.target.offsetWidth + "px"
            line.style.left =  e.target.offsetLeft + "px"

            items.forEach(item => item.classList.remove("active"))
            items[index].classList.add("active")
        })
    })
}

document.addEventListener("DOMContentLoaded", app)