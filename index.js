document.addEventListener("DOMContentLoaded", () => {
    // let pokemonDiv = document.querySelector(".data1")
    // let rightPokemon = document.querySelector(".data2")
    
    // let ul = document.createElement("ul")
    // let ul2 = document.querySelector("#poke2")
    
    let pokebutton = document.getElementById("getPoke")
    
    
    
    // axios.get each el and append it to the body then call function twice
    const getPokemon = async (div) => {
        let pokemonDiv = document.querySelector(`.${div}`)
        
        let pokeNum1 = Math.floor(Math.random()* 800)
        // let pokeNum2 = Math.floor(Math.random()* 800)
        
        
        let pokemon1 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNum1}`)  //to get random sprite(pokemon imgage)
        // let pokemon2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNum2}`)
        // debugger
        
        let ul = document.createElement("ul")
        pokemonDiv.appendChild(ul)

        // let pokeArr =[pokemon1,pokemon2]
        
        let name1 = pokemon1.data.name // to get name and save to a variable
        // let name2 = pokemon2.data.name
        
        let h2 = document.createElement("h2")
        h2.innerText = name1
        ul.appendChild(h2)
        
        // h2.innerText = name2
        // rightPokemon.appendChild(h2)
        
        let img1 = document.createElement("img")
        // let img2 = document.createElement("img")
        
        img1.src = pokemon1.data.sprites.front_default
        ul.appendChild(img1)
        
        // img2.src = pokemon2.data.sprites.front_default
        // rightPokemon.appendChild(img2)
        
        let p = document.createElement("p")
        let hp1 = pokemon1.data.stats[5].base_stat //finds the hp and saves it to a variable
        // let hp2 = pokemon2.data.stats[5].base_stat

        p.innerText = "HP: " + hp1
        ul.appendChild(p)
        // p.innerText = "HP: " + hp2
        // ul2.appendChild(p)


        for(let i = 0; i < 4; i++){
            // let li2 = document.createElement("li")
            
            let moveName1 = pokemon1.data.moves[i].move.name // gets move name
            // let moveName2 = pokemon2.data.moves[i].move.name
           
            
            let ppUrl1 = pokemon1.data.moves[i].move.url //gets the url where PP is in
            // let ppUrl2 = pokemon2.data.moves[i].move.url
            
            let PP1 = await axios.get(ppUrl1)
            // let getPP2 = await axios.get(ppUrl2) 
            let li = document.createElement("li")

            li.innerText = moveName1 + " PP: " + PP1.data.pp
            // li2.innerText = result2
            
            ul.appendChild(li) 
            // ul2.appendChild(li2)
            // debugger
            
            
        }
        // ul.appendChild(li) 
        // ul.appendChild(img)
        
        // ul2.appendChild(li2)
        // ul2.appendChild(img2)
        // // debugger
        // document.body.appendChild(img)
        // document.body.appendChild(img2)
        // debugger
    }
    
    
    pokebutton.addEventListener("click", () => {
        getPokemon('data2')
        getPokemon('data1')
    })
  
})
 