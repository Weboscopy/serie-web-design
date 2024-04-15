const toggler = document.getElementById("toggler")

const initApp = () => {
    let mode = JSON.parse(localStorage.getItem("mode")) ?? false 

    toggler.addEventListener("change", () => {
        mode = !mode 
        setTheme()
    })

    function setTheme(){
        if(mode){
            document.body.style.backgroundColor = "#333"
            toggler.checked = true 
            localStorage.setItem("mode", JSON.stringify(true))
        } else {
            document.body.style.backgroundColor = "white"
            toggler.checked = false 
            localStorage.setItem("mode", JSON.stringify(false))
        }
    }

    setTheme()
}

document.addEventListener("DOMContentLoaded", initApp)