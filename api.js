document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContent is loaded")
    let getButton = document.querySelector("#get-pokemon")
    getButton.addEventListener("click", () => {
        getFirstPokemon()
        getSecondPokemon()
        console.log("get pokemon", getFirstPokemon)
        console.log("get another pokemon", getSecondPokemon)
    })
    let battleButton = document.querySelector("#battle")
    battleButton.addEventListener("click", battleHistory)   
})


function getRandom(min, max) {
    console.log()
    return Math.floor(Math.random() * (809 - 1) + 1);
}


const getFirstPokemon = () => {
    let randomId = getRandom()
    let url = `http://pokeapi.co/api/v2/pokemon/${randomId}`
    axios.get(url)
    .then(response => {
        displayFirstPokemon(response)
        console.log("response", response)
    })
    .catch(error => {
        console.log("there's an error", error)
    })
}


const getSecondPokemon = () => {
    let randomId2 = getRandom()
     console.log("another random id", randomId2)
    let url = `http://pokeapi.co/api/v2/pokemon/${randomId2}`
    axios.get(url)
    .then(response => {
        displayFirstPokemon(response)
        console.log("response", response)
    })
    .catch(error => {
        console.log("there's an error", error)
    })
}


const displayFirstPokemon = (response) => {
    console.log("is there a response", response)
    let div = document.querySelector(".data")
    let img = document.createElement("img")
    let pokeInfo = document.createElement("p")
    let p1 = document.createElement("p")
    console.log("pokemon information", pokeInfo)
    img.src = response.data.sprites.front_default
    pokeInfo.innerText = `Name:${response.data.name}`
    p1.innerText = `Base HP:${response.data.stats[0].base_stat}`
    console.log('key in stats', response.data.stats)
    console.log("innertext", pokeInfo.innerText)
    //p2.innerText = `Moves:${response.data.moves}`
    div.appendChild(pokeInfo)
    div.appendChild(p1)
    //div.appendChild(p2)
    div.appendChild(img)
}


const pokemonMoves = (arr, el) => {
    let p2 = document.createElement("p")
    let div = document.querySelector(".data")
    let ul = document.querySelector("ul")
    for (let i = 0; i < 4; i++) {
       let moveNames = document.createElement("li")
       
    //    if (arr[0] && arr[1] && arr[2] && arr[3]) {
    //        console.log
    //    }
       
    }
   
    p2.innerText = `Moves:`

}


const battleHistory = () => {
    let battlePokemon = [fi]
}