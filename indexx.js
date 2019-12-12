document.addEventListener("DOMContentLoaded", () => {
  let floatLeft = document.querySelector(".pokemon1")
  let floatRight = document.querySelector(".pokemon2")
  let firstPokemonUl = document.createElement("ul")
  let secondPokemonUl = document.createElement("ul")
  // floatLeft.appendChild(firstPokemonUl)

const getPokemon = async () => {
      try {
        let randomNum = Math.floor(Math.random() * 807)
        let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
      
        let pokemonInfo = pokemon.data;
        let pokemonName = pokemonInfo.name;
        let h1 = document.createElement("h1")
        h1.innerText = pokemonName;
        floatLeft.appendChild(h1);


        let pokemonPicUrl = pokemonInfo.sprites.front_default;
        let pokemonPic = document.createElement("img");//same as line 17
        pokemonPic.src = pokemonPicUrl
        floatLeft.appendChild(pokemonPic);


        let pokemonHP = pokemonInfo.stats[5].base_stat;
        let p = document.createElement("p");
        p.innerText = ` HP : ${pokemonHP}` ;
        floatLeft.appendChild(p)

       

        let pokemonMove = pokemonInfo.move;
        let movePP = pokemonInfo
        res.data.moves.slice
        // then take the url and grab the info from it  make a new url


      }catch(error) {
        console.log("This is the " + error)
      }
    }

     let button = document.querySelector("#getPoke");
        button.addEventListener("click", () => {
          getPokemon()
        })
      })