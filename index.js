// - A button that displays the text "get pokemon!" and when clicked triggers the function "getPokemon"
// - A button that displays the text "battle!" and when clicked triggers the function "battlePokemon"
console.log("hey")
document.addEventListener("DOMContentLoaded", () => {
    // let form = document.querySelector("submit", (event))
    // form.addEventListener("submit", (event => {
    //     return event.preventDefault();

    // }))
    const getPokemon1 = async () => {
      let res;
      try {
        let pokeId1 = Math.floor(Math.random() * 807)
        res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId1}`);
        // console.log(res)
        debugger
        // let pokemons = res.data.results;
        
      } catch(error) {
        console.log("This is " + error)
      }
      
    }
    getPokemon1()
    // let button = document.querySelector("#getPoke");
    // button.addEventListener("click", () => {
    //   getPokemon();
    // })
})

let pokeId2 = Math.floor(Math.random() * 964)



document.addEventListener("DOMContentLoaded", () => {
  let floatLeft = document.querySelector(".pokemon1")
  let floatRight = document.querySelector(".pokemon2")
  let firstPokemonUl = document.createElement("ul")
  let secondPokemonUl = document.createElement("ul")
  // floatLeft.appendChild(firstPokemonUl)

const getPokemon1 = async () => {
      try {
        let randomNum = Math.floor(Math.random() * 807)
        let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
      
        let pokemonInfo = pokemon.data;
        let pokemonName = pokemonInfo.name;
        let pk1h1 = document.createElement("h1")
        pk1h1.innerText = pokemonName;
        floatLeft.appendChild(pk1h1);


        let pokemonPicUrl = pokemonInfo.sprites.front_default;
        let pokemonPic = document.createElement("img");//same as line 17
        pokemonPic.src = pokemonPicUrl
        floatLeft.appendChild(pokemonPic);


        let pokemonHP = pokemonInfo.stats[5].base_stat;
        let p = document.createElement("p");
        p.innerText = ` HP : ${pokemonHP}` ;
        floatLeft.appendChild(p)

       
        let pokemonMove = pokemonInfo.moves;
        pokemon.data.moves[0].move.name//in dev tools
        "vine-whip"

        const findMovePP = async () => {
          let moves = await axios(`https://pokeapi.co/api/v2/move/`)
        } 

        // for (let i = 0; i < 4; i ++) {
        //   pokemonMove
        // }


        let movePP = pokemonInfo
        res.data.moves.slice
        // then take the url and grab the info from it  make a new ul


      }catch(error) {
        console.log("This is the " + error)
      }
    }

const getPokemon2 = async () => {
      try {
        let randomNum = Math.floor(Math.random() * 807)
        let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
      
        let pokemonInfo = pokemon.data;
        let pokemonName = pokemonInfo.name;
        let pk2h1 = document.createElement("h1")
        pk2h1.innerText = pokemonName;
        floatRight.appendChild(pk2h1);

      
        let pokemonPicUrl = pokemonInfo.sprites.front_default;
        let pokemonPic = document.createElement("img");//same as line 17
        pokemonPic.src = pokemonPicUrl
        floatRight.appendChild(pokemonPic);


        let pokemonHP = pokemonInfo.stats[5].base_stat;
        let p = document.createElement("p");
        p.innerText = ` HP : ${pokemonHP}` ;
        floatRight.appendChild(p)

        
        let pokemonMove = pokemonInfo.moves;
        pokemon.data.moves[0].move.name//in dev tools
        "vine-whip"

        const findMovePP = async () => {
          let moves = await axios(`https://pokeapi.co/api/v2/move/`)
        } 

        // for (let i = 0; i < 4; i ++) {
        //   pokemonMove
        // }

    
        let movePP = pokemonInfo
        res.data.moves.slice
        // then take the url and grab the info from it  make a new ul


      }catch(error) {
        console.log("This is the " + error)
      }
    }

    const battleFunction = () => {
      let randomwinner = Math.floor(Math.random() * 2);
      if (randomwinner === 1) {
        let pokemon1win = document.querySelector("batHisH3");
        let p = document.createElement("p")
        p.innerText = document.querySelector(pk1h1)//trying to get fill Battle History
        pokemon1win.appendChild(p)

      } else if (randomwinner === 2) {
        let pokemon2win = document.querySelector("batHisH3");
        let p = document.createElement("p")
        p.innerText = document.querySelector(pk2h1)//trying to get fill Battle History
        pokemon2win.appendChild(p)
      }
    }

     let button = document.querySelector("#getPoke");
        button.addEventListener("click", () => {
          getPokemon1()
          getPokemon2()

        })

        let button = document.querySelector("#battle");
        button.addEventListener("click", () => {
          battleFunction()
        })
      })

      console.log(pokemonName)


