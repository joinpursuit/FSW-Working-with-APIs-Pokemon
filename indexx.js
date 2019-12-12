document.addEventListener("DOMContentLoaded", () => {
  let firstPokemonUl = document.createElement("ul")
  let secondPokemonUl = document.createElement("ul")

  // at bottom add the 

const getPokemon = async () => {
      try {
        let randomNum = Math.floor(Math.random() * 807)
        let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
      
        let pokemonInfo = pokemon.data;
        let battlerName = pokemonInfo.name;
        let battlerPic = pokemonInfo.sprites.front_default;
        let battlerHP = pokemonInfo.stats[5].base_stat;
        
        // let battlerMove = pokemonInfo.move;
        // let movePP = pokemonInfo
        // res.data.moves.slice
        // // then take the url and grab the info from it  make a new url

        
        


        
      }catch(error) {
        console.log("This is the " + error)
      }
    }
// const getPokemon2 = async () => {
//       try {
//         let randomNum = Math.floor(Math.random() * 807)
//         let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);

//         let battlerName = pokemon.data.name;
//         let battlerPic = pokemon.data.sprites.front_default;
//         let battlerHP = pokemon.data.stats[5];
      
        
//       }catch(error) {
//         console.log("This is the " + error)
//       }
//     }
     let button = document.querySelector("#getPoke");
        button.addEventListener("click", () => {
          getPokemon()
        })
      })
      
      
      
      


//let it do 
// return event.preventDefault();//do we need this???
// getPokemon fucntion doesn't work when out inside