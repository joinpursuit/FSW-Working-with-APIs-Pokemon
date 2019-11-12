document.addEventListener ('DOMContentLoaded', () => {
   eventListeners()
   
})

const eventListeners = () => {
   let button = document.querySelector('#choose')
      button.addEventListener('click', getIds)
   let button2 = document.querySelector('#go')
      button2.addEventListener('click', battle)
   }
const pick = () => {
   let url = ('https://pokeapi.co/api/v2/pokemon/?limit=809')
   //let res1 = axios.get.
   axios
   .get (url)
  // console.log(res1.data)
   .then (response => {
      console.log(response.data)
   })
   .then(dataObj => {
      console.log(dataObj)
   })
   .catch(err => {
      console.log('Could not post', err)
   })
   // axios.get.catch.then(err => {
   //    console.log('Could not post',err)
   // })
}

const fetchRandomPokemonId = () => {
   // const MIN = 1
   // const MAX = 809
   const id = Math.floor(Math.random() * (809 - 1) + 1 )
   //const id2 = Math.floor(Math.random()* MAX) + MIN
   return id
}

const getIds = () => {
   //function returns a number between 1 and 809
   console.log('we got 2!!!')
   fetchSinglePokemon()
   fetchSinglePokemon()
}

const fetchSinglePokemon =  () =>  {
   const  pokemonId = fetchRandomPokemonId()
   const url  = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
   fetch (url)
   .then(response => response.json())
   .then(data => { 
      pokeInfo(data)
      // response.data
   })

   let moves = pokemon.moves
      
      for (let move = 0; move < 3; move++) {
        let moveUrl = moves[move].move.url
        fetchMove(moveUrl, pokemon)
      } 
}

const fetchMove = (url, pokemon) => {
   fetch(url)
     .then(response => response.json())
     .then(move => {
       displayMove(move, pokemon)
     })
 }

 const displayMove = (move, pokemon) => {
   const pokemonCard = document.querySelector(`#${pokemon.name}`)
   const movesList = pokemonCard.querySelector('.moves-list');
 
   const moveLi = document.createElement('li')
   moveLi.innerText = move.name + ' PP: ' + move.pp
 
   movesList.appendChild(moveLi)
 }


const moves = (url,pokemon) =>{
   const  movesId = generateRandomMoveId
   const url  = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
   fetch (url)
   .then(response => response.json())
   .then(dataObj => { 
      console.log (dataObj)
   // response.data
})
}
const pokeInfo = (pokemon) =>{
   const pokeCard = document.createElement ('div')
   pokeCard.id = pokemon.fetchRandomPokemonId

   const name = document.createElement('h2')
   name.innerText = pokemon.name

   const sprite = document.createElement('img')
   sprite.src = pokemon.sprites.front_default

   const hp = document.createElement ('h3')
   hp.innerText = ('HP: ' + pokemon.stats[5].base_stat)

   const moves = document.createElement('div')
   
   const movesHeader = document.createElement('h3')
   movesHeader.innerText = "Moves:"
 
   const movesList = document.createElement('ul')

   moves.appendChild(movesHeader)
    moves.appendChild(movesList)

    pokeCard.appendChild(name)
    pokeCard.appendChild(sprite)
    pokeCard.appendChild(hp)
    pokeCard.appendChild(moves)
    const arena = document.querySelector("#grounds");
    arena.appendChild(pokeCard)
}
const victorFunction = () => {
  let result = Math.floor(Math.random * (2 - 0) + 0)
   return result
}
const letsGo = () =>{
  victorFunction()
}




  