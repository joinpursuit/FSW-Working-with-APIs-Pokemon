document.addEventListener('DOMContentLoaded', () => {
    //1. setup the button for the DOM to listen
        setupButtonsListeners();
        fetchTwoRandomPokemon();
    })
    //2. Listen for button clicks
    const setupButtonsListeners = () => {
        // console.log('setting up button listeners')
        const getPokemonBtn = document.querySelector('#get-pokemon-btn')
        getPokemonBtn.addEventListener('click', fetchTwoRandomPokemon)
    
        const battlePokemonBtn = document.querySelector('#battle-pokemon-btn')
        battlePokemonBtn.addEventListener('click', battlePokemon)
    }
    
    const fetchTwoRandomPokemon = () => {
        //console.log('fetch single pokemon was called')
        cleanArena();
        fetchSinglePokemon();
        fetchSinglePokemon();
    }
    //3. Need random ids for pokemon range from 1 to 809.
    const pickRandomPokemonId = () => {
        const min_Pokemon_Id = 1
        const max_Pokemon_Id = 809
        const pokemonid = Math.floor(Math.random() * ((max_Pokemon_Id + 1) - min_Pokemon_Id) + min_Pokemon_Id)
        return pokemonid
    }
    console.log(pickRandomPokemonId());
    
    //4. fetch for the pokemon
    const fetchSinglePokemon = () => {
        const pokemonid = pickRandomPokemonId();
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonid}/`
        fetch(url)
        .then(response => response.json())
        .then(pokemon => {
            let moves = pokemon.moves
            
            for (let move = 0; move < 4; move++) {
                let moveUrl = moves[move].move.url
                fetchMove(moveUrl, pokemon)
            }
            displayPokemonCard(pokemon)
        })
    }
    const fetchMove = (url, pokemon) => {
        fetch(url)
        .then(response => response.json())
        .then(move => {
            //want to display the move for that specified pokemon
            displayMove(move, pokemon)
            //console.log(move)
        })
        //console.log('move url', url)
        
        const displayMove = (move, pokemon) => {
            const pokemonCard = document.querySelector(`#${pokemon.name}`)
            const movesList = pokemonCard.querySelector('.moves-list')
            console.log("movesList", movesList)
            const moveLi = document.createElement('li')
            moveLi.innerText = move.name + ' PP: ' + move.pp;
            console.log("moveLi", moveLi)
            
            movesList.appendChild(moveLi)
            // console.log('pokemonCard.id', pokemonCard.id)
            // console.log('movesList', movesList)
        }
    }
    //5. create function to display pokemon to create the pokemon card
    const displayPokemonCard = (pokemon) => {
        const pokemonCard = document.createElement('div');
        pokemonCard.id = pokemon.name
        
        const name = document.createElement('h2')
        name.innerText = pokemon.name;
        
        const sprite = document.createElement('img');
        sprite.src = pokemon.sprites.front_default;
        
        const hp = document.createElement('h3');
        hp.innerText = "HP: " + pokemon.stats[5].base_stat;
        
        const moves = document.createElement('div')
        
        const movesHeader = document.createElement('h3');
        movesHeader.innerText = "Moves:"
        
        const movesList = document.createElement('ul')
        moves.appendChild(movesHeader)
        moves.appendChild(movesList)
        movesList.classList.add ('moves-list')
        
        
        pokemonCard.append(name)
        pokemonCard.append(sprite)
        pokemonCard.append(hp)
        pokemonCard.append(moves)
        
        const arena = document.querySelector('#arena')
        arena.appendChild(pokemonCard)
    }
    
    //6. replace pokemon so it will not stack
    const cleanArena = () => {
        const arena = document.querySelector('#arena')
        arena.innerHTML = "";
    }
    //7. setup the battle and display winner and loser
    
    const pickWinner = () => {
        const coinFliResult = getRandomNumberInRange(0, 2)
        return coinFliResult;
    }
    
    const getRandomNumberInRange = (min, max) => {
        return Math.floor(Math.random() * ((max - min) + min))
    }
    
    const cleanBattleHistory = () => {
        const battleText = document.querySelector('#battle-history')
        battleText.innerHTML = "";
    
    }
    const battlePokemon = () => {
       cleanBattleHistory()  
        let arena = document.querySelector('#arena')
        let winner = pickWinner()
        let defeated = winner === 1 ? 0 : 1
        
        let winnerPokemon = arena.childNodes[winner];
        let defeatedPokemon = arena.childNodes[defeated];
        
        let footer = document.querySelector('#battle-history')
        let battleResult = document.createElement('p')
        
        battleResult.innerText = winnerPokemon.id + " defeats " + defeatedPokemon.id;
        
        footer.appendChild(battleResult)
    }
    
    
    