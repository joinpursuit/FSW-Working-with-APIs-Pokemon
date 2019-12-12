document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("#getPokemon")
  // let pokemonInfo = document.querySelector(".pokemon-info")
  let poke1 = document.querySelector("#poke1")
  let poke2 = document.querySelector("#poke2")
  let p1 = document.querySelector("#p1")
  let p2 = document.querySelector("#p2")
  const getPokemon = async (pokemon, para) => {
    try {
      let num = Math.floor(Math.random() * 807)
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
      let data = res.data
      para.innerText = data.name;
      let img = document.createElement("img")
      img.src = data.sprites.front_default
      pokemon.appendChild(img)
      let moves = data.moves.slice(0, 4)
      pokemon.appendChild(document.createElement("ul"))
      moves.forEach(async move => {
        let moveDeets = await axios.get(move.move.url)
        let li = document.createElement("li")
        li.innerText = moveDeets.data.name + " PP: " + moveDeets.data.pp
        pokemon.appendChild(li)
      })
    } catch (err) {
      console.log("ERROR")
    }
  }

  button.addEventListener("click", () => {
    getPokemon(poke1, p1)
    getPokemon(poke2, p2)
  })
})
