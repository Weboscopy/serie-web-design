const ul = document.querySelector("ul")
const input = document.querySelector("input")
const counter = document.querySelector("span")


const maxTags = 10
let tags = []

const app = {
    init() {
        input.addEventListener("keyup", app.addTag)
        ul.addEventListener("click", app.removeTag)
        app.countTags()
    },
    addTag(e) {
        if (e.key == "Enter" || e.key == ",") {
            let tag = e.target.value.replace(",", "").replace(/\s+/g, " ")

            if (tag.length > 10) {
                tag = tag.substring(0, 10) + "..."
            }

            if (tag.length > 3 && !tags.includes(tag)) {
                if (tags.length < maxTags) {
                    tags.push(tag)
                    app.displayDOMTags()
                }
            }

            e.target.value = ""
            input.focus()
        }
    },
    displayDOMTags() {
        ul.querySelectorAll("li").forEach(li => li.remove())
        tags.forEach(tag => {
            const li = `<li>${tag} <i class="fa fa-times"></i></li>`
            input.insertAdjacentHTML("beforebegin", li)
        })
        app.countTags()
    },
    removeTag(e) {
        if (e.target.tagName === "I") {
            tags = tags.filter(item => item !== e.target.parentElement.innerText)
            app.displayDOMTags()
        }
    },
    countTags() {
        counter.innerText = maxTags - tags.length
    }
}


document.addEventListener("DOMContentLoaded", app.init)