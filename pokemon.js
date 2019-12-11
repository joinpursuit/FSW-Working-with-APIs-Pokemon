document.addEventListener("DOMContentLoaded", ()=>{
    //let display = document.querySelector("#display")
    //let battle = document.querySelector("#battle")
    let getPokemon = document.querySelector("#getPokemon")
    let body = document.querySelector("body")
    //let pokemon1 = document.createElement("ul")
    //let pokemon2 = document.createElement("ul")
    const getCharacter = async()=>{
        try{
            let num = Math.floor(Math.random() * 807)
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
             let pokemon = res.data
             let pokemonName = pokemon.name
             let sprite = pokemon.sprites.front_default
             let health = pokemon.stats[5].base_stat
             let moves = pokemon.moves.slice(0,4)
             let pokeSprite = document.querySelector("#pic")
             let pokeHealth = document.querySelector("#health")
             let name = document.querySelector("#name")
             pokeSprite.src = sprite
             name.innerText = pokemonName
             pokeHealth.innerText = health
             body.appendChild(name)
             body.appendChild(pokeSprite)
             body.appendChild(pokeHealth)
             moves.forEach(async(move, i) => {
                let moveData = await axios.get(move.move.url);
                let li = document.querySelector("#move" + (i + 1));
                li.innerText = move.move.name;
                })
            } catch(err)  {
                console.log("Error")
               //  debugger
            }
        }
    
    getPokemon.addEventListener("click", () => {
        secondPokemon = getCharacter()
        getCharacter(secondPokemon)
    })
    })
           
                
                 
                 
                 
                 
                


                 
                
                 
                 
                
            
                
                    
                
                    
                    
                
    
