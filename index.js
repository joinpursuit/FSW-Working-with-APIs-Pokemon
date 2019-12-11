document.addEventListener("DOMContentLoaded", () => {
 setupBtns()
   
})

const setupBtns = () => {
   let btnPokemon = document.querySelector("#getPokemon")
   btnPokemon.addEventListener('click', () => {
     getPokemons()
  
   })
   let btnBattle = document.querySelector("#battlePokemon")
   btnBattle.addEventListener('click', () => {
      battlePokemon()
   })
}

const getPokemons = async () => {
   try {
      let url = "https://pokeapi.co/api/v2/pokemon"
      let pokemonID = Math.floor((Math.random() * 964) + 1)
      let pokemonID2 = Math.floor((Math.random() * 964) + 1)
      
      let res1 = await axios.get(`${url}/${pokemonID}/`)
      res1.data
      let res2 = await axios.get(`${url}/${pokemonID2}/`)
      res2.data
      
      //getPokemonsName
      let pokeName = document.querySelector('#pokemonCard1')
      let pokemonName1 = document.createElement('h2')
      pokemonName1.innerText = res1.data.name;
      // pokemonName.innerText
      // console.log(pokemonName)
      
      pokeName.appendChild(pokemonName1)
      let pokeName2 = document.querySelector('#pokemonCard2')
      let pokemonName2 = document.createElement('h2')
      pokemonName2.innerText = res2.data.name;
      // pokemonName.innerText
      // console.log(pokemonName)
      pokeName2.appendChild(pokemonName2)

      //getPokemonImages
      let pokeImg1 = document.createElement('img')
      pokeImg1.src = res1.data.sprites.front_default
      // console.log(img)
      // debugger
      pokeName.appendChild(pokeImg1)

      let pokeImg2 = document.createElement('img')
      pokeImg2.src = res2.data.sprites.front_default
      // console.log(img)
      // debugger
      pokeName2.appendChild(pokeImg2)

      //getPokeStats
      let displayPokeStat1 = document.createElement('p')
      displayPokeStat1.innerText = `HP: ${res1.data.stats[5].base_stat}`
      pokeName.appendChild(displayPokeStat1)
      // console.log('HP: '+pokemonStats)
      // debugger

      let displayPokeStat2 = document.createElement('p')
      displayPokeStat2.innerText = `HP: ${res2.data.stats[5].base_stat}`
      pokeName2.appendChild(displayPokeStat2)
      // console.log('HP: '+pokemonStats)
      // debugger
      
      //getPokemonsMoves
      let ul1 = document.createElement('ul')
      moveArr = res1.data.moves.length;
      let ranMoveNum = Math.floor((Math.random() * moveArr) + 1);
      let moveUrl =res1.data.moves[ranMoveNum].move.url
      let pokePPNum = await axios.get(moveUrl)
      let pokemonMoveName =res1.data.moves[ranMoveNum].move.name
      pokemonMoveName.innerText;
      // console.log("Move Name:" +pokemonMoveName)
      pokePPNum = pokePPNum.data.pp
      // console.log("PP:" + pokePPNum)
      
      let ul2 = document.createElement('ul')
      moveArr2 = res2.data.moves.length;
      let ranMoveNum2 = Math.floor((Math.random() * moveArr2) + 1);
      let moveUrl2 =res2.data.moves[ranMoveNum2].move.url
      
      let pokePPNum2 = await axios.get(moveUrl2)
      let pokemonMoveName2 =res2.data.moves[ranMoveNum2].move.name
      pokemonMoveName2.innerText;
      pokePPNum2 = pokePPNum2.data.pp
     
      
      
      

      
   }
   catch  (err) {
      console.log(err)
   }
}


const battlePokemon = () => {
   console.log('I\'m clicked')
}