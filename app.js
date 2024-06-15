const togglers = document.querySelectorAll(".card__toggler")

const app = () => {
    for(const toggler of togglers){
        toggler.addEventListener("click", () => {
           const current_card = toggler.parentElement
           current_card.classList.toggle("card_active")

           const other_cards = getOtherCards(current_card)
           for(const card of other_cards){
            card.classList.remove("card_active")
           }
        })
    }

    const getOtherCards = (current_card) => {
        let other_cards = [];
        let card = current_card.parentNode.firstChild


        while(card){
            if(card.nodeType === 1  && card !== current_card){
                other_cards.push(card)
            }

            card = card.nextSibling
        }

        return other_cards
    }

}


document.addEventListener("DOMContentLoaded", app)