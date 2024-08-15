let items = document.querySelectorAll(".item")
let leftBox = document.getElementById("left")
let rightBox = document.getElementById("right")


const initApp = () => {
    items.forEach(item => {
        item.addEventListener("dragstart", (e) => {
            let selectedItem = e.target
            selectedItem.classList.add("hold")

            selectedItem.addEventListener("dragend", (e) => {
                if (selectedItem) {
                    selectedItem.classList.remove("hold")
                }
                selectedItem = null
            })

            rightBox.addEventListener("drop", (e) => {
                if (selectedItem) {
                    rightBox.appendChild(selectedItem)
                    selectedItem.classList.remove("hold")
                    rightBox.classList.remove("hovered")
                }
                selectedItem = null
            })

            rightBox.addEventListener("dragover", (e) => {
                e.preventDefault()
            })


            leftBox.addEventListener("drop", (e) => {
                if (selectedItem) {
                    leftBox.appendChild(selectedItem)
                    selectedItem.classList.remove("hold")
                    leftBox.classList.remove("hovered")
                }

                selectedItem = null
            })

            leftBox.addEventListener("dragover", (e) => {
                e.preventDefault()
            })

            rightBox.addEventListener("dragenter", (e) => {
                setTimeout(() => {
                    rightBox.classList.add("hovered")
                }, 0)

            })

            leftBox.addEventListener("dragenter", (e) => {
                setTimeout(() => {
                    leftBox.classList.add("hovered")
                }, 0)
            })


            rightBox.addEventListener("dragleave", (e) => {
                rightBox.classList.remove("hovered")
            })

            leftBox.addEventListener("dragleave", (e) => {
                leftBox.classList.remove("hovered")
            })


        })
    })
}

document.addEventListener("DOMContentLoaded", initApp)