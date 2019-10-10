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
    // console.log(moves)
    // console.log(pokemonId)
        for(let move = 0; move < 5; move++){
            let moveUrl = moves[move].move.url
            // console.log(moveUrl)
            fetchMove(moveUrl, pokemonId.name);
        }
        displayPokemon(pokemonId)
        })
    }
    
    
        const fetchMove = (url, pokemonName) => {
            fetch(url)
            .then(response => response.json())
                .then(move => {
                    // console.log(move);
                    
                    displayMove(move, pokemonName)
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
            // moveList.classList.add = ".moves-list"
            moveList.setAttribute("id", pokemon.name)
           
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
                arena.innerText = ' ';
            }
        
    
    
        const displayMove = (move, pokemonName) => {
            let arena = document.querySelector(`#${pokemonName}`)
            // console.log(pokemonName)
            let movesLi = document.createElement('li')
            
            movesLi.innerText = move.name;
    
            arena.appendChild(movesLi);
            
        }
    
    const startBattle = () => {
        let arena = document.querySelector(`#arena`)
        let arr = []
        let number = Math.floor((Math.random() * 2))
        
        let firstPokemon = arena.childNodes[1].id;
        let secondPokemon = arena.childNodes[2].id;
    
        arr.push(firstPokemon, secondPokemon)
        
    
        let winner = arr.splice(number, 1)[0]
    
        let defeated = arr[0]
        
      
    
        console.log(winner)
        console.log(defeated)
        
        let footer = document.querySelector("#battleHistory")
        let battleResults = document.createElement('p')
        battleResults.innerText = winner + " deafeats " + defeated
        
        footer.appendChild(battleResults)
        // console.log(battleResults)
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