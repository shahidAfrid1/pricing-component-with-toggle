const PlantoggleBtn = document.querySelector('.toggle-btn')
const priceOfCards = document.querySelectorAll('.card h3 span')
PlantoggleBtn.addEventListener('click', handlePlanToggleBtn)
function handlePlanToggleBtn(){
    PlantoggleBtn.classList.toggle("active")
    if(PlantoggleBtn.classList.contains("active")){
        priceOfCards[0].innerHTML = 199.99
        priceOfCards[1].innerHTML = 249.99
        priceOfCards[2].innerHTML = 399.99
    }
    else{
        priceOfCards[0].innerHTML = 19.99
        priceOfCards[1].innerHTML = 24.99
        priceOfCards[2].innerHTML = 39.99
    }
}

const cards = document.querySelectorAll('.card')
cards.forEach(card => {
    card.addEventListener('click', handleCards)
})

function handleCards(event){
    cards.forEach(card => {
        card.classList.remove("active")
    })
    event.currentTarget.classList.add("active")
}