document.addEventListener("DOMContentLoaded" ,() =>{
    let getPokemon = document.querySelector("#getPokemon")
    const getThatPokemon = async () => {
        try {
            random = Math.floor(Math.random() * Math.floor(964))
            let res = await axios.get(`http://pokeapi.co/api/v2/pokemon/${random}/`)  
            let pokemonName = res.data.name
            let pokeBody = document.createElement("name")
            pokeBody.innerText = pokemonName
        } catch(error) {
            console.log("error")
        }
    }   
    getPokemon.addEventListener("click", (getThatPokemon)) 
})

