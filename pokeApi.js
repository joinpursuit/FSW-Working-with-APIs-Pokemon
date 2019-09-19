document.addEventListener('DOMContentLoaded', () => {
    let getPoke = document.querySelector('#getPoke')
    let battle = document.querySelector('#battleButton')

    getPoke.addEventListener('click', () => {
        getPokemon()
    })
    battle.addEventListener('click', () => {
        battlePokemon()
    })


})

//global array
let paokeArr = []

async function getPokemon() {
    replacePoke()
    const poke1 = await generatePoke()
    const poke2 = await generatePoke()
}
const battlePokemon = async () => {

}

//this function gets the pokemon information
async function generatePoke() {
    const randNum = await getRandomNum()

    //getting the pokemon from pokemon end point with random number
    const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randNum}`)

    console.log(poke.data.name);

    creatingCard(poke.data)

    return poke.data
}

//this function looks into the pokemon moves array and gets the url to 
// to the detailed information on the specific moves at the index position on the moves array
const getMoves = async (pokeInfo, index) => {
    //getting the moves of the pokemon generated
    let url = pokeInfo.moves[`${index}`].move.url;
    console.log(url);

    let movesInfo = await axios.get(url)

    return movesInfo.data;
}

//This function generates a random number
async function getRandomNum() {
    let randomNumber = Math.floor((Math.random() * 809) + 1);
    return randomNumber;
}

//this is a simple function teh brings the container over into the js
function getContainer() {
    const container = document.querySelector('#container')
    return container;
}

//function that will replace the pokemon the are already on the screen
function replacePoke() {
    const container = getContainer()
    // container.innerHTML = ''
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

//This function create the elements on the create that will hold the pokemon information
async function creatingCard(pokemon) {
    getContainer()

    //creating the elements that will hold the information on the pokemon
    const subContainer = document.createElement('div');
    subContainer.className = 'pokeContainer'
    const pokePic = document.createElement('img')
    const pokeName = document.createElement('p')
    pokeName.className = 'pokemonName'
    const pokeHp = document.createElement('p')
    const pokeMoves = document.createElement('p')
    const pokePowerPoint1 = document.createElement('p')
    const pokePowerPoint2 = document.createElement('p')
    const pokePowerPoint3 = document.createElement('p')

    //assigning the innerText of the elements created to display the information
    pokeName.innerText = pokemon.name
    pokePic.src = pokemon.sprites.front_default
    pokeHp.innerText = `Hp: ${pokemon.stats[5].base_stat}`
    pokeMoves.innerText = 'Moves:'

    //getting the moves
    const pp1Moves = await getMoves(pokemon, 0);
    const pp2Moves = await getMoves(pokemon, 1);
    const pp3Moves = await getMoves(pokemon, 2);

    //assigning the power point elements with the power info from the moves endpoint
    pokePowerPoint1.innerText = `${pp1Moves.name} PP:${pp1Moves.pp}`
    pokePowerPoint2.innerText = `${pp2Moves.name} PP:${pp2Moves.pp}`
    pokePowerPoint3.innerText = `${pp3Moves.name} PP:${pp3Moves.pp}`

    subContainer.appendChild(pokeName)
    subContainer.appendChild(pokePic)
    subContainer.appendChild(pokeHp)
    subContainer.appendChild(pokeMoves)
    subContainer.appendChild(pokePowerPoint1)
    subContainer.appendChild(pokePowerPoint2)
    subContainer.appendChild(pokePowerPoint3)


    container.appendChild(subContainer)
}