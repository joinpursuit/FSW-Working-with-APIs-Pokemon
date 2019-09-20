document.addEventListener('DOMContentLoaded', () => {
    let getPoke = document.querySelector('#getPoke')
    let battle = document.querySelector('#battleButton')

    getPoke.addEventListener('click', () => {
        getPokemon()
    })
    battle.addEventListener('click', async () => {
        battlePokemon()
    })
})

// //global arrays
let pokeBattleHistory = [];
let currentPokeArr = [];

async function getPokemon() {
    replacePoke()
    const poke1 = await generatePoke()
    const poke2 = await generatePoke()

    pushPoke2Array(poke1, poke2)

}

//battle function
const battlePokemon = async () => {
    const battleHistory = document.querySelector('.battleHistory')
    let battlePara = document.createElement('p')

    //this random number generator generates either 0 or 1 to pick
    //between the two pokemon in the current array
    let randomBattleNum = Math.floor((Math.random() * 2) + 0);
    console.log(randomBattleNum);
    pokeBattleHistory.push(`${currentPokeArr[randomBattleNum]} won`)

    //this block loops through the array of the battle history and adds the last element to the screen
    for (let i = 0; i < pokeBattleHistory.length; i++) {
        battlePara.innerText = pokeBattleHistory[pokeBattleHistory.length - 1]
    }
    console.log(pokeBattleHistory);
    battleHistory.appendChild(battlePara)
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

//this function pushes the two pokemon names into a global array
//that will be used to store the two current pokemon on the screen
async function pushPoke2Array(par, par2) {
    currentPokeArr.push(par.name, par2.name)
    console.log(currentPokeArr);
    console.log(par.name + ' ' + 'hello');
    console.log(par2.name + ' ' + 'hello');
    return currentPokeArr
}

//this function looks into the pokemon moves array and gets the url to 
// to the detailed information on the specific moves at the index position on the moves array
const getMoves = async (pokeInfo) => {
    //getting the moves of the pokemon generated
    console.log(pokeInfo.moves);
    let randomIndex = Math.floor((Math.random() * (pokeInfo.moves).length) + 0);
    console.log(randomIndex);

    let url = pokeInfo.moves[`${randomIndex}`].move.url;
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
    currentPokeArr.length = 0
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

    if (pokemon.sprites.front_default != null) {
        pokePic.src = pokemon.sprites.front_default
    } else {
        pokePic.src = 'https://images-na.ssl-images-amazon.com/images/I/51YxooVI5%2BL._SX425_.jpg'
    }
    pokeHp.innerText = `HP: ${pokemon.stats[5].base_stat}`
    pokeMoves.innerText = 'Moves:'

    //getting the moves from the moves endpoint function
    const pp1Moves = await getMoves(pokemon);
    const pp2Moves = await getMoves(pokemon);
    const pp3Moves = await getMoves(pokemon);

    //assigning the power point elements with the power info from the moves endpoint
    pokePowerPoint1.innerText = `${pp1Moves.name} PP:${pp1Moves.pp}`
    pokePowerPoint2.innerText = `${pp2Moves.name} PP:${pp2Moves.pp}`
    pokePowerPoint3.innerText = `${pp3Moves.name} PP:${pp3Moves.pp}`

    //now appending the newly created elements to the subContainer   
    subContainer.appendChild(pokeName)
    subContainer.appendChild(pokePic)
    subContainer.appendChild(pokeHp)
    subContainer.appendChild(pokeMoves)
    subContainer.appendChild(pokePowerPoint1)
    subContainer.appendChild(pokePowerPoint2)
    subContainer.appendChild(pokePowerPoint3)

    //appending thd subContainer that holds the created elements to the container
    container.appendChild(subContainer)
}