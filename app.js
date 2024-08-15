const slideContainer = document.querySelector(".slide-container")
const leftBtn = document.querySelector("#left")
const rightBtn = document.querySelector("#right")
const slides = document.querySelectorAll(".slide")

const intervalTime = 4000
let currentSlide = 0
let interval = setInterval(autoPlay, intervalTime)

leftBtn.addEventListener("click", () => {
    currentSlide--
    changeSlide()
    resetInterval()
})

rightBtn.addEventListener("click", () => {
    currentSlide++
    changeSlide()
    resetInterval()
})

function autoPlay() {
    currentSlide++
    changeSlide()
}


function changeSlide() {
    if (currentSlide > slides.length - 1) {
        currentSlide = 0
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1
    }

    slideContainer.style.transform = `translateX(${-currentSlide * 100}vw)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(autoPlay, intervalTime)
}