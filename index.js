document.addEventListener("DOMContentLoaded" ,() =>{
    let getPokemon = document.querySelector("#getPokemon")
    const getThatPokemon = async () => {
        try {
            random = Math.floor(Math.random() * Math.floor(964))
            let res = await axios.get(`http://pokeapi.co/api/v2/pokemon/${random}/`)  
            let pokemonName = res.data.name
            // debugger
            let h1 = document.createElement("h1")
            h1.innerText = pokemonName
            document.body.appendChild(h1)
            
            let image = document.createElement("img")
            image.src = res.data.sprites.front_default
            document.body.appendChild(image)

            let h2 = document.createElement("h2")
            h2.innerText = res.data.stats[5].base_stat
            document.body.appendChild(h2)

        } catch(error) {
            console.log("error")
        }
    }   
    getPokemon.addEventListener("click", (getThatPokemon))  
})
getPokemon()
// HP 
// res.data.stats[5].base_stat
