document.addEventListener("DOMContentLoaded", () => {})

const getPokemon = async () => {
    let poke1 = await generatePokemon();
    displayPokemon1(poke1)
    let poke2 = await generatePokemon();
    displayPokemon2(poke2)
}
const randomNum = (max, min) => {
    let randomNum = Math.floor((Math.random() * max) + min) ;
    return randomNum
}
const generatePokemon = async () => {
    let randomPokeNum = randomNum(809, 0);
try {
    let url = `https://pokeapi.co/api/v2/pokemon/${randomPokeNum}`
    myPokemon = await axios.get(url);
    return myPokemon
} catch (err) {
    console.log("Your opponent got away!", err)
}}
const createPokemonCard = async (pokemonObj, div) => { 
    let pokemon = pokemonObj.data
    let pokeName = document.createElement("h2");
    let pokeImage = document.createElement("img");
    let pokeMoves = document.createElement("ul")
        pokeName.innerText = pokemon.name;
        pokeImage.src = pokemon.sprites.front_default;
    let pokeMove = await getMoves(pokemon)
    let moveLi = document.createElement("li")
        moveLi.innerText = `${pokeMove.name}, ${pokeMove.pp}`
    div.appendChild(pokeName);
    div.appendChild(pokeImage);
    div.appendChild(pokeMoves);
    pokeMoves.appendChild(moveLi);
} 
const displayPokemon1 = (pokemonObj) => {
    let div1 = document.querySelector("#poke_one");
    createPokemonCard(pokemonObj, div1)
}
const displayPokemon2 = (pokemonObj) => {
    let div2 = document.querySelector("#poke_two")
    createPokemonCard(pokemonObj, div2)
}

const getMoves = async(pokemonObj) => {
    let moves = pokemonObj.moves;
    let randomPokeNum = randomNum(moves.length, 0);
    let movesUrl = pokemonObj.moves[`${randomPokeNum}`].move.url;
    let myMoveData = await axios.get(movesUrl);
    let moveObj = myMoveData.data
    return moveObj
}
const battlePokemon = () => {
console.log("FIGHT")
}