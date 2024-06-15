
const notifCol = document.querySelector(".notif_col")
const btn = document.querySelector(".btn")
const types = ["info", "success", "danger"]


const app = () => {
    btn.addEventListener("click", () => createNotif(getRandomType()))

    function createNotif(type) {
        const notif = document.createElement("div")
        notif.className = `notif ${type}`
        const border = document.createElement("div")
        border.className = "border"
        let message = ""
        switch (type) {
            case "info":
                message = "ǃ Un document a été ajouté"
                break;
            case "success":
                message = "✓ La demande a été envoyée"
                break;
            case "danger":
                message = "✖ Une erreur est survenue"
        }

        notif.innerText = message
        notif.appendChild(border)
        notifCol.appendChild(notif)

        setTimeout(() => {
            notif.remove()
        }, 4000)
    }

    function getRandomType() {
        return types[Math.floor(Math.random() * types.length)]
    }
}

document.addEventListener("DOMContentLoaded", app)