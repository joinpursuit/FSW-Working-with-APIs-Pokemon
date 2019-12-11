document.addEventListener("DOMContentLoaded",()=>{
    let getPokemon = document.querySelector("#getPokemon")
    getPokemon.addEventListener("click",displayTwo)
    const displayOne = async()=>{
        try{
            let randomA = Math.floor(Math.random()* 964) +1
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomA}`)
            let pokemonA = res.data.results
            pokemonA.forEach(pokemon =>{
                let poke = document.createElement("h2")
                poke.innerText = pokemon.name;
                getPokemon.appendChild(poke)
            })

        }catch(err){
            console.log("error")
        }
    }
    const displayTwo=async()=>{
        displayOne()
        displayOne()
    }
    displayTwo()
    getPokemon.addEventListener("click", (event)=>{

    })

})  


  










