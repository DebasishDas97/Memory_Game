document.addEventListener('DOMContentLoaded', () => {
    // const name = prompt("Player Name?")
    const cardsList = [
        {
            name: 'cat',
            image: 'images/cat.png'
        },
        {
            name: 'cat',
            image: 'images/cat.png'
        },
        {
            name: 'dog',
            image: 'images/dog.png'
        },
        {
            name: 'dog',
            image: 'images/dog.png'
        },
        {
            name: 'duck',
            image: 'images/duck.png'
        },
        {
            name: 'duck',
            image: 'images/duck.png'
        },
        {
            name: 'jaguar',
            image: 'images/jaguar.png'
        },
        {
            name: 'jaguar',
            image: 'images/jaguar.png'
        },
        {
            name: 'lion',
            image: 'images/lion.png'
        },
        {
            name: 'lion',
            image: 'images/lion.png'
        },
        {
            name: 'panther',
            image: 'images/panther.png'
        },
        {
            name: 'panther',
            image: 'images/panther.png'
        },
        {
            name: 'snake',
            image: 'images/snake.png'
        },
        {
            name: 'snake',
            image: 'images/snake.png'
        },
        {
            name: 'tiger',
            image: 'images/tiger.png'
        },
        {
            name: 'tiger',
            image: 'images/tiger.png'
        },
        {
            name: 'peacock',
            image: 'images/peacock.jpeg'
        },
        {
            name: 'peacock',
            image: 'images/peacock.jpeg'
        },
        {
            name: 'elephant',
            image: 'images/elephant.jpeg'
        },
        {
            name: 'elephant',
            image: 'images/elephant.jpeg'
        },
    ]
    cardsList.sort(() => 0.5 - Math.random())
    const grid = document.querySelector('.game-grid')
    const attemptsHolder = document.querySelector('.attempts-holder')
    const foundHolder = document.querySelector('.found-holder')
    const cardsInGame = 10


    attemptsHolder.textContent = 0
    foundHolder.textContent = 0

    let chosenCards = []
    let chosenCardsId = []

    function initiateBoard() {
        for (let i = 0; i < cardsList.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'images/placeholder.jpeg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function flipCard() {
        if (chosenCards.length != 2) {
            let cardId = this.getAttribute('data-id');
            if (this.getAttribute('src') != 'images/blank.jpeg') {
                chosenCards.push(cardsList[cardId].name);
                chosenCardsId.push(cardId);
                this.setAttribute('src', cardsList[cardId].image);
                if (chosenCards.length == 2) {
                    setTimeout(checkForMatch, 400);
                }
            }
        }
    }

    function checkForMatch() {
        let attempts = attemptsHolder.textContent++
        let cards = document.querySelectorAll('img')
        var firstCard = chosenCardsId[0];
        var secondCard = chosenCardsId[1];
        if (chosenCards[0] == chosenCards[1]) {
            let found = foundHolder.textContent++
            cards[firstCard].setAttribute('src', 'images/blank.jpeg');
            cards[secondCard].setAttribute('src', 'images/blank.jpeg');
        } else {
            cards[firstCard].setAttribute('src', 'images/placeholder.jpeg');
            cards[secondCard].setAttribute('src', 'images/placeholder.jpeg');
        }
        chosenCards = [];
        chosenCardsId = [];
        if (foundHolder.textContent == cardsInGame) {
            document.querySelector('p').textContent = `Congratulations ${name}, You Won!! 🎊🎊. Your total attempts were ${attempts}`
        }
    }

    initiateBoard()
})