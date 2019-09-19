// POKEMON API => https://pokeapi.co
// Useful Documentation links:
// https://pokeapi.co/docs/v2.html#pokemon
// https://pokeapi.co/docs/v2.html/#moves

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import  Secret from "./Secrets/secret.js";
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

// console.log(Secret.GoogleSearchApiKey)

let randomNumberArr = [];

document.addEventListener('DOMContentLoaded', async () => {
    const randomNumberOne = getRandomNumber();
    const randomNumberTwo = getRandomNumber();
    const pokemonOne = await makeApiCall(randomNumberOne);
    const pokemonTwo = await makeApiCall(randomNumberTwo);
    displayPokemonData(pokemonOne);
    displayPokemonData(pokemonTwo);
})

// Makes API call and then gets two Pokemon Object
const getPokemon = () => {
    // Call PokeAPi twice to get two pokemon object

    // For each pokemon display: 
    // Name, Sprite, Base HP stat, Name & PP of 4 Pokemon moves (1st four or random)



}

// Make two Pokemon's battle and returns winner
const battlePokemon = () => {

}

// Each time getPokemon button gets clicked => Display two new Pokemon

// Each time battle button gets clicked => One pokemon randomly selected as winner
// And adds description of fight to battleHistory

// Random Number generator from 1 - 808
const getRandomNumber = () => {
    // API for /pokemon/{id} => 1 - 807
    const ranNum = Math.floor(Math.random() * 807) + 1;
    randomNumberArr.push(ranNum);
    return ranNum;
}

const makeApiCall = async (ranNum) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${ranNum}`;
    const response = await axios.get(url);
    console.log(response.data);
    return response;
}

const displayPokemonData = (data) => {
    const pokeContainer = document.createElement('div');
    const name = document.createElement('h3');
    const img = document.createElement('img');
    const hp = document.createElement('p');
    const moves = document.createElement('p');
    const pp1 = document.createElement('p');
    const pp2 = document.createElement('p');
    const pp3 = document.createElement('p');
    const pp4 = document.createElement('p');

    name.innerText = data.data.name;
    img.src = data.data.sprites.front_shiny;
    hp.innerText = data.data.stats[5].base_stat;
    moves.innerText = 'Moves:';
    pp1.innerText
    const container = document.querySelector('.data');
    
    pokeContainer.appendChild(name);
    pokeContainer.appendChild(img);
    pokeContainer.appendChild(hp);
    pokeContainer.appendChild(moves);

    container.appendChild(pokeContainer);
}


