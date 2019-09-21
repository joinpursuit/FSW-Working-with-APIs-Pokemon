document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContent is loaded")
     getPokemon1()
    // getPokemon2()
    console.log("get pokemon", getPokemon1)
    let getButton = document.addEventListener("click", getPokemon1, getPokemon2)
})

function getRandom(min, max) {
    return Math.floor(Math.random() * (809 - 1) + 1);
}

const getPokemon1 = () => {
     let randomId = getRandom()
    let url = `http://pokeapi.co/api/v2/pokemon/${randomId}`
    console.log("randomId", randomId)
    return axios.get(url)
}
const getPokemon2 = () => {
    let randomId = getRandom()
    let url = `http://pokeapi.co/api/v2/pokemon/${randomId}`
    console.log("randomId", randomId)
    return axios.get(url)

} 

axios.all([getPokemon1()], [getPokemon2()])
    .then(axios.spread(function(pokemon1, pokemon2) {
         console.log(pokemon1)
         console.log(pokemon2)
         displayPokemon(pokemon1)
         displayPokemon(pokemon2)
    }))

    
// .then(response => {
//             // let key = response.data.name
          
//             displayPokemon(response)
            
//             console.log("response", response)
//         })
//         .catch(error => {
//                console.log("there's an error", error)
//         })
//         .finally(() => {
//             console.log("inside")
//         })
   


const displayPokemon = (pokemon1, pokemon2) => {
    console.log("is there a response", pokemon1)
    console.log("the data", pokemon2)
    let div = document.querySelector(".data")
    let ul = document.querySelector("ul")
    let newUl = document.createElement('ul')
    let img = document.createElement("img")
    let pokeInfo = document.createElement("li")
    let pokeInfo2 = document.createElement("li")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    //console.log("pokemon information", pokeInfo)
    img.src =pokemon1.data.sprites.front_default
    pokeInfo.innerText = pokemon1.data.name 
    pokeInfo2.innerText =pokemon1.data.name
    p1.innerText = pokemon1.data.stats[0].base_stat
        //console.log('key in stats', response.data.stats)
    console.log("innertext", pokeInfo.innerText)
    //console.log("response", response.data)
    console.log("pokeInfo", pokeInfo2.innerText)
    ul.appendChild(pokeInfo)
    newUl.appendChild(pokeInfo2)
    div.appendChild(p1)
    div.appendChild(img)
}



