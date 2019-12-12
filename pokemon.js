document.addEventListener("DOMContentLoaded", ()=>{
    
    let battle = document.querySelector("#battle")
    let getPokemon = document.querySelector("#getPokemon")
    const getCharacter = async(element)=>{
        try{
            element.querySelector("#pokemon1")
            element.innerText= ""
            let num = Math.floor(Math.random() * 807)
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
             let pokemon = res.data
             let pokemonName = pokemon.name
             let sprite = pokemon.sprites.front_default
             let health = pokemon.stats[5].base_stat
             let moves = pokemon.moves.slice(0,4)
             let pokeSprite = document.createElement("img")
             let pokeHealth = document.createElement("p")
             let name = document.createElement("p")
             pokeSprite.src = sprite
             name.innerText = pokemonName
             pokeHealth.innerText = health
             element.appendChild(name)
             element.appendChild(pokeSprite)
             element.appendChild(pokeHealth)
             let ul = document.createElement("ul")
             moves.forEach(async(move, i) => {
                let moveData = await axios.get(move.move.url);
                let li = document.createElement("li");
                li.innerText = move.move.name;
                ul.appendChild(li)
                })
                element.appendChild(ul)     
            } catch(err)  {
                console.log("Error")
               //  debugger
            }
        }
    const getBattle = ()=>{
    let p = document.createElement("p")
    let winner = document.querySelector(".winner")
    p.innerText = winner + " Wins"
    document.body.appendChild(p)

    }
    
    getPokemon.addEventListener("click", () => {
        let pokemon1 = document.querySelector("#pokemon1")
        let pokemon2 = document.querySelector("#pokemon2")
        getCharacter(pokemon2)
        getCharacter(pokemon1)
    })
    battle.addEventListener("click", ()=>{
        1
        getBattle()
    })
   
})
           
                
                 
                 
                 
                 
                


                 
                
                 
                 
                
            
                
                    
                
                    
                    
                
    
