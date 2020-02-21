document.addEventListener("DOMContentLoaded", () => {
  let floatLeft = document.querySelector(".pokemon1")
  let floatRight = document.querySelector(".pokemon2")
  let firstPokemonUl = document.createElement("ul")
  let secondPokemonUl = document.createElement("ul")
  let pokemonName1//declaring in the outer scope so that they're accessible in all functions 
  let pokemonName2

  // floatLeft.appendChild(firstPokemonUl)

const getPokemon1 = async () => {
      try {
        
        let randomNum = Math.floor(Math.random() * 807)
        let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
      
        let pokemonInfo = pokemon.data;
        pokemonName1 = pokemonInfo.name;
        let pk1h1 = document.createElement("h1")
        pk1h1.innerText = pokemonName1;
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
        pokemonName2 = pokemonInfo.name;
        let h1 = document.createElement("h1")
        h1.innerText = pokemonName2;
        floatRight.appendChild(h1);

      
        let pokemonPicUrl = pokemonInfo.sprites.front_default;
        let pokemonPic = document.createElement("img");//same as line 17
        pokemonPic.src = pokemonPicUrl
        floatRight.appendChild(pokemonPic);


        let pokemonHP = pokemonInfo.stats[5].base_stat;
        let p2 = document.createElement("p");
        p2.innerText = ` HP : ${pokemonHP}` ;
        floatRight.appendChild(p2)

        
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

    
    let button = document.querySelector("#getPoke");
    button.addEventListener("click", () => {
      
      getPokemon1();
      getPokemon2();

      floatLeft.innerHTML = "";//so that it deletes the whole div when the button clicked
      floatRight.innerHTML = "";
    })
    
    const battleFunction = () => {
      let randomwinner = Math.random() * 100;
      let pokemon1win = document.querySelector(".battleHistory");
      let p = document.createElement("p")

      if (randomwinner <= 50) {
        p.innerText = `${pokemonName2} defeated ${pokemonName1}`; //trying to get fill Battle History
      } else if (randomwinner > 51) {
        p.innerText = `${pokemonName1} defeated ${pokemonName2}`;
      }
      pokemon1win.appendChild(p)
    }
        let battleButton = document.querySelector("#battle");
        battleButton.addEventListener("click", () => {
          battleFunction()
        })
      })