const inputs = document.querySelectorAll("input")
const button = document.querySelector("button")
const container = document.querySelector(".container")

let code = []
const correct_code = [2, 4, 6, 8]

const app = {
  init() {
    button.addEventListener("click", app.verify)
    inputs[0].focus()
    inputs.forEach((input, index) => {
      input.addEventListener("keydown", (e) => {
        if (e.key >= 0 && e.key <= 9) {
          code[index] = Number(e.key)
          inputs[index].value = ""
          setTimeout(() => app.focusInput(inputs[index + 1]), 10)
        } else if (e.key === "Backspace") {
          code.splice(index, 1)
          setTimeout(() => app.focusInput(inputs[index - 1]), 10)
        }
      })
    })
  },
  focusInput(input) {
    if (input) {
      input.focus()
    }
  },
  verify() {
    const p = document.createElement("p")
    if (code.length == inputs.length && code.every((v, i) => v == correct_code[i])) {
      p.innerText = "Code valide"
      p.classList.add("success")
    } else {
      p.innerText = "Code invalide"
      p.classList.add("error")
    }

    container.appendChild(p)
    setTimeout(() => p.remove(), 2000)
  }
}

document.addEventListener("DOMContentLoaded", app.init)