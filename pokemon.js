document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("#getPokemon")
  let pokemon1info = document.querySelector(".pokemon1info")
   
  const getPokemon1 = async () => {
    try {
      let num = Math.floor(Math.random() * 807)
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
      // debugger
      let character1 = res.data
      let name1 = character1.name
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
        let moveDeets2 = await axios.get(move.move.url)
        // debugger;
        let li = document.createElement("li")
        li.innerText = moveDeets2.data.name + " PP: " + moveDeets2.data.pp
        ul.appendChild(li)

      })

    } catch (err) {
      console.log("ERROR")
      // debugger
    }
  }

  const getPokemon2 = async () => {
    try {
      let num = Math.floor(Math.random() * 807)
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
      debugger
      let character2 = res.data
      let name2 = character2.name
      let pokemonTwo = document.querySelector("p")
      pokemonTwo.innerText = name2
      let img2 = document.createElement("img2")
      img2.src = res.data.sprites.front_default
      pokemontwo.appendChild(img)
      let moves2 = res.data.moves.slice(0, 4)
      // debugger
      let ul = document.createElement("ul")
      pokemon2info.appendChild(ul);
      moves2.forEach(async (move, i) => {
        let moveDeets2 = await axios.get(move.move.url)
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
    getPokemon1()
    getPokemon2()

  })
})
