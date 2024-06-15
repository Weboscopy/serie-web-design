const el = document.querySelector("h2")

const words = JSON.parse(el.getAttribute("data-words"))

const app = {
    txt: "",
    wordIndex: 0,
    isDeleting: false,
    speed: 500,
    init(){
        const currentIndex = app.wordIndex % words.length 
        const word = words[currentIndex]

        if(app.isDeleting){
          app.txt = word.substring(0, app.txt.length - 1)
        } else {
           app.txt = word.substring(0, app.txt.length + 1)
        }

        el.innerText = app.txt

        if(app.isDeleting){
            app.speed /= 2
        }

        if(!app.isDeleting && app.txt === word){
            app.speed = 3000 
            app.isDeleting = true 
        } else if(app.isDeleting && app.txt === "") {
            app.isDeleting = false 
            app.wordIndex++
            app.speed = 500
        }

        setTimeout(() => app.init(), app.speed)
    }
}


document.addEventListener("DOMContentLoaded", app.init)

