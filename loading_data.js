// document.addEventListener('DOMContentLoaded', () => {
//     let getPokemonButton = document.querySelector("#get")
//     getPokemonButton.addEventListener('click', getPokemon)
// })



// const getRandomNum = () => {
//     let randomNum = Math.floor((Math.random() * 809) + 1)
//     return randomNum
// }


// const getPokemon = () => {
//     let url1 = `https://pokeapi.co/api/v2/pokemon/${getRandomNum()}`
//     let url2 = `https://pokeapi.co/api/v2/pokemon/${getRandomNum()}`
    
//     fetch(url1)
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//     let div = document.querySelector("#data")
//     let name = data.name 
//     let pokeName = document.createElement('p')
//     pokeName.innerText = name
//     div.appendChild(pokeName)
//     })
    
//     fetch(url2)
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//     let div = document.querySelector("#data")
//     let name = data.name 
//     let pokeName = document.createElement('p')
//     pokeName.innerText = name
//     div.appendChild(pokeName)
//     })

// }

// const displayPokeInfo = (data) => {
//     let div = document.querySelector("#data")
//     let name = data.name 
//     let pokeName = document.createElement('p')
//     pokeName.innerText = name
//     div.appendChild(pokeName)
// }


/* 
Tasks to do with Javascript:
-Listen for button clicks
-random pokemon picker
-fetch pokemon 
-get request to API
-get pokemon move's PP
-get request to API
-create pokemon cards/display pokemon
-battle pokemon
-random winner picker (coin flip)
-update battle history
*/

document.addEventListener('DOMContentLoaded', () => {
    // Code that needs/touches the DOM
    setupButtonListeners()
})

// Listen for button clicks
const setupButtonListeners = () => {
  const getPokemonBtn = document.querySelector("#get-pokemon-btn")
  getPokemonBtn.addEventListener('click', fetchTwoRandomPokemon)
  
  const battlePokemonBtn = document.querySelector("#battle-pokemon-btn")
  battlePokemonBtn.addEventListener('click', battlePokemon)
}


const fetchTwoRandomPokemon = () => {
    console.log('fetch two pokemon was called')
    cleanArena()
    fetchSinglePokemon()
    fetchSinglePokemon()
}

const fetchSinglePokemon = () => {
    const pokemonId = pickRandomPokemonId();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    fetch(url)
    .then(response => response.json())
    .then(pokemon => {
        let moves = pokemon.moves
        for (let move = 0; move < 4; move++){
            let moveUrl = moves[move].move.url
            fetchMove(moveUrl, pokemon)
        }
        displayPokemonCard(pokemon)   
    })
}

const fetchMove = (url, pokemon) => {
  fetch(url)
  .then(response => response.json())
  .then((move) => {
      displayMove(move, pokemon)
  })
}

const displayMove = (move, pokemon) => {
  const pokemonCard = document.querySelector(`#${pokemon.name}`)
  const movesList = pokemonCard.querySelector('.moves-list')
  

  const moveLi = document.createElement('li')
  moveLi.innerText = move.name + 'PP: ' + move.pp

  movesList.appendChild(moveLi)
}


const displayPokemonCard = (pokemon) => {

   const pokemonCard = document.createElement('div');
   pokemonCard.id = pokemon.name;

   const name = document.createElement('h2');
   name.innerText = pokemon.name;

   const sprite = document.createElement('img');
   sprite.src = pokemon.sprites.front_default;

   const hp = document.createElement('h3')
   hp.innerText = "HP: " + pokemon.stats[5].base_stat;

   const moves = document.createElement('div')
   const movesHeader = document.createElement('h3')
   movesHeader.innerText = "Moves: "

   const movesList = document.createElement('ul')
   movesList.classList.add('moves-list')

   moves.appendChild(movesHeader)
   moves.appendChild(movesList)

   pokemonCard.appendChild(name)
   pokemonCard.appendChild(sprite)
   pokemonCard.appendChild(hp)
   pokemonCard.appendChild(moves)
   
   const arena = document.querySelector("#arena")
   arena.appendChild(pokemonCard)

}

const cleanArena = () => {
  const arena = document.querySelector('#arena')
  arena.innerHTML = "";
}

const battlePokemon = () => {
let arena = document.querySelector('#arena')
let winner = pickWinner()
let defeated = winner === 1 ? 0 : 1

let winnerPokemon = arena.childNodes[winner]
let defeatedPokemon = arena.childNodes[defeated]

let footer = document.querySelector('#footer')
let battleResult = document.createElement('p')

battleResult.innerText = winnerPokemon.id + ' defats ' + defeatedPokemon.id;
footer.appendChild(battleResult)

 console.log('battle pokemon was called. Winner is: ', winner)
}

const pickWinner = () => {
 const coinFlipResult = getRandomNumberInRange(0, 2)
 return coinFlipResult
}

const getRandomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * ((max - min) + min))
}

// range from 1 to 809
// MIN & MAX are 'magic numbers'
const pickRandomPokemonId = () => {
    const MIN = 1 
    const MAX = 809 
    const id = getRandomNumberInRange(MIN, MAX + 1)
    return id 
   }

