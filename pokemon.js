// task to do with JS:
//     -listen for button click
//     -Random pokemon picker   
//          -random ID
//     -get/fetch pokemon
//         -GET request to API
//     -get/fetch pokemon moves PP 
//         -GET request to API
//     -battle pokemon
//     -create pokemon cards/display pokemon 
//     -random winner picker(coin flip)
//     -Update battle history


document.addEventListener('DOMContentLoaded', () => {
    //code that needs/touches the DOM
    setupButtonListener()
})


const setupButtonListener = () => {
    const getPokemonBtn = document.querySelector('#get-pokemon-btn')
    getPokemonBtn.addEventListener('click', fetchTwoRandomPokemon)

    const battlePokemonBtn = document.querySelector("#battle-pokemon-btn")
    battlePokemonBtn.addEventListener('click', battlePokemon)
}

const fetchTwoRandomPokemon = () => {
    cleanArena()
    fetchSinglePokemon()
    fetchSinglePokemon()
}

const fetchSinglePokemon = () => {
    const pokemonId = pickRandomPokemonId();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`


    fetch(url)
        .then(response =>  response.json())
        .then( pokemon => {
            let moves = pokemon.moves
            for(let i = 0; i < 4; i++){
                let moveUrl = moves[i].move.url
                fetchMove(moveUrl, pokemon)
            }
            displayPokemonCard(pokemon)
            
        } )
}   

const fetchMove = (url, pokemon) => {
    fetch(url)
    .then(response => response.json())
    .then(move => {
        displayMove(move, pokemon)
        
    })
}

const displayMove = (move, pokemon) => {
    const pokemonCard = document.querySelector(`#${pokemon.name}`)
    const movesList = pokemonCard.querySelector('.moves-list')
    const moveLi = document.createElement('li')
    moveLi.innerText = move.name + ' PP:' + move.pp 
    movesList.appendChild(moveLi)
    
}

const displayPokemonCard = (pokemon) => {
    const pokemonCard = document.createElement('div')
    pokemonCard.classList.add("pokemon-card")
    pokemonCard.id = pokemon.name

    const name = document.createElement('h2')
    name.innerText = pokemon.name;

    const sprite = document.createElement('img')
    sprite.src = pokemon.sprites.front_default;

    const hp = document.createElement('h3')
    hp.innerText = "HP:" + pokemon.stats[5].base_stat;

    const moves = document.createElement('div')
    moves.classList.add("moves")

    const movesHeader = document.createElement('h3')
    movesHeader.innerText = "Moves"

    const movesList = document.createElement('ul')
    movesList.classList.add('moves-list')

    moves.appendChild(movesHeader)
    moves.appendChild(movesList)

    pokemonCard.appendChild(name)
    pokemonCard.appendChild(sprite)
    pokemonCard.appendChild(hp)
    pokemonCard.appendChild(moves)

    const arena = document.querySelector('.arena')
    arena.appendChild(pokemonCard)

    // arena.innerHTML = `
    //     <div id=${pokemon.name}> 
    //         <h2> ${pokemon.name}</h2>
    //         <img src=${pokemon.sprites.front_default} />
    //         <h3> ${pokemon.stats[5].base_stat} </h3>
    //     </div>
    // `
}

const cleanArena = () => {
    const arena = document.querySelector('.arena')
    arena.innerHTML = "";
}

const battlePokemon = () => {
    console.log("in battle")
    
    let arena = document.querySelector('.arena')
    let winner = pickWinner()
    let defeated = winner == 1 ? 0 : 1
 
    let winnerPokemon = arena.childNodes[winner]
    let defeatedPokemon = arena.childNodes[defeated]

    let footer = document.querySelector('.footer')
    let battleResult = document.createElement('p')

    battleResult.innerText = winnerPokemon.id + " defeats " + defeatedPokemon.id

    footer.appendChild(battleResult)
   
}

const pickWinner = () => {
    const coinFlipResult = getRandomNumberInRange(0,2)
    return coinFlipResult
}

const getRandomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * ((max - min) + min))
}

const pickRandomPokemonId = () => {
    const MIN_Pokemon_ID = 1
    const MAX_Pokemon_ID = 809
    const id = getRandomNumberInRange(MIN_Pokemon_ID, MAX_Pokemon_ID +1)
    return id
}

