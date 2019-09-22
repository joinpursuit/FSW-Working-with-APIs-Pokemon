// document.addEventListener("DOMContentLoaded", () => {
//     let button = document.getElementById("poke-gen");
//     button.addEventListener("click", getPokemon)
// })
// const getRandomNumber = () => {
//     let randomNumber = Math.floor(Math.random() * 964 - 1);
//     return randomNumber
// }

// const getPokemon = () => {
//     console.log(getRandomNumber())
//     let url = "https://pokeapi.co/api/v2/pokemon/?limit=964"
//     axios
//         .get(url)
//         .then((response) => {
//             let pokemon1 = response.data.results[getRandomNumber()]
//             console.log(pokemon1.name)
//             console.log(pokemon1.url)

//         })
//         .catch(err => {
//             console.log("Oops, there was an error please try again")
//         })
//     // console.log(pokemonName)
    

// pokemonName = (pokeName) => {
//     let battleContainer = document.querySelector(".data")
//     let name = document.createElement('p')
//     name.innerText = pokeName
//     document.battleContainer.appendChild(pokeName);
// }

// pokemonMove = (answer) => {
//     let jokeAnswer = document.getElementById('answer');
//     jokeAnswer.innerText = answer;
//     document.body.appendChild(jokeAnswer)

// }


// }

// //     renderPokemon()

// //     let battleContainer = document.querySelector(".data");
// //     let nameContainer = document.createElement('p')
// //     nameContainer.innerText = pokemonName

// //     battleContainer.appendChild(nameContainer)
// // }

document.addEventListener("DOMContentLoaded", () => {
    setupButtonListeners()
})

const setupButtonListeners = () => {
    const getPokemonButton = document.querySelector('#get-pokemon-btn')
    getPokemonButton.addEventListener("click", fetchTwoRandomPokemon)
    const battlePokemonButton = document.querySelector('#battle-pokemon-btn')
    battlePokemonButton.addEventListener("click", battlePokemon)
}

const fetchTwoRandomPokemon = () => {
    console.log('fetch pokemon was called')
    cleanArena();
    fetchSinglePokemon();
    fetchSinglePokemon();
}

const fetchSinglePokemon = () => {
    const pokemonId = pickRandomPokemonId();
    console.log("fetch single pokemon  with id:", pokemonId)
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    fetch(url)
        .then(response => response.json())
        .then(pokemon => {
            let moves = pokemon.moves;
            for (let move = 0; move < 4; move++) {
                let moveUrl = moves[move].move.url
                fetchMove(moveUrl, pokemon)
                console.log(moveUrl)
            }
            console.log('------------------------')
            displayPokemonCard(pokemon)
        })
}

const fetchMove = (url, pokemon) => {
    fetch(url)
        .then(response => response.json())
        .then(move => {
            displayMove(move,pokemon)
        })
    //fetch()
    console.log('move url', url)
}

const displayMove = (move, pokemon) => {
    const pokemonCard = document.querySelector(`#${pokemon.name}`)
    const movesList = pokemonCard.querySelector('.moves-list');
    
    const moveLi = document.createElement('li')
    moveLi.innerText = move.name + ' PP:' + move.pp
    movesList.appendChild(moveLi)
    console.log('PokemonCard.id', pokemonCard.id)
}

const displayPokemonCard = (pokemon) => {
    const pokemonCard = document.createElement('div');
    pokemonCard.id = pokemon.name;

    const name = document.createElement('h2');
    name.innerText = pokemon.name;

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;

    const hp = document.createElement('h3');
    hp.innerText = "HP: " + pokemon.stats[5].base_stat;

    const moves = document.createElement('div');
    const movesHeader = document.createElement('h3');
    movesHeader.innerText = "Moves";
    const movesList = document.createElement('ul');
    movesList.classList.add('moves-list');
    moves.appendChild(movesHeader);
    moves.appendChild(movesList);

    const arena = document.querySelector('#arena')
    pokemonCard.appendChild(name)
    pokemonCard.appendChild(sprite)
    pokemonCard.appendChild(hp)
    pokemonCard.appendChild(moves)
    arena.appendChild(pokemonCard)
}

const cleanArena = () => {
    const arena = document.querySelector('#arena')
    arena.innerHTML = '';
}
const battlePokemon = () => {
    let arena = document.querySelector("#arena")
    let winner = pickWinner()
    let defeated;
    // = winner === 1 ? 0 : 1;
    if (winner === 1) {
        defeated = 0;
    } else {
        defeated = 1
    }

    let winnerPokemon = arena.childNodes[winner];
    let defeatedPokemon = arena.childNodes[defeated];

    // winnerPokemon.style.backgroundColor = "green"

    let footer = document.querySelector("#footer")
    let battleResult = document.createElement("p");
    battleResult.innerText = winnerPokemon.id + " defeats " + defeatedPokemon.id;
    footer.appendChild(battleResult)
    console.log('Winner is: ', winner)
}
const pickWinner = ()=>{
    const coinFlipResult = getRandomNumberInRange(0,2)
    return coinFlipResult
}

const getRandomNumberInRange=(min, max)=>{
    return  Math.floor(Math.random() * (max - min) + min)
}
// need function to return a random number from 1 to 809. 
// this is be the pokemons id #. 

const pickRandomPokemonId = () => {
    const max = 150;
    const min = 1;
    const id = Math.floor(Math.random() * (max - min) + min)
    return id
}
console.log(pickRandomPokemonId())


