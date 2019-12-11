document.addEventListener("DOMContentLoaded",()=>{
    let getPokemon = document.querySelector("#getPokemon")
    getPokemon.addEventListener("click",get2Pokemon)
    const displayOne = async()=>{
        try{
            let randomA = Math.floor(Math.random()* 964) +1
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomA}`)
            let pokemonA = res.name
            pokemonA.forEach(pokemon =>{
                let poke = document.createElement("h2")
                let div1 = document.querySelector("pokemonA")
                poke.innerText = pokemon.name;
                div1.appendChild(poke)
            })

        }catch(err){
            console.log("error")
        }
    }
    const displayTwo=async()=>{
        try{
            let randomB = Math.floor(Math.random()*964)+1
            let res2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomB}`)
            let pokemonB = res2.name
            pokemonB.forEach(pokemon=>{
                let poke2 = document.createElement("h2")
                let div2 = document.querySelector("pokemonB")
                poke2.innerText = pokemon.name;
                div2.appendChild(poke2)
                
            })
        }catch(err){
            console.log("error")
        }
  
    }
    const get2Pokemon =async()=>{
        displayOne()
        displayTwo()
    }
    // const battlePokemon=async()=>{

    // }
    get2Pokemon()
    getPokemon.addEventListener("click", (event)=>{

    })

})  


  










