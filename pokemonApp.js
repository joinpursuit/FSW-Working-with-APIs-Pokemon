document.addEventListener('DOMContentLoaded', () => {
   setupButtons();
    
})

// setting up buttons to the DOM
const setupButtons = () =>{
    console.log("setting up buttons");
    let getPokemon = document.querySelector('#get-pokemon');
    let battle = document.querySelector('#battle');
    getPokemon.addEventListener('click', showBothPokemon );
    battle.addEventListener('click', battle);
}

// display both random pokemons for battle
const showBothPokemon = () =>{
    getPokemon1();
    getPokemon2();
}

// displays pokemon 1 for battle
const getPokemon1=  () =>{

    let randomPoke1 = Math.floor(Math.random() * (810-1));
    console.log(randomPoke1)
    let firstPoke = `https://pokeapi.co/api/v2/pokemon/${randomPoke1}` ;
    console.log(firstPoke)


    fetch(firstPoke)
    .then((response)=>{
        // console.log(response)
        return response.json();
    }).then((pokemon)=>{
        // let moves = pokemon.moves; 
        // for(let move = 0; move <=4; move++){
        //     let moves = moves[move].move.url
        //     fetchMove(moves)
        // }
        displayPokemonCard(pokemon);
    }).catch((err)=>{
        console.log('Error!')
    })

// create a function to get 1 random move. then use a loop to 
    // const fetchMove = () =>{
    //     fetch()
    // }

// await axios.get(firstPoke).then((response)=>{
//     try{
//         let pokemon1 = response.data
//         console.log(response.data)
//     }catch(err){
//         console.log("the error was thrown", err)
//     }
// })
    
}
getPokemon1();



// displays pokemon 2 for battle
const getPokemon2 =  () =>{
    let randomPoke2 = Math.floor(Math.random() * (810-1));
    console.log(randomPoke2);
    let secondPoke = `https://pokeapi.co/api/v2/pokemon/${randomPoke2}`
    console.log(secondPoke)

    fetch(secondPoke)
    .then((response)=>{
        // console.log(response)
        return response.json();
    }).then((pokemon)=>{
        // console.log(pokemon)
        displayPokemonCard(pokemon);

    })
    // .catch((err)=>{
    //     console.log('Error!')
    // })
}
getPokemon2();

//creates the pokemon card with the api info
const displayPokemonCard = (pokemon) =>{
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
    movesHeader.innerText = "Moves";

    const movesList = document.createElement('ul');

    moves.appendChild(movesHeader);
    moves.appendChild(movesList);

    pokemonCard.appendChild(name);
    pokemonCard.appendChild(sprite);
    pokemonCard.appendChild(hp);
    pokemonCard.appendChild(moves);

    const arena = document.querySelector('#arena');

    arena.appendChild(pokemonCard);
}
   


// const battle = () =>{

// }