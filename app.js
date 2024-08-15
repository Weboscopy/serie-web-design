const data = [
    {
        "id": 1,
        "img": "./images/img1.jpg",
        "title": "Super maison",
        "desc": "maison moderne avec plein d'éléments super sympa",
        "stars": 2
    },
    {
        "id": 2,
        "img": "./images/img2.jpg",
        "title": "Chalet magnifique",
        "desc": "Chalet spacieuse dotée de finitions haut de gamme.",
        "stars": 1
    },
    {
        "id": 3,
        "img": "./images/img3.jpg",
        "title": "Appartement hyper center",
        "desc": "Appartement lumineux avec une déco vraiment top",
        "stars": 3
    },
    {
        "id": 4,
        "img": "./images/img4.jpg",
        "title": "Maison de campagne chaleureuse",
        "desc": "Maison typique avec une ambiance cosy",
        "stars": 5
    },
    {
        "id": 5,
        "img": "./images/img5.jpg",
        "title": "Demeure provençale",
        "desc": "Demeure traditionnelle du Sud avec terasse ensoleillée",
        "stars": 4
    },
    {
        "id": 6,
        "img": "./images/img6.jpg",
        "title": "Loft design",
        "desc": "Loft design avec des touches contemporaines et élégantes",
        "stars": 3
    }
]


const container = document.getElementById("container")


const app = {
    init() {
        app.renderList()
    },
    renderList() {
        container.innerHTML = data.map(item => `
            <div class="card">
    <div class="featured">
        <img src="${item.img}" />
    </div>
    <div class="details">
        <div class="info">
            <h4>${item.title}</h4>
            <p>${item.desc}</p>
        </div>
        <div class="rating">
            <div class="stars" data-id="${item.id}">
                ${item.stars === 5 ?
                `<span data-star="5" data-selected="true">★</span>` :
                `<span data-star="5">★</span>`
            }
                ${item.stars === 4 ?
                `<span data-star="4" data-selected="true">★</span>` :
                `<span data-star="4">★</span>`
            }
                ${item.stars === 3 ?
                `<span data-star="3" data-selected="true">★</span>` :
                `<span data-star="3">★</span>`
            }
                ${item.stars === 2 ?
                `<span data-star="2" data-selected="true">★</span>` :
                `<span data-star="2">★</span>`
            }
                ${item.stars === 1 ?
                `<span data-star="1" data-selected="true">★</span>` :
                `<span data-star="1">★</span>`
            }
            </div>
        </div>
    </div>
</div>
            `)

        const starsDiv = document.querySelectorAll(".stars")

        starsDiv.forEach(div => {
            div.addEventListener("click", app.update)
        })
    },
    update(e) {
        if (e.target.tagName === "SPAN") {
            const rating = +e.target.dataset.star
            const id = +e.target.parentElement.dataset.id
            const item = data.find(item => item.id === id)
            item.stars = rating
            app.renderList()
        }
    }
}

document.addEventListener("DOMContentLoaded", app.init)