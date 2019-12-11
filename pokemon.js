document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("#getPokemon")
//   let pokemonOne = document.createElement("p1")
//   let pokemonTwo = document.createElement("p2")
  const getPokemon = async () => {
    try {
      let num = Math.floor(Math.random() * 807)
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
    //   debugger
      let character = res.data
      let name1 = character.name
      let pokemonOne = document.querySelector("p");
      pokemonOne.innerText = name1
      let sprite = pokemon.sprites.front_default

      
    } catch (err) {
      console.log("ERROR")
    //   debugger
    }
  }

  button.addEventListener("click", () => {
    getPokemon()
  })
})
