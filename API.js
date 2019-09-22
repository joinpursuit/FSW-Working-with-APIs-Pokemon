document.addEventListener("DOMContentLoaded", () => {
setupButtonListeners();
})

// Listen for button clicks
const setupButtonListeners = () => {
    const getPokemonbutton = document.querySelector("#getPokemonbutton")
    getPokemonbutton.addEventListener('click', fetchTwoRandomPokemon)

    const startBattle = document.querySelector("#battleButton")
    startBattle.addEventListener("click", startBattle)
}

const fetchTwoRandomPokemon = () => {
    cleanArena();
    fetchSinglePokemon();
    fetchSinglePokemon();
}

const fetchSinglePokemon = () => {
    const pokemonId = randomPokemon();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((pokemonId) => {
    let moves = pokemonId.moves

    for(let move = 0; move < 5; move++){
        let moveUrl = moves[move].move.url
        fetchMove(moveUrl, pokemonId);
    }
    displayPokemon(pokemonId)
    })
}


    const fetchMove = (url) => {
        fetch(url)
        .then(response => response.json())
            .then(move => {
                console.log(move);
                
                // displayMove()
            })
    }

    const displayPokemon = (pokemon) => {
        const pokemonCard = document.createElement('div');
        pokemonCard.id = pokemon.name;
        
        const name = document.createElement('h2');
        name.innerText = pokemon.name;
    
        const sprite = document.createElement('img');
        sprite.src = pokemon.sprites.front_default;
    
        const hp = document.createElement('h3');
        hp.innerText = pokemon.stats[5].base_stat;
    
        const moves = document.createElement('div');
    
        const movesHeader = document.createElement('h3');
        movesHeader.innerText = "Moves: "
    
        const moveList = document.createElement('ul');
        moveList.classList.add = ".moves-list"
       
        moves.appendChild(movesHeader)
        moves.appendChild(moveList)
        pokemonCard.appendChild(name)
        pokemonCard.appendChild(sprite)
        pokemonCard.appendChild(hp)
        pokemonCard.appendChild(moves)
        
        const arena = document.querySelector('#arena')
        arena.appendChild(pokemonCard)
        }
    
        const cleanArena = () => {
            const arena = document.querySelector("#arena")
            arena.innerHTML = ' ';
        }
    

    const getRandomNumber = (MIN, MAX) => {
        return Math.floor(Math.random() * ((MAX - MIN) + MIN ));
        
}

    //range from 1 - 809 
    const randomPokemon = () =>  {
        const MAX = 809;
        const MIN = 1;
        const id = getRandomNumber(MIN, MAX + 1);
        return id;
    }

    // const displayMove = (pokemon) => {
        
    // }

function startBattle(){
    let arena = document.querySelector(`#arena`)
    let winner = pickWinner()

    let defeated = winner == 1 ? 0 : 1
    

    let winnerPokemon = arena.childNodes[winner];
    let defeatedPokemon = arena.childNodes[defeated];


    let footer = document.querySelector("#BattleHistory")
    let battleResults = document.createElement('p')
    battleResults.innerText = winnerPokemon + " deafeats " + defeatedPokemon
    
    footer.appendChild(battleResults)
}

    const pickWinner = () => {
    const winnerIndex = getRandomNumber(0, 2)
    return winnerIndex
}
