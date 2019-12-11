document.addEventListener("DOMContentLoaded", () => {
   setupBtns()
})

const setupBtns = () => {
   let btnPokemon = document.querySelector("#getPokemon")
   btnPokemon.addEventListener('click', () => {
      getPokemon()
   })
   let btnBattle = document.querySelector("#battlePokemon")
   btnBattle.addEventListener('click', () => {
      battlePokemon()
   })
}

const getPokemon = async () => {
   try {
      let url = "https://pokeapi.co/api/v2/pokemon"
      let pokemonID = Math.floor((Math.random() * 964) + 1)
      let res = await axios.get(`${url}/${pokemonID}/`)
      res.data
      // debugger 

      let pokemonName = res.data.name;
      pokemonName.innerText
      let img = document.createElement('img')
      img.src = res.data.sprites.front_default
      // debugger
      let pokemonStats = res.data.stats[5].base_stat
      pokemonStats.innerText 
      // debugger

      let ranMoveNum = Math.floor((Math.random() * 77) + 1);
      let pokemonMove =res.data.moves[ranMoveNum].move.name
      pokemonMove.innerText;
      let moveUrl =res.data.moves[ranMoveNum].move.url
      
      let pokePP = await axios.get(moveUrl)
      pokePP;
      debugger
      
   }
   catch  (err) {
      console.log(err)
   }
}


const battlePokemon = () => {
   console.log('I\'m clicked')
}