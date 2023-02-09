const FRONT = 'card_front';
const BACK = 'card_back';
const CARD = 'card';
let techs = [
    'react',
    'c',
    'php',
    'node',
    'js',
    'jquery',
    'html',
    'css',
    'electron',
    'firebase'
]

let cards = null
let verify = ['', '', '', '']
let count = 0

startGame();

function startGame() {
    let cards = createCardsfromTechs(techs)
    shuffleCards(cards)
    //console.log(cards)
    initializeCards(cards)
}

function initializeCards(cards) {
    let gameBoard = document.querySelector('#gameBoard')

    cards.forEach(card => {
        let cardElement = document.createElement('div')
        cardElement.id = card.id
        cardElement.classList.add(CARD)
        cardElement.dataset.icon = card.icon;
        cardElement.dataset.status = false;

        createcardContent(card, cardElement)
        //'flippedCard' -> game.js 
        cardElement.addEventListener('click', flippedCard)
        gameBoard.appendChild(cardElement)
    }
    )
}

function createcardContent(card, cardElement) {
    createCardFace(BACK, card, cardElement)
    createCardFace(FRONT, card, cardElement)
}

function createCardFace(face, card, cardElement) {
    let cardElementFace = document.createElement('div')
    cardElementFace.classList.add(face)

    if (face == FRONT) {
        let iconElement = document.createElement('img')
        iconElement.src = "../img/" + card.icon + ".png"
        iconElement.classList.add('img')
        cardElementFace.appendChild(iconElement)
    } else {
        let iconElementBack = document.createElement('img')
        iconElementBack.src = "../img/caveiradoprog.png"
        iconElementBack.classList.add('img')
        cardElementFace.appendChild(iconElementBack)

    }
    cardElement.appendChild(cardElementFace)
}
function shuffleCards(cards) {
    let currentIndex = cards.length
    let radomIndex = 0

    while (currentIndex !== 0) {
        radomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        [cards[radomIndex], cards[currentIndex]] = [cards[currentIndex], cards[radomIndex]]
    }
}

function createCardsfromTechs(techs) {
    let cards = []

    for (let tech of techs) {
        cards.push(createPairFromTech(tech));
    }
    return cards.flatMap(pair => pair)
}

function createPairFromTech(tech) {
    return [{
        id: createId(tech),
        icon: tech,
        flipped: false

    }, {
        id: createId(tech),
        icon: tech,
        flipped: false
    }]
}

function createId(tech) {
    return tech + parseInt(Math.random() * 1000)
}

function restart() {
    location.reload()
}

function allCardsFlipped() {

    if (count == techs.length) {
        setTimeout(() => {
            document.getElementById('gameover').style.display = 'flex'
        }, 500);
    }
}
