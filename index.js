document.addEventListener("DOMContentLoaded", () => {
    let pokebutton = document.getElementById("getPoke")
    let battleButton = document.getElementById("battlePoke")
    let savePokeName = []
    
    const getPokemon = async (div) => {
        let pokemonDiv = document.querySelector(`.${div}`)
        
        let pokeNum1 = Math.floor(Math.random()* 800)
        
        let pokemon1 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNum1}`)  //to get random sprite(pokemon imgage)
        
        let ul = document.createElement("ul")
        pokemonDiv.appendChild(ul)
        
        let name1 = pokemon1.data.name // to get name and save to a variable
        
        savePokeName.push(name1)
        let h2 = document.createElement("h2")
        h2.innerText = name1
        ul.appendChild(h2)
        
        let img1 = document.createElement("img")
        
        
        img1.src = pokemon1.data.sprites.front_default
        ul.appendChild(img1)
        
        let p = document.createElement("p")
        let hp1 = pokemon1.data.stats[5].base_stat //finds the hp and saves it to a variable

        p.innerText = "HP: " + hp1
        ul.appendChild(p)

        for(let i = 0; i < 4; i++){
            let moveName1 = pokemon1.data.moves[i].move.name // gets move name
            
            let ppUrl1 = pokemon1.data.moves[i].move.url //gets the url where PP is in
            
            let PP1 = await axios.get(ppUrl1)
             
            let li = document.createElement("li")

            li.innerText = moveName1 + " PP: " + PP1.data.pp
            
            ul.appendChild(li) 
        }
    }
    const clearDiv = () => {
        div1 = document.querySelector(".data1")
        div2 = document.querySelector(".data2")
        div1.innerText= ""
        div2.innerText= ""
    }
    const battlePokemon = () => {
        // savePokeName[Math.floor(Math.random()* 2)]
        let h3 = document.querySelector("#BH")
        // let ul = document.createElement("ul")
        let li = document.createElement("li")
        li.innerText = savePokeName[Math.floor(Math.random()* 2)] + " is the winner !"

        // h3.appendChild(ul)
        h3.appendChild(li)
    }
    pokebutton.addEventListener("click", () => {
        clearDiv()
        getPokemon('data1')
        getPokemon('data2')
        savePokeName = []
        // debugger
    })
    battleButton.addEventListener("click", () => {
        battlePokemon()
    })
  
})
 