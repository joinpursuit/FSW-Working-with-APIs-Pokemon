document.addEventListener('DOMContentLoaded', () => {
    setupButtonListeners()
})
const setupButtonListeners = () => {
    console.log('settin up button listeners')
    const getPokebtn = document.querySelector('#getPoke')
    getPokebtn.addEventListener('click', fetchTwoPokemon)

    const battlePokebtn = document.querySelector('#battlePoke')
    battlePokebtn.addEventListener('click', battlePoke)
}
function fetchTwoPokemon() {
    console.log('fetch pokemn was called')
    fetchSinglePoke();
    fetchSinglePoke();
}

function fetchSinglePoke() {
    const id = generateRandPokeId();
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    console.log('fetch single', id)

    fetch(url)
        .then(response => response.json())
        .then(pokemon => {
            let moves = pokemon.moves
            for (let move = 0; move < 5; move++) {
                let moveUrl = moves[move].move.url
                fetchMove(moveUrl, pokemon)
                console.log(moveUrl)
            }
            console.log('------------------')
            displayPoke(pokemon)
        })
}

const fetchMove = (url, pokemon) => {
    fetch(url)
        .then(response => response.json())
        .then(move => {
            displayMove(move, pokemon)
        })

}
const displayMove = (move, pokemon) => {
    const pokeCard = document.querySelector(`#${pokemon.name}`)
    const movesList = pokeCard.querySelector('.moves-list');

    const moveLi = document.createElement('li')
    moveLi.innerText = move.name + 'PP:' + move.pp

    movesList.appendChild(moveLi)
    // console.log('pokeCadrd', pokeCard.id)
    // console.log('movesList', movesList.id)
}


function displayPoke(pokemon) {
    console.log("pokemon", pokemon)
    const pokeCard = document.createElement('div');
    pokeCard.id = pokemon.name;


    const name = document.createElement('h2')
    name.innerText = pokemon.name;

    const sprite = document.createElement('img')
    sprite.src = pokemon.sprites.front_default;

    console.log("sprite", sprite)

    const hp = document.createElement('h3')
    hp.innerText = pokemon.stats[5].base_stat;

    const moves = document.createElement('div')
    const movesHeader = document.createElement('h3')
    movesHeader.innerText = 'moves:'

    const movesList = document.createElement('ul')
    moves.appendChild(movesHeader)
    moves.appendChild(movesList)
    movesList.classList.add('moves-list')

    pokeCard.appendChild(name)
    pokeCard.appendChild(sprite)
    pokeCard.appendChild(hp)
    pokeCard.appendChild(moves)

    const arena = document.querySelector('#arena')
    arena.appendChild(pokeCard)
}

const battlePoke = () => {
    let arena = document.querySelector('#arena')
    let winner = pickWinner()
    let loser = winner === 2 ? 1 : 2;
    // if (winner === 1) {
    //     loser = 0; 
    // } else {
    //     loser = 1
    // }

    let winnerPokemon = arena.childNodes[winner]
    let loserPokemon = arena.childNodes[loser]
    console.log(loserPokemon.innerHTML)
    console.log(arena.childNodes)
    // winnerPokemon.style.backgroundColor = 'yellow'
    console.log('the winner is ', winner)
    let footer = document.querySelector('#footer')
    let battleResult = document.createElement('p')
    battleResult.innerText = winnerPokemon.id + " defeats " + loserPokemon.id;

    footer.appendChild(battleResult)
    console.log("battle pokemon was called WINNER IS ", winner)
}
const pickWinner = () => {
    const coinFlip = getRandomNumberInRange(0, 3)
    return coinFlip;


}
function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * ((max - min) + min))
}


const generateRandPokeId = () => {
    const MIN = 1
    const MAX = 809
    const id = Math.floor(Math.random() * MAX) + MIN;
    return id
}
console.log(generateRandPokeId())