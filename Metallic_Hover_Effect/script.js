// grabbing all the cards as a NodeList
const cardList = document.querySelectorAll(".card")
console.log(cardList)
console.log(1)

// grabbing the cards wrapper
const cards = document.querySelector(".cards")
cards.onmousemove = (e) => {
    // this function gets called everytime the mouse moves over the cards wrapper
    for (const card of cardList) {
        // we go over all the cards and update the mouse position for them
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`)
        card.style.setProperty("--mouse-y", `${y}px`)
    }
}