document.addEventListener("DOMContentLoaded" ,() =>{
    let getPokemon = document.querySelector("#getPokemon")
    let pokemon1 = document.querySelector("#pokemon1")
    let pokemon2 = document.querySelector("#pokemon2")
    const getThatPokemon = async () => {
        try {
            random = Math.floor(Math.random() * Math.floor(809))
            let res = await axios.get(`http://pokeapi.co/api/v2/pokemon/${random}/`)  
            let pokemonName = res.data.name
            // debugger 
            let h1 = document.createElement("h1")
            h1.innerText = pokemonName
            pokemon1.appendChild(h1)
            
            let image = document.createElement("img")
            image.src = res.data.sprites.front_default
            pokemon1.appendChild(image)

            let h2 = document.createElement("h2")
            h2.innerText = res.data.stats[5].base_stat
            pokemon1.appendChild(h2)

            let h3 = document.createElement("h3")
            h3.innerText = res.data.moves[0].move.name      
            pokemon1.appendChild(h3)

        } catch(error) {
            console.log("error")
        }  
    }   

    const getThatPokemon2 = async () => {
        try {
            random = Math.floor(Math.random() * Math.floor(964))
            let res = await axios.get(`http://pokeapi.co/api/v2/pokemon/${random}/`)
            let pokemonName = res.data.name

            let h1 = document.createElement("h1")
            h1.innerText = pokemonName
            pokemon2.appendChild(h1)

            let image = document.createElement("img")
            image.src = res.data.sprites.front_default
            pokemon2.appendChild(image)

            let h2 = document.createElement("h2")
            h2.innerText = res.data.stats[5].base_stat
            pokemon2.appendChild(h2)
            
            let h3 = document.createElement("h3")
            h3.innerText = res.data.moves[0].move.name
            pokemon2.appendChild(h3)

            // let image 
        } catch(error) {
            console.log("error")
        }
    }

    getPokemon.addEventListener("click", () => {
        getThatPokemon();
        getThatPokemon2();
    })  
})

// HP 
// res.data.stats[5].base_stat
