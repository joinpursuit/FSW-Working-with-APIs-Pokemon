document.addEventListener("DOMContentLoaded",() => {
    let getPokemon = document.querySelector("button")
    
    const getPokemon = async () => {
        try{
            let res = await axios.get("https://pokeapi.co/api/v2/pokemon")
        }
    }
})