// POKEMON API => https://pokeapi.co
// Useful Documentation links:
// https://pokeapi.co/docs/v2.html#pokemon
// https://pokeapi.co/docs/v2.html/#moves

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// import Secret from "./Secrets/secret.js";
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

// console.log(Secret.GoogleSearchApiKey)

let pokeHistory = [];

document.addEventListener('DOMContentLoaded', async () => {
    const start = Date.now();
    await getPokemon();
    console.log(`Time: ${Date.now() - start} ms`);

    // Each time getPokemon button gets clicked => Display two new Pokemon
    document.querySelector('#get-pokemon-btn').addEventListener('click', async () => {
        await getNewPokemon();
    })

    document.querySelector('#battle-btn').addEventListener('click', () => {
        battlePokemon();
    })
})

// Makes API call and then gets two Pokemon Object
const getPokemon = async () => {
    // Call PokeAPi twice to get two pokemon object
    const randomNumberOne = getUniqueNumber(pokeHistory, 807) + 1;
    const randomNumberTwo = getUniqueNumber(pokeHistory, 807) + 1;

    // For each pokemon display: 
    // Name, Sprite, Base HP stat, Name & PP of 4 Pokemon moves (1st four or random)
    const pokemonOne = await makeApiCall(randomNumberOne);
    const pokemonTwo = await makeApiCall(randomNumberTwo);
    displayPokemonData(pokemonOne);
    displayPokemonData(pokemonTwo);
}

const getNewPokemon = async () => {
    document.querySelector('.data').innerHTML = '';
    const start2 = Date.now();
    await getPokemon();
    console.log(`Time to get new Pokemons: ${Date.now() - start2} ms`);
}

// Make two Pokemon's battle and returns winner
const battlePokemon = () => {
    const randomNumber = Math.random();
    const battleResult = document.createElement('p');
    const battleHistory = document.querySelector('.battleHistory');
    const pokemonOne = document.querySelectorAll('.pokemon-name')[0].innerText;
    const pokemonTwo = document.querySelectorAll('.pokemon-name')[1].innerText;

    if (randomNumber < .5) {
        battleResult.innerText = `${pokemonOne} defeated ${pokemonTwo}`;
        battleHistory.appendChild(battleResult);
        getNewPokemon();
    } else {
        battleResult.innerText = `${pokemonTwo} defeated ${pokemonOne}`
        battleHistory.appendChild(battleResult);
        getNewPokemon();
    }
}

// Each time battle button gets clicked => One pokemon randomly selected as winner
// And adds description of fight to battleHistory

// Random Number generator that takes in account number histroy and max number from 0 - max (not inclusive)
const getUniqueNumber = (history, max) => {
    const ranNum = Math.floor(Math.random() * max);
    if (!history.includes(ranNum)) {
        history.push(ranNum);
        return ranNum;
    } else {
        return getUniqueNumber(history, max);
    }
}

const makeApiCall = async (ranNum) => await axios.get(`https://pokeapi.co/api/v2/pokemon/${ranNum}`);

const makeMovesApiCall = async (url) => await axios.get(url);

const displayPokemonData = async (data) => {
    const pokeContainer = document.createElement('div');
    const name = document.createElement('h3');
    name.setAttribute('class', 'pokemon-name');
    const img = document.createElement('img');
    const hp = document.createElement('p');
    const moves = document.createElement('p');

    name.innerText = data.data.name;
    img.src = data.data.sprites.front_shiny;
    hp.innerText = `HP: ${data.data.stats[5].base_stat}`;
    moves.innerText = 'Moves:';

    const container = document.querySelector('.data');

    pokeContainer.appendChild(name);
    pokeContainer.appendChild(img);
    pokeContainer.appendChild(hp);
    pokeContainer.appendChild(moves);

    // Add randomly chosen moves right under 'Moves:'
    let movesHistory = [];

    for (let i = 0; i < 4; i++) {
        const movesIndex = getUniqueNumber(movesHistory, data.data.moves.length);
        const move = document.createElement('p');
        const chosenMove = data.data.moves[movesIndex];
        const moveUrl = chosenMove.move.url;

        const movePowerPoints = await makeMovesApiCall(moveUrl);

        move.innerText = `${chosenMove.move.name} PP: ${movePowerPoints.data.pp}`;
        pokeContainer.appendChild(move);
    }

    container.appendChild(pokeContainer);
}