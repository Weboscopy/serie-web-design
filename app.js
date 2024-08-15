const data = [
    {
        id: 1,
        name: "BMW Série 5",
        img: "./images/img1.jpg",
        price: 72000,
        category: "berline"
    },
    {
        id: 2,
        name: "BMW Série 3",
        img: "./images/img2.jpg",
        price: 59000,
        category: "berline"
    },
    {
        id: 3,
        name: "BMW 328d",
        img: "./images/img3.jpg",
        price: 47000,
        category: "berline"
    },
    {
        id: 4,
        name: "Honda Jazz",
        img: "./images/img4.jpg",
        price: 31000,
        category: "citadine"
    },
    {
        id: 5,
        name: "Wolkswagen Id3",
        img: "./images/img5.jpg",
        price: 43000,
        category: "citadine"
    },
    {
        id: 6,
        name: "Fiat 500C",
        img: "./images/img6.jpg",
        price: 33800,
        category: "citadine"
    },
    {
        id: 7,
        name: "Jeep Grand Cherokee",
        img: "./images/img7.jpg",
        price: 99500,
        category: "suv"
    },
    {
        id: 8,
        name: "Mercedes Benz Classe M",
        img: "./images/img8.jpg",
        price: 31000,
        category: "suv"
    },
    {
        id: 9,
        name: "Jeep Compass",
        img: "./images/img9.jpg",
        price: 38000,
        category: "suv"
    },
    {
        id: 10,
        name: "Alpha Roméo AC",
        img: "./images/img10.jpg",
        price: 276000,
        category: "sport"
    },
    {
        id: 11,
        name: "Corvette C7 ZR1",
        img: "./images/img11.jpg",
        price: 162000,
        category: "sport"
    },
    {
        id: 12,
        name: "Mercedes Benz Amg",
        img: "./images/img12.jpg",
        price: 138000,
        category: "sport"
    }
]


const list = document.querySelector(".list")
const search = document.querySelector("input[type='text']")
const categories = document.querySelectorAll(".category")
const priceRange = document.querySelector("input[type='range']")
const priceValue = document.querySelector(".priceValue")


const priceList = data.map(item => item.price)
const minPrice = Math.min(...priceList)
const maxPrice = Math.max(...priceList)
const EuroFormat = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" })

const app = {
    currentSearch: "",
    currentCategory: "all",
    currentMaxPrice: maxPrice,
    init() {
        priceRange.min = minPrice
        priceRange.max = maxPrice
        priceRange.value = maxPrice
        priceValue.textContent = EuroFormat.format(maxPrice)
        app.renderList(data)
        search.addEventListener("keyup", (e) => app.search(e))
        categories.forEach(category => {
            category.addEventListener("click", (e) => app.filterByCategory(e))
        })
        priceRange.addEventListener("input", (e) => app.filterByPriceRange(e))
    },
    renderList(data) {
        list.innerHTML = data.map(item => `
                <div class="item">
                <img src="${item.img}" />
                <span class="name">${item.name}</span>
                <span class="price">${EuroFormat.format(item.price)}</span>
                <span class="type">${item.category}</span>
                </div>
            `).join("")
    },
    updateList() {
        let filteredList;
        if (app.currentSearch !== "") {
            filteredList = data.filter(item => item.name.toLocaleLowerCase().includes(app.currentSearch))
        } else {
            filteredList = data
        }

        if (app.currentCategory !== "all") {
            filteredList = filteredList.filter(item => item.category === app.currentCategory)
        }

        filteredList = filteredList.filter(item => item.price <= app.currentMaxPrice)

        list.innerHTML = ""
        app.renderList(filteredList)
    },
    search(e) {
        app.currentSearch = e.target.value.toLowerCase()
        app.updateList()
    },
    filterByCategory(e) {
        categories.forEach(cat => {
            cat.className = "category"
        })
        e.target.classList.add("active")
        app.currentCategory = e.target.dataset.category
        app.updateList()
    },
    filterByPriceRange(e) {
        app.currentMaxPrice = +e.target.value
        priceValue.textContent = EuroFormat.format(app.currentMaxPrice)
        app.updateList()
    }
}

document.addEventListener("DOMContentLoaded", app.init)