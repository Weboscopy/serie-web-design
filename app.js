const progressBar = document.querySelector(".progressBar")
const next = document.getElementById("next")
const prev = document.getElementById("prev")
const steps = document.querySelectorAll(".step")

const app = {
    current: 1,
    init() {
        next.addEventListener("click", () => {
            if (app.current < steps.length) {
                app.current++
                app.update()
            }
        })

        prev.addEventListener("click", () => {
            if (app.current > 1) {
                app.current--
                app.update()
            }
        })
    },
    update() {
        steps.forEach((step, index) => {
            (index < app.current) ? step.classList.add("active") : step.classList.remove("active")

            const actives = document.querySelectorAll(".active")

            progressBar.style.width = (actives.length - 1) / (steps.length - 1) * 100 + "%"

            if (app.current == 1) {
                prev.disabled = true
            } else if (app.current == steps.length) {
                next.disabled = true
            } else {
                prev.disabled = false
                next.disabled = false
            }
        })
    }
}

document.addEventListener("DOMContentLoaded", app.init)