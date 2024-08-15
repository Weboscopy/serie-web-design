
const popup = document.querySelector(".popup")
const btnClosePopup = document.querySelector(".btn-close-popup")
const modal = document.querySelector(".modal")
const btnOpenModal = document.querySelector(".btn-open-modal")
const btnCloseModal = document.querySelector(".btn-close-modal")
const btnSubscribe = document.querySelector(".btn-subscribe")

const app = () => {
    popup.showModal();
    btnClosePopup.addEventListener("click", () => {
        popup.close()
    })

    btnOpenModal.addEventListener("click", () => {
        modal.showModal()
    })

    btnCloseModal.addEventListener("click", () => {
        modal.close()
    })

    btnSubscribe.addEventListener("click", () => {
        const email = document.querySelector("input").value
        console.log(email)
        modal.close()
    })

    document.body.addEventListener("click", (e) => {
        if (e.target.tagName !== "DIALOG") return;

        const rect = e.target.getBoundingClientRect();

        const clickedInDialog = (
            rect.top <= e.clientY &&
            e.clientY <= rect.top + rect.height &&
            rect.left <= e.clientX &&
            e.clientX <= rect.left + rect.width
        )


        if (!clickedInDialog) {
            e.target.close()
        }
    })

}

document.addEventListener("DOMContentLoaded", app)