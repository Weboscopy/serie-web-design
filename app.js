const progress = document.querySelector(".progress")

const app = {
    percentage: 0,
    max: 100,
    update(){
        progress.style.background = `conic-gradient(teal ${app.percentage * 3.6}deg, #eee 0deg)`
        progress.firstElementChild.innerText = `${app.percentage} %`
        if(app.percentage < app.max){
            setTimeout(() => {
                app.percentage += 5 
                app.update()
            }, 50)
        }
    }
}

document.addEventListener("DOMContentLoaded", app.update)