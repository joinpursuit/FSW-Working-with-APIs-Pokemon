document.addEventListener("DOMContentLoaded", () => {
        console.log("DOMContent is loaded")
        getPokemon()
        console.log("get pokemon", getPokemon)
    let getButton = document.addEventListener("click", getPokemon)
})

function getRandom(min, max) {
    console.log()
    return Math.floor(Math.random() * (809 - 1) + 1);
}

const getPokemon = () => {
    
   
    let randomId = getRandom()
   // let randomId2 = getRandom(4)

    let url = `http://pokeapi.co/api/v2/pokemon/${randomId}`
    // let movesUrl = `https://pokeapi.co/api/v2//move/${randomId2}`
    axios.get(url)
        .then(response => {
            // let key = response.data.name
          
            displayPokemon(response)
            
            console.log("response", response)
        })
        .catch(error => {
               console.log("there's an error", error)
        })
        //  

   
}

const displayPokemon = (response) => {
    console.log("is there a response", response)
    let div = document.querySelector(".data")
    let ul = document.querySelector("ul")
    let newUl = document.createElement('ul')
    let img = document.createElement("img")
    let pokeInfo = document.createElement("li")
    let pokeInfo2 = document.createElement("li")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    //console.log("pokemon information", pokeInfo)
    img.src = response.data.sprites.front_default
    pokeInfo.innerText = response.data.name 
    pokeInfo2.innerText =response.data.name
    p1.innerText = response.data.stats[0].base_stat
        //console.log('key in stats', response.data.stats)
    console.log("innertext", pokeInfo.innerText)
    //console.log("response", response.data)
    console.log("pokeInfo", pokeInfo2.innerText)
    ul.appendChild(pokeInfo)
    newUl.appendChild(pokeInfo2)
    div.appendChild(p1)
    div.appendChild(img)
         
   
}

