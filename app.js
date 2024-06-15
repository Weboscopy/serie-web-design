const container = document.getElementById("container")
const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"

const app = () => {
    const fetchData = async (url) => {
     const {drinks} =  await ( await fetch(url)).json()
     displayData(drinks)
    }

    const displayData = (data) => {
        container.innerHTML = ''
        data?.forEach(cocktail => {
            const card = document.createElement("div")
            card.classList.add("card")
            card.innerHTML = `
             <img src="${cocktail.strDrinkThumb}">
             <div class="overlay">
                ${cocktail.strDrink}
             </div>
            `
            container.appendChild(card)
        })
    }

    fetchData(url)
}

document.addEventListener("DOMContentLoaded", app)