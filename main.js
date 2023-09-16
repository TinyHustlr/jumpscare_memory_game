const cards = document.querySelectorAll(".card");

let cardOne, cardTwo;

function flipCard(e) {
    let clickedCard = e.target // getting user clicked card
    if (clickedCard !== cardOne) {
        clickedCard.classList.add('flip');
        if (!cardOne) {
            // retrun the cardOne value to clickedCard
            return cardOne = clickedCard;
        }
    }
    cardTwo = clickedCard;

    let cardOneImg = cardOne.querySelector('img').src,
    cardTwoImg = cardTwo.querySelector('img').src;
    matchedCards(cardOneImg, cardTwoImg);
}

function matchedCards(img1, img2) {
    if (img1 === img2) {
        return console.log('card matched')
    }
    setTimeout(() => { // adding shake class after 400ms
        cardOne.classList.add('shake');
        cardTwo.classList.add('shake');
    }, 400);

    setTimeout(() => { // removing shake and flip classes after 1200ms
        cardOne.classList.remove('shake', 'flip');
        cardTwo.classList.remove('shake', 'flip');
    }, 1200);
}

cards.forEach(card => {
    card.addEventListener('click', flipCard) // adding click to each card
});