document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("#getPokemon")
  let pokemon1info = document.querySelector(".pokemon1info")
  //   let pokemonOne = document.createElement("p1")
  //   let pokemonTwo = document.createElement("p2")
  const getPokemon = async () => {
    try {
      let num = Math.floor(Math.random() * 807)
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
      // debugger
      let character = res.data
      let name1 = character.name
      let pokemonOne = document.querySelector("p")
      pokemonOne.innerText = name1
      let img = document.createElement("img")
      img.src = res.data.sprites.front_default
      pokemonOne.appendChild(img)
      let moves = res.data.moves.slice(0, 4)
      // debugger
      let ul = document.createElement("ul")
      pokemon1info.appendChild(ul);
      moves.forEach(async (move, i) => {
        let moveDeets = await axios.get(move.move.url)
        // debugger;
        let li = document.createElement("li")
        li.innerText = moveDeets.data.name + " PP: " + moveDeets.data.pp
        ul.appendChild(li)

      })

    } catch (err) {
      console.log("ERROR")
      // debugger
    }
  }

  button.addEventListener("click", () => {
    getPokemon()

  })
})
