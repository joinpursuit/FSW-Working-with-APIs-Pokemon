document.addEventListener('DOMContentLoaded', () => {
    const loadButton = document.querySelector('#loads-pokemon')
    const battleButton = document.querySelector('#battle-pokemon')

    loadButton.addEventListener('click',gameSetup)
    battleButton.addEventListener('click',battlePokemon)
    gameSetup()
})
//Main Function: gives us all pokemon data
 const getPokemon = async () => {
    const mainUrl = "https://pokeapi.co/api/v2/pokemon/?limit=964"

    const indexForPokemonList = Math.floor((Math.random() * 964 -1) + 1)
    console.log('random Num:',indexForPokemonList)

     const response = await axios.get(mainUrl)
     const pokemonList = response.data.results
     console.log('pokemon list:',pokemonList)

    const battlePokemonURL = pokemonList[indexForPokemonList].url
    console.log('battlePK URL:',battlePokemonURL)   
    
    const response2 = await axios.get(battlePokemonURL)
    const chosenPokemonAttributes = response2.data
    console.log('pokemon Attributes: ',chosenPokemonAttributes)

    //Gets Pokemon Name, Sprite, and HP
    const pokemonName = chosenPokemonAttributes.name
    console.log(pokemonName)

    const pokemonSprite = chosenPokemonAttributes.sprites.front_default
    console.log(chosenPokemonAttributes)

    const pokemonBaseHP = chosenPokemonAttributes.stats[5].base_stat
    const pokemonMoves = chosenPokemonAttributes.moves 

    //Function Gets 4 Pokemon Moves randomly and makes a request to get Name/PowerPoints
    const getPokemonMoves = async () => {

        //this will hold the move urls
        const movesArr = []
        
        const getsPokemonMoveIndex = () => { return Math.floor((Math.random() * pokemonMoves.length -1) + 1)}

        if (pokemonMoves.length >= 4)  {
            for (let i=0; i < 4; i++){
                movesArr.push(pokemonMoves[getsPokemonMoveIndex()].move.url)
            }
        } else if (pokemonMoves.length < 4){
            for (let i=0; i < pokemonMoves.length; i++){
                movesArr.push(pokemonMoves[getsPokemonMoveIndex()].move.url)
            }
        }
        //Goes into each Move URL by accessing moves array 
        let urlForMove1 = movesArr[0]
        let urlForMove2 = movesArr[1]
        let urlForMove3 = movesArr[2]
        let urlForMove4 = movesArr[3]

        //Makes a request to get name and PP for each attack
        const responseForURL1 = await axios.get(urlForMove1)
        const attackMove1 = responseForURL1.data
        const nameForMove1 = attackMove1.name
        const powerPointsForMove1 = attackMove1.pp

        const responseForURL2 = await axios.get(urlForMove2)
        const attackMove2 = responseForURL2.data
        const nameForMove2 = attackMove2.name
        const powerPointsForMove2 = attackMove2.pp

        const responseForURL3 = await axios.get(urlForMove3)
        const attackMove3 = responseForURL3.data
        const nameForMove3 = attackMove3.name
        const powerPointsForMove3 = attackMove3.pp

        const responseForURL4 = await axios.get(urlForMove4)
        const attackMove4 = responseForURL4.data
        const nameForMove4 = attackMove4.name
        const powerPointsForMove4 = attackMove4.pp

        // combine move name and pp in an array 

        const pokemonAttack1 = [nameForMove1 + ': ' + powerPointsForMove1].toString()
        const pokemonAttack2 = [nameForMove2 + ': ' + powerPointsForMove2].toString()
        const pokemonAttack3 = [nameForMove3 + ': ' + powerPointsForMove3].toString()
        const pokemonAttack4 = [nameForMove4 + ': ' + powerPointsForMove4].toString()
        
        // console.log([pokemonAttack1,pokemonAttack2, pokemonAttack3, pokemonAttack4])

        return [pokemonAttack1, pokemonAttack2, pokemonAttack3, pokemonAttack4]

    }

    //call function that gets moves randomly and helps with promise
    const callerPokemonFunction = getPokemonMoves()

    const pokemonTings = await callerPokemonFunction
    console.log(pokemonTings)
    
    //DOM Manipulation
    const dataDiv = document.querySelector('#data')
    console.log(dataDiv)

    const name = document.createElement('p')
    const sprite = document.createElement('img')
    const healthPoints = document.createElement('p')
    
    const moves = document.createElement('ul')

    name.innerText = pokemonName
    sprite.src = pokemonSprite
    healthPoints.innerText = ('HP: ' + pokemonBaseHP)

    dataDiv.appendChild(name)
    dataDiv.appendChild(sprite)
    dataDiv.appendChild(healthPoints)

    for (let i = 0; i < pokemonTings.length; i++){
       let attackMoves = document.createElement('li')
       attackMoves.innerText = pokemonTings[i]
       moves.appendChild(attackMoves)
       dataDiv.appendChild(moves)
    }
    
  
}
//handler that gives us two pokemon and clears DOM
const gameSetup = () => {
    let divContainer = document.querySelector('#data')
    
    if (divContainer){
        divContainer.innerHTML= " "
        getPokemon()
        getPokemon()

    } else {
        getPokemon()
        getPokemon()
    }
}

//Picks a winner at random 
const battlePokemon = () => {
    let divData = document.querySelector('#data')
    const picker = Math.random()
    console.log(picker)

    if (picker > .49) {
        const winnerText = document.createElement('p')
        winnerText.innerText = 'Pokemon 1 wins'
        divData.appendChild(winnerText)
        window.alert('Pokemon 1 wins')
    
    } else if (picker < .50){
        const winnerText = document.createElement('p')
        winnerText.innerText = 'Pokemon 2 wins'
        divData.appendChild(winnerText)
        window.alert('Pokemon 2 wins')
    }
}

 

    
 
