/*
Task to do with JavaScript
-Listen for button clicks
-Random PokeMon picker

-Summon/Get/fetch PokeMon
    -GET request to Api
    -Create PokeMon cards/Display PokeMon

-Battle Pokemon
    -Random winner picker (coin flip)
    -Update Battle History
*/

document.addEventListener("DOMContentLoaded", ()=>{
    //code that needs/touches the Dom
    setupButtonListners()
})

// Listening for button clicks
function setupButtonListners(){
    //console.log("Buttons engaged");
    
    //getting pokemon
    const getPokemonButton = document.querySelector("#Select")
    getPokemonButton.addEventListener('click', fetchTwoPokemon)
    
    //battling pokemon
    const BattlePokemonButton = document.querySelector("#battle")
    BattlePokemonButton.addEventListener('click',battlePokemon)
}



function fetchTwoPokemon(){
    console.log('fetch pokemn was called')
    fetchSinglePokemon();
    fetchSinglePokemon();
}

function fetchSinglePokemon(){
    //console.log('fetch single pokemon was called')
    const id = generateRandomPokemon();
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    console.log("fetch single pokemon with id: ", id)
    fetch(url).then(repsone => repsone.json())
    .then(pokemon => {
        let moves = pokemon.moves
        for(let move = 0; move < 4;move ++){
            let moveUrl = moves[move].move.url
            fetchMoves(moveUrl,pokemon)
        }
        console.log("---------")
        displayPokemonCard(pokemon)

    })
    
}


function fetchMoves(url,pokemon){ 
    fetch(url)
    .then(response =>{
        response.json()
        .then(move =>{
            displayMove(move,pokemon)
            // console.log(move);
        })
    })
    
}

function displayMove(move,pokemon){
    const pokemonCard = document.querySelector(`#${pokemon.name}`);
    const movesList = pokemonCard.querySelector('.Moves-List')
    const moveLi = document.createElement('li');
    moveLi.innerText = move.name + " PP: " + move.pp;
    movesList.appendChild(moveLi);

}

function displayPokemonCard(pokemon){
    console.log('called display pokemon')
    const pokeCard = document.createElement('div')
    pokeCard.id = pokemon.name

    const name = document.createElement('h2')
    name.innerText = pokemon.name

    const sprite = document.createElement('img')
    sprite.src = pokemon.sprites.front_default

    const hp = document.createElement('h3')
    hp.innerText = "HP: " + pokemon.stats[5].base_stat

    const moves = document.createElement('div')
    const movesHeader = document.createElement('h3')
    movesHeader.innerText = "Moves"
    
    const movesList = document.createElement("ul")
    movesList.classList.add("Moves-List");
    moves.appendChild(movesHeader)
    moves.appendChild(movesList)

    pokeCard.appendChild(name)
    pokeCard.appendChild(sprite)
    pokeCard.appendChild(hp)
    pokeCard.appendChild(moves)

    const arena = document.querySelector('#arena')
    arena.appendChild(pokeCard)


}

function battlePokemon(){
    let arena = document.querySelector('#arena')
    let winner = pickWinner()
    let defeated = winner === 1? 0 : 1;
    let winnerpokemon = arena.childNodes[winner];
    let defeatedpokemon = arena.childNodes[defeated];

    winnerpokemon.style.backgroundColor = "green"
    console.log('winner equal: ' + winner)

    let footer = document.querySelector('#footer')
    let battleResult = document.createElement('p')
    battleResult.innerText = winnerpokemon.id
    footer.appendChild(battleResult)
    console.log('The Winner is: ', winnerpokemon.id)
    console.log("sorry ", defeatedpokemon.id,"lost")
}



function pickWinner(){
 let coinFlipResult = getRandomNumberInRange(0,2)
 return coinFlipResult;
}

function getRandomNumberInRange(min, max){
    return Math.floor(Math.random() * ( (max - min) + min) )
}

//range from 1 - 809
function generateRandomPokemon(){
    const MAX = 809;
    const MIN = 1;
    const id = Math.floor(Math.random() * (MAX - MIN) + MIN)
    return id;
}

//console.log(generateRandomPokemon());