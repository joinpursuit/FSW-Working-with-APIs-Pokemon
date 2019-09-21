document.addEventListener('DOMContentLoaded', () => {
    let loadButton = document.querySelector('#loads-pokemon')
    let battleButton = document.querySelector('#battle-pokemon')

    loadButton.addEventListener('click',gameSetup)
    battleButton.addEventListener('click',battlePokemon)
})

 const getPokemon = async () => {
    const mainUrl = "https://pokeapi.co/api/v2/pokemon/?limit=964"

    const randomNum = Math.floor((Math.random() * 964 -1) + 1)
    console.log('random Num:',randomNum)

     const response = await axios.get(mainUrl)
     let pokemonList = response.data.results
     console.log('pokemon list:',pokemonList)

    let battlePokemonURL = pokemonList[randomNum].url
    console.log('battlePK URL:',battlePokemonURL)   
    
    const response2 = await axios.get(battlePokemonURL)
    const pokemonAttributes = response2.data
    console.log('pokemon Attributes: ',pokemonAttributes)
    
    const pokemonName = pokemonAttributes.name
    console.log(pokemonName)
    const pokemonSprite = pokemonAttributes.sprites.front_default
    console.log(pokemonAttributes)
    const pokemonBaseHP = pokemonAttributes.stats[5].base_stat
    const pokemonMoves = pokemonAttributes.moves 

    const getPokemonMoves = async () => {
        let movesArr = []
        
        const anotherRandomNum = () => { return Math.floor((Math.random() * pokemonMoves.length -1) + 1)}

        if (pokemonMoves.length >= 4)  {
            for (let i=0; i < 4; i++){
                movesArr.push(pokemonMoves[anotherRandomNum()].move.url)
            }
        } else if (pokemonMoves.length < 4){
            for (let i=0; i < pokemonMoves.length; i++){
                movesArr.push(pokemonMoves[anotherRandomNum()].move.url)
            }
        }
    
        let urlForMove1 = movesArr[0]
        let urlForMove2 = movesArr[1]
        let urlForMove3 = movesArr[2]
        let urlForMove4 = movesArr[3]

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

        // [powerPointsForMove1, powerPointsForMove2, powerPointsForMove3, powerPointsForMove4]

        const pokemonAttack1 = [nameForMove1 + ': ' + powerPointsForMove1].toString()
        const pokemonAttack2 = [nameForMove2 + ': ' + powerPointsForMove2].toString()
        const pokemonAttack3 = [nameForMove3 + ': ' + powerPointsForMove3].toString()
        const pokemonAttack4 = [nameForMove4 + ': ' + powerPointsForMove4].toString()
        
        // console.log([pokemonAttack1,pokemonAttack2, pokemonAttack3, pokemonAttack4])

        return [pokemonAttack1, pokemonAttack2, pokemonAttack3, pokemonAttack4]

    }
    let pokemon = getPokemonMoves()

    let pokemonTings = await pokemon

    console.log(pokemonTings)

    
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

const battlePokemon = () => {
    let divData = document.querySelector('#data')
    let picker = Math.random()
    console.log(picker)

    if (picker > .49) {
        let winnerText = document.createElement('p')
        winnerText.innerText = 'Pokemon 1 wins'
        divData.appendChild(winnerText)
        window.alert('Pokemon 1 wins')
    
    } else if (picker <= .50){
        let winnerText = document.createElement('p')
        winnerText.innerText = 'Pokemon 2 wins'
        divData.appendChild(winnerText)
        window.alert('Pokemon 2 wins')
    }
}

 

    
 
