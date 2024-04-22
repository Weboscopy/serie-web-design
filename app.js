const counters = document.querySelectorAll(".counter")
const speed = 300
const start = 0 


const initApp = () => {
    counters.forEach(counter => {
        const target = Number(counter.getAttribute("data-target"))
        const increment = target / speed 
        counter.innerText = start 

        function update(){
            const current = Number(counter.innerText)
            if(current < target){
                counter.innerText = Math.ceil(current + increment)
                setTimeout(update,1)
            } else {
                counter.innerText = target
            }
        }

        update()
    })
}

document.addEventListener("DOMContentLoaded", initApp)