document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("#getPokemon")
  let poke1 = document.querySelector("#poke1")
  let poke2 = document.querySelector("#poke2")
  let p1 = document.querySelector("#p1")
  let p2 = document.querySelector("#p2")
  const getPokemon = async (pokemon, para) => {
    try {
      let num = Math.floor(Math.random() * 807)
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
      let data = res.data
      para.innerText = data.name
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
        let h2 = document.createElement("h2")
        h2.innerText = `HP: ${data.stats[5].base_stat}`
        pokemon1.appendChild(h2)
      })
    } catch (err) {
      console.log("err")
    }
  }

  button.addEventListener("click", () => {
    getPokemon(poke1, p1)
    getPokemon(poke2, p2)
  })

  let btn = document.querySelector("#battle")
  let battleHistory = document.querySelector(".battleHistory")
  let winner = [];

  const getBattleOn = (poke1, poke2) => {
    let winner = getBattleOn[Math.floor(Math.random) * 2]
    let p = document.createElement("p");
    p.innerText = `${winner} wins!`
    battleHistory.appendChild("p") 
    
  }

  btn.addEventListener("click", () => {
    getBattleOn(poke1, poke2)
  })

})
