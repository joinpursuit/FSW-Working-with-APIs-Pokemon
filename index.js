document.addEventListener("DOMContentLoaded", () => {
  let getToon = document.querySelector("#getToon")
  let battle = document.querySelector("#battle")
  let battlefield = document.querySelector("#battlefield")
  let battleHist = document.querySelector("#history")
  let pokeLeft = document.querySelector("#pokeLeft")
  let pokeRight = document.querySelector("#pokeRight")

  
  const getPokemon = async (e) => {
    try { 
      let num = Math.floor(Math.random() * 810)
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
    
      let pokemon = res.data
      let box = document.createElement("ul")
      let name = document.createElement("h3")
      let sprite = document.createElement("img")
      let hp = document.createElement("li")
      let moveList = document.createElement("li")

      const getMove = async () => {
        let rdm = Math.floor(Math.random() * pokemon.moves.length)
        let allmoves = pokemon.moves
        let rawMove = await axios.get(allmoves[rdm]["move"]["url"])
        let usableMove = rawMove.data
        let move = document.createElement("li")
        move.innerText = `${usableMove.name.charAt(0).toUpperCase() + usableMove.name.substring(1)} PP:${usableMove.pp}`
        return move
      }
      moveList.innerText = "Moves:"
      hp.innerText =`HP: ${pokemon["stats"][5]["base_stat"]}`
      sprite.src = pokemon["sprites"]["front_shiny"]
      name.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1)
      box.appendChild(name)
      box.appendChild(sprite)
      box.appendChild(hp)
      box.appendChild(moveList)
      box.appendChild(await getMove())
      box.appendChild(await getMove())
      box.appendChild(await getMove())
      box.appendChild(await getMove())
      e.appendChild(box)


    } catch (err) {
      console.log(err)
      debugger
    }  
  }
  getToon.addEventListener("click", (e) => {
    pokeLeft.innerHTML = ""
    pokeRight.innerHTML = ""
    getPokemon(pokeLeft)
    getPokemon(pokeRight)
  })
})