document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("#getPokemon")
  let poke1 = document.querySelector("#poke1")
  let poke2 = document.querySelector("#poke2")
  let p1 = document.querySelector("#p1")
  let p2 = document.querySelector("#p2")
  const getPokemon = async (pokemon, para) => {
    pokemon.innerText = ""
    try {
      let num = Math.floor(Math.random() * 807)
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
      let data = res.data
      let pName = document.createElement("p")
      if (para === p1) {
        pName.id = "p1Name"
      } else {
        pName.id = "p2Name"
      }
      pName.innerText = data.name.toUpperCase()
      pokemon.appendChild(pName)
      let img1 = document.createElement("img")
      img1.src = data.sprites.front_default
      img1.id = "img1"
      pokemon.appendChild(img1)
      let h2 = document.createElement("h2")
      h2.innerText = `HP: ${data.stats[5].base_stat}`
      pokemon.appendChild(h2)
      let moves = data.moves.slice(0, 4)
      pokemon.appendChild(document.createElement("ul"))
      moves.forEach(async move => {
        let moveDeets = await axios.get(move.move.url)
        let li = document.createElement("li")
        li.innerText = moveDeets.data.name + " PP: " + moveDeets.data.pp
        pokemon.appendChild(li)
      })
    } catch (err) {
      console.log(err)
    }
  }

  button.addEventListener("click", () => {
    getPokemon(poke1, p1)
    getPokemon(poke2, p2)
  })

  let btn = document.querySelector("#battle")

  const getBattleOn = (poke1, poke2) => {
    let battleInfo = document.querySelector("#battleInfo")
    let winner = Math.floor(Math.random() * 2)
    let p = document.createElement("p")
    p.innerText = ""
    let firstPoke = document.querySelector("#p1Name").innerText
    let secondPoke = document.querySelector("#p2Name").innerText

    if (winner === 1) {
      p.innerText = `${secondPoke} wins!`
    } else {
      p.innerText = `${firstPoke} wins!`
    }
    battleInfo.appendChild(p)
  }

  btn.addEventListener("click", () => {
    getBattleOn(poke1, poke2)
  })
})
