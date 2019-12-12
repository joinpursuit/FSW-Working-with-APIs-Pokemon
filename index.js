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


