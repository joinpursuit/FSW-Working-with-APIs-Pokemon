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
   //clear
   let pokemonCard1 = document.querySelector("#pokemonCard1")
   pokemonCard1.innerHTML = "";
   let pokemonCard2 = document.querySelector("#pokemonCard2")
   pokemonCard2.innerHTML = "";

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
      pokemonName1.id = "pokeName1"
      pokemonName1.innerText = res1.data.name;


      pokeName.appendChild(pokemonName1)
      let pokeName2 = document.querySelector('#pokemonCard2')
      let pokemonName2 = document.createElement('h2')
      pokemonName2.id = "pokeName2"
      pokemonName2.innerText = res2.data.name;
      pokeName2.appendChild(pokemonName2)

      //getPokemonImages
      let pokeImg1 = document.createElement('img')
      pokeImg1.src = res1.data.sprites.front_default
      pokeName.appendChild(pokeImg1)

      let pokeImg2 = document.createElement('img')
      pokeImg2.src = res2.data.sprites.front_default
      pokeName2.appendChild(pokeImg2)

      //getPokeStats
      let displayPokeStat1 = document.createElement('h4')
      displayPokeStat1.innerText = `HP: ${res1.data.stats[5].base_stat}`
      let getHP1 = document.createElement('p')
      getHP1.innerText = res1.data.stats[5].base_stat
      getHP1.id = "pokeStat1"
      pokeName.appendChild(displayPokeStat1)


      let displayPokeStat2 = document.createElement('h4')
      displayPokeStat2.innerText = `HP: ${res2.data.stats[5].base_stat}`
      let getHP2 = document.createElement('p')
      getHP2.innerText = res2.data.stats[5].base_stat
      getHP2.id = "pokeStat2"
      pokeName2.appendChild(displayPokeStat2)


      //getPokemonsMoves
      let ul1 = document.createElement('ul')
      for (let i = 0; i <= 3; i++) {
         let moveUrl = res1.data.moves[i].move.url
         let response1 = await axios.get(moveUrl)
         // debugger
         let li = document.createElement('li')
         li.innerText = `${response1.data.name} PP: ${response1.data.pp}`
         ul1.appendChild(li)
         pokeName.appendChild(ul1)
      }

      let ul2 = document.createElement('ul')
      for (let j = 4; j <= 7; j++) {
         let moveUrl2 = res1.data.moves[j].move.url
         let response2 = await axios.get(moveUrl2)
         let li2 = document.createElement('li')
         li2.innerText = `${response2.data.name} PP: ${response2.data.pp}`
         ul2.appendChild(li2)
         pokeName2.appendChild(ul2)
      }
   }
   catch (err) {
      console.log(err)
   }
}


const battlePokemon = () => {
   let section = document.querySelectorAll("section")
   let firstPoke = document.querySelector("#pokeName1").innerText
   let secondPoke = document.querySelector("#pokeName2").innerText
   let declare = document.querySelector("#winOrLoss")
   let poke1HP = document.querySelector("#pokeStat1")
   let poke2HP = document.querySelector("#pokeStat2")
   if (!section) {
       window.alert("You must click getPokemon button first")
   } else if (poke1HP < poke2HP) {
      return declare.innerText = firstPoke + " defeats " + secondPoke
   } else {
      return declare.innerText = secondPoke + " defeats " + firstPoke
   }
}

