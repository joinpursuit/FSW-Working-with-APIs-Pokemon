document.addEventListener("DOMContentLoaded", () => {
 setupBtns()
   
})

const setupBtns = () => {
   let btnPokemon = document.querySelector("#getPokemon")
   btnPokemon.addEventListener('click', () => {
     getPokemon()
   //   getPokemon()
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
      
      //getPokemonName
      let pokeName = document.querySelector('#pokemonCard1')
      let pokemonName1 = document.createElement('h2')
      let pokemonName1.innerText = res.data.name;
      // pokemonName.innerText
      // console.log(pokemonName)
      pokeName.appendChild(pokemonName1)

      //getImage
      let img = document.createElement('img')
      img.src = res.data.sprites.front_default
      // console.log(img)
      // debugger
      pokeName.appendChild(img)

      //getPokeStats
      let displayPokeStat = document.createElement('p')
      displayPokeStat.innerText = res.data.stats[5].base_stat
      pokeName.appendChild(displayPokeStat)
       
      // console.log('HP: '+pokemonStats)
      // debugger
      
      //getMoves
      let ul = document.createElement('ul')
      moveArr = res.data.moves.length;
      let ranMoveNum = Math.floor((Math.random() * res.data.moves.length) + 1);
      let moveUrl =res.data.moves[ranMoveNum].move.url
      let pokePPNum = await axios.get(moveUrl)
      let pokemonMoveName =res.data.moves[ranMoveNum].move.name
      pokemonMoveName.innerText;
      // console.log("Move Name:" +pokemonMoveName)
      pokePPNum = pokePPNum.data.pp
      // console.log("PP:" + pokePPNum)
      
      
      

      
   }
   catch  (err) {
      console.log(err)
   }
}


const battlePokemon = () => {
   console.log('I\'m clicked')
}