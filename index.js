document.addEventListener("DOMContentLoaded" ,() =>{
    let getPokemon = document.querySelector("#getPokemon")
    let pokemon1 = document.querySelector("#pokemon1")
    let pokemon2 = document.querySelector("#pokemon2")
    const getThatPokemon = async () => {
        try {
            random = Math.floor(Math.random() * Math.floor(809))
            let res = await axios.get(`http://pokeapi.co/api/v2/pokemon/${random}/`)  
            let pokemonName = res.data.name
            let h1 = document.createElement("h1")
            h1.innerText = pokemonName
            pokemon1.appendChild(h1)
            
            let image = document.createElement("img")
            image.src = res.data.sprites.back_default
            pokemon1.appendChild(image)

            let h2 = document.createElement("h2")
            h2.innerText = `HP: ${res.data.stats[5].base_stat}`
            pokemon1.appendChild(h2)
            
            let res2 = await axios.get(res.data.moves[0].move.url)
            let res3 = await axios.get(res.data.moves[1].move.url)
            let res4 = await axios.get(res.data.moves[2].move.url)
            let res5 = await axios.get(res.data.moves[3].move.url)          
            
            let h3 = document.createElement("h3")
            let h4 = document.createElement("h4")
            let h5 = document.createElement("h5")
            let h6 = document.createElement("h6")
            h3.innerText = `${res.data.moves[0].move.name} PP: ${res2.data.pp}`
            h4.innerText = `${res.data.moves[1].move.name} PP: ${res3.data.pp}`
            h5.innerText = `${res.data.moves[2].move.name} PP: ${res4.data.pp}`
            h6.innerText = `${res.data.moves[3].move.name} PP: ${res5.data.pp}`
            pokemon1.appendChild(h3)
            pokemon1.appendChild(h4)
            pokemon1.appendChild(h5)
            pokemon1.appendChild(h6)

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
            h2.innerText = `HP: ${res.data.stats[5].base_stat}`
            pokemon2.appendChild(h2)

            let res2 = await axios.get(res.data.moves[0].move.url)
            let res3 = await axios.get(res.data.moves[1].move.url)
            let res4 = await axios.get(res.data.moves[2].move.url)
            let res5 = await axios.get(res.data.moves[3].move.url)
            
            let h3 = document.createElement("h3")
            let h4 = document.createElement("h4")
            let h5 = document.createElement("h5")
            let h6 = document.createElement("h6")
            h3.innerText = `${res.data.moves[0].move.name} PP: ${res2.data.pp}`
            h4.innerText = `${res.data.moves[1].move.name} PP: ${res3.data.pp}`
            h5.innerText = `${res.data.moves[2].move.name} PP: ${res4.data.pp}`
            h6.innerText = `${res.data.moves[3].move.name} PP: ${res5.data.pp}`
            pokemon2.appendChild(h3)
            pokemon2.appendChild(h4)
            pokemon2.appendChild(h5)
            pokemon2.appendChild(h6)

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
