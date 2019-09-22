// //global variables
let pokeBattleHistory = [];
let currentPokeArr = [];
let container;
let pp1Moves
let pp2Moves
let pp3Moves
let pokePowerPoint1
let pokePowerPoint2
let pokePowerPoint3

document.addEventListener('DOMContentLoaded', () => {
    let getPoke = document.querySelector('#getPoke')
    let battle = document.querySelector('#battleButton')
    getPokemon()
    getPoke.addEventListener('click', () => {
        battle.disabled = false
        getPokemon()
    })
    battle.addEventListener('click', async () => {
        battlePokemon()
        battle.disabled = true
    })
})

//this function gets the pokemon from the pokeApi pokemon endpoint
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
    let randomBattleNum = await getRandomNum(2, 0)
    console.log(randomBattleNum);
    const loser = currentPokeArr[0] !== currentPokeArr[randomBattleNum] ? currentPokeArr[0] : currentPokeArr[1]
    pokeBattleHistory.push(`${currentPokeArr[randomBattleNum]} defeated ${loser}`)

    //this block loops through the array of the battle history and adds the last element to the screen
    for (let i = 0; i < pokeBattleHistory.length; i++) {
        battlePara.innerText = pokeBattleHistory[pokeBattleHistory.length - 1]
    }
    console.log(pokeBattleHistory);
    battleHistory.appendChild(battlePara)
}

//this function gets the pokemon information
const generatePoke = async () => {
    const randNum = await getRandomNum(810, 1)
    //getting the pokemon from pokemon end point with random number
    const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randNum}`)
    console.log(poke.data.name);

    creatingCard(poke.data)
    return poke.data
}

//this function pushes the two pokemon names into a global array
//that will be used to store the two current pokemon on the screen
const pushPoke2Array = async (par, par2) => {
    currentPokeArr.push(par.name, par2.name)
    console.log(currentPokeArr);
    console.log(par.name + ' ' + 'hello');
    console.log(par2.name + ' ' + 'hello');
}

//this function looks into the pokemon moves array and gets the url to 
// to the detailed information on the specific moves at the index position on the moves array
const getMoves = async (pokeInfo) => {
    //getting the moves of the pokemon generated
    console.log(pokeInfo.moves);
    let randomIndex = await getRandomNum(pokeInfo.moves.length, 0)
    console.log(randomIndex);

    let url = pokeInfo.moves[`${randomIndex}`].move.url;
    console.log(url);
    let movesInfo = await axios.get(url)
    return movesInfo.data;
}

//This function generates a random number
async function getRandomNum(max, min) {
    return Math.floor((Math.random() * max) + min);
}

//this is a simple function teh brings the container over into the js
function getContainer() {
    container = document.querySelector('#container')
    return container;
}

//function that will replace the pokemon the are already on the screen
const replacePoke = async () => {
    currentPokeArr.length = 0
    container = getContainer()
    container.innerHTML = ''
    // while (container.firstChild) {
    //     container.removeChild(container.firstChild)
    // }
}

//This function create the elements on the create that will hold the pokemon information
async function creatingCard(pokemon) {
    container = getContainer()
    //creating the elements that will hold the information on the pokemon
    const subContainer = creatingElem('div')
    // document.createElement('div');
    subContainer.className = 'pokeContainer'
    const pokePic = creatingElem('img')
    const pokeName = document.createElement('p')
    pokeName.className = 'pokemonName'
    const pokeHp = document.createElement('p')
    const pokeMoves = document.createElement('p')
    let ppMovesArray = [pp1Moves, pp2Moves, pp3Moves]
    let pokePPPara = [pokePowerPoint1, pokePowerPoint2, pokePowerPoint3]
    let subContainerArray = [pokeName, pokePic, pokeHp, pokeMoves]
    for (let i = 0; i < pokePPPara.length; i++) {
        pokePPPara[i] = creatingElem('p')
    }
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
    //assigning the power point elements with the power info from the moves endpoint
    for (let i = 0; i < ppMovesArray.length; i++) {
        ppMovesArray[i] = await getMoves(pokemon);
        console.log(ppMovesArray[i]);
        pokePPPara[i].innerText = `${ppMovesArray[i].name} PP:${ppMovesArray[i].pp}`
        subContainerArray.push(pokePPPara[i])
    }
    //now appending the newly created elements to the subContainer   
    for (let i = 0; i < subContainerArray.length; i++) {
        subContainer.appendChild(subContainerArray[i])
        console.log(i + 'hello');
    }
    //appending thd subContainer that holds the created elements to the container
    container.appendChild(subContainer)
}

function creatingElem(elem) {
    return document.createElement(`${elem}`)
}