document.addEventListener('DOMContentLoaded', () => {
  console.log('dom loaded')
  // setupGetPokemonButton()
  console.log("getButton")
// const setupGetPokemonButton = () => {
    let  getButton = document.querySelector('.button-pokemon')
    getButton.addEventListener('click', getPokemon)
      console.log("get pokemon was clicked")

    
  // }
})

function getRandom(min, max) {
    return Math.floor(Math.random()*(809-1)+1);
}

  let p1Name = null;
  let p1SpriteUrl = null;
  let p1Hp = null;
  let p2Name = null;
  let p2SpriteUrl = null;
  let p2Hp = null;
function getPokemon() {
  let randomId = getRandom()
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)    
  .then(response => {
      console.log("response", response)
      return response.json();
  })
  .then(data=> {
        console.log("pokemon", data)
        p1Name = document.querySelector(".pokemon-name1")
        p1SpriteUrl = document.createElement("image")
        p1Hp = document.querySelector('.hp')
        P1HP.innerText = pokemon.

        data.Hp
        p2Name = data.name
        p2SpriteUrl = data.sprites.front_default
        p2Hp = data.hp
        p1Name.innerText = pokemon.name
        p1SprinteUrl.src = pokemon.sprites.front_default
        displayPokemon(data);
  })
  .catch(err => {
        console.log("err", err)
      }) 
}      
      
      function displayPokemon(pokemon){
console.log(pokemon)
      }



//         return Math.floor(Math.random()*(809-1)+1);
//       }
//       function getPokemon(){
//         let randomPokemon = fetch("https://pokeapi.co/api/v2/pokemon/{ function?????}/")
//       }
  
// const setupBattleButton = () => {
//   let battleButton = document.querySelector('.battle')
//   battleButton.addEventListener('click', (event))}
