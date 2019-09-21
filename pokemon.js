document.addEventListener("DOMContentLoaded",()=>{
  let buttonGetPokemon=document.querySelector("#getPokemon")

  buttonGetPokemon.addEventListener("click", getPokemon)
    console.log("DOM loaded")

  })


const getPokemon = () =>{
  console.log("it started")
// let responsePromise= fetch(" https://pokeapi.co/api/v2/pokemon/")



let firstPokeId = Math.floor(Math.random()*809)
let firstPokeurl = "https://pokeapi.co/api/v2/pokemon/" + firstPokeId
let responsePromise = fetch(firstPokeurl)




// let secondPokeId = Math.floor(Math.random()*809)
// let secondPokeurl = "https://pokeapi.co/api/v2/pokemon/" + secondPokeId
// let responsePromise2 = fetch(secondPokeurl)


console.log(responsePromise)
// console.log(responsePromise2)

let handlePromiseSuccess= (response) =>{
  console.log("promist fufilles", response)
  return response.json()

}
  const handleParsedResponseData=(data) =>{
    console.log("data converted", data)

    let ppUrl = data.moves[0].move.url
    let ppResponsePromise = fetch(ppUrl)
    console.log(ppUrl)


    let ppHandlePromiseSuccess= (response) =>{
      console.log("promist fufilles", response)
      return response.json()

    }
      const ppHandleParsedResponseData=(datapp) =>{
        console.log("data converted", datapp)
        console.log(datapp.pp)




         twoPokeomDisplay(data.moves[0].move.name + " PP:" + datapp.pp )
         console.log( data.moves[0].move.name)

         twoPokeomDisplay(data.moves[1].move.name + " PP:" + datapp.pp )
         console.log( data.moves[1].move.name)




          twoPokeomDisplay(data.moves[2].move.name + " PP:"  + datapp.pp  )
          console.log( data.moves[2].move.name)

          twoPokeomDisplay(data.moves[3].move.name + " PP:"  + datapp.pp  )
          console.log( data.moves[3].move.name)

    }
    let ppParsingPromise = ppResponsePromise.then(ppHandlePromiseSuccess)
    ppParsingPromise.then(ppHandleParsedResponseData)





twoPokeomDisplay(data.species.name)
console.log(data.species.name)


let pokeImg =document.createElement('img')
 pokeImg.src = data.sprites.front_default
 document.body.appendChild(pokeImg)

 twoPokeomDisplay("HP "+ data.stats[5].base_stat )
 console.log("HP" + data.stats[5].base_stat)








  }
  let parsingPromise = responsePromise.then(handlePromiseSuccess)
  parsingPromise.then(handleParsedResponseData)


//
//
//
//
//







  let secondPokeId = Math.floor(Math.random()*809)
  let secondPokeurl = "https://pokeapi.co/api/v2/pokemon/" + secondPokeId
  let responsePromise2 = fetch(secondPokeurl)


  console.log(responsePromise2)
  // console.log(responsePromise2)

  let handlePromiseSuccess2= (response2) =>{
    console.log("promise fufilles", response2)
    return response2.json()

  }
    const handleParsedResponseData2=(data) =>{
      console.log("data converted", data)

      let ppUrl2 = data.moves[0].move.url
      let ppResponsePromise2 = fetch(ppUrl2)
      console.log(ppUrl2)


      let ppHandlePromiseSuccess2= (response) =>{
        console.log("promist fufilles", response)
        return response.json()

      }
        const ppHandleParsedResponseData2=(datapp) =>{
          console.log("data converted", datapp)
          console.log(datapp.pp)




           twoPokeomDisplay(data.moves[0].move.name + " PP:" + datapp.pp )
           console.log( data.moves[0].move.name)

           twoPokeomDisplay2(data.moves[1].move.name + " PP:" + datapp.pp )
           console.log( data.moves[1].move.name)




            twoPokeomDisplay(data.moves[2].move.name + " PP:"  + datapp.pp  )
            console.log( data.moves[2].move.name)

            twoPokeomDisplay(data.moves[3].move.name + " PP:"  + datapp.pp  )
            console.log( data.moves[3].move.name)

      }
      let ppParsingPromise2 = ppResponsePromise2.then(ppHandlePromiseSuccess2)
      ppParsingPromise2.then(ppHandleParsedResponseData2)





  twoPokeomDisplay(data.species.name)
  console.log(data.species.name)


  let pokeImg =document.createElement('img')
   pokeImg.src = data.sprites.front_default
   document.body.appendChild(pokeImg)

   twoPokeomDisplay("HP "+ data.stats[5].base_stat )
   console.log("HP" + data.stats[5].base_stat)








    }
    let parsingPromise2 = responsePromise2.then(handlePromiseSuccess2)
    parsingPromise2.then(handleParsedResponseData2)











































}

  const twoPokeomDisplay = (pokemon) =>{
    let pokeData= document.createElement('p')
    console.log(pokeData)
    pokeData.innerText= pokemon
    console.log(pokeData.innerText)
    document.body.appendChild(pokeData)
    // document.getElementsByClassName("data").appendChild(pokeData)
  }






    const twoPokeomDisplay2 = (pokemon) =>{
      let pokeData= document.createElement('p')
      console.log(pokeData)
      pokeData.innerText= pokemon
      console.log(pokeData.innerText)
      document.body.appendChild(pokeData)
      // document.getElementsByClassName("data").appendChild(pokeData)
    }
