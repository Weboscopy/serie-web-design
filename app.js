const card_top = document.querySelector(".top")
const title = document.querySelector("h3")
const desc = document.querySelector("p")

const skeleton = document.querySelectorAll(".skeleton")
const skeletonText = document.querySelectorAll(".skeleton-text")


const app = () => {
    setTimeout(() => {
        skeleton.forEach(el => el.classList.remove("skeleton"))
        skeletonText.forEach(el => el.classList.remove("skeleton-text"))
        card_top.innerHTML = '<img src="./img.jpg" alt="© Isaac Quesada">'
        title.innerText = "Yummy!"
        desc.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus odio quis impedit provident. Earum, ducimus!'
    }, 3000)
}

document.addEventListener("DOMContentLoaded", app)