const forms = document.querySelectorAll("form")
const prevs = document.querySelectorAll(".prev")
const nexts = document.querySelectorAll(".next")
const listItems = document.querySelectorAll("li")
const ul = document.querySelector("ul")

const app = {
    step: 0,
    init() {
        nexts.forEach(next => {
            next.addEventListener("click", () => {
                app.step++
                app.changeForm()
            })
        })

        prevs.forEach(prev => {
            prev.addEventListener("click", () => {
                app.step--
                app.changeForm()
            })
        })

        listItems.forEach((item, index) => {
            item.addEventListener("click", () => {
                app.step = index
                app.changeForm()
            })
        })
    },
    changeForm() {
        forms.forEach(form => {
            form.style.transform = `translateX(${-app.step * 100}%)`
        })

        listItems.forEach(item => {
            item.classList.remove("active")
        })

        if (app.step !== 3) {
            listItems[app.step].classList.add("active")
        } else {
            ul.style.justifyContent = "center"
            ul.innerHTML = "<h2>Terminé</h2>"
        }
    }
}

document.addEventListener("DOMContentLoaded", app.init)