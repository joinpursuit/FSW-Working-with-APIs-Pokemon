document.addEventListener("DOMContentLoaded",() => {
    let getPokeButton = document.querySelector(".getPokeButton")
    let battleButton = document.querySelector(".battleButton")
    
    
    const randomNum = (min,max) => {
        return Math.floor(Math.random() * (max - min + 1))
    }
    const getPokemon  = async () => {
       
        try{ 
        let data = document.querySelector(".data")

            
           
       let pokemon1 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum(1,89)}`)
       let pokemon2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum(1,89)}`)
       
       
      
       let pokemon1ul = document.querySelector("#pokemon1ul")
       pokemon1ul.style.listStyle = "none"
       let pokemon2ul = document.querySelector("#pokemon2ul")
       pokemon2ul.style.listStyle = "none"

       
       
       let pokemon1NameHeader = document.createElement("h3")
       pokemon1NameHeader.innerText = `-${pokemon1.data.name}`
       pokemon1ul.appendChild(pokemon1NameHeader)

       let pokemon2NameHeader = document.createElement("h3")
       pokemon2NameHeader.innerText = `-${pokemon2.data.name}`
       pokemon2ul.appendChild(pokemon2NameHeader)

       
       
       let pokemon1ImageList = document.createElement("li")
       let pokemon1Image = document.createElement("img")
       pokemon1Image.src = pokemon1.data.sprites.front_default
       pokemon1ImageList.appendChild(pokemon1Image)
       pokemon1ul.appendChild(pokemon1ImageList)

       let pokemon2ImageList = document.createElement("li")
       let pokemon2Image = document.createElement("img")
       pokemon2Image.src = pokemon2.data.sprites.front_default
       pokemon2ImageList.appendChild(pokemon2Image)
       pokemon2ul.appendChild(pokemon2ImageList)
       

       
       let pokemon1BaseHpStatList = document.createElement("li")
       pokemon1BaseHpStatList.innerText = `HP:${pokemon1.data.stats[0].base_stat}`
       pokemon1ul.appendChild(pokemon1BaseHpStatList) 
 
       let pokemon2BaseHpStatList = document.createElement("li")
       pokemon2BaseHpStatList.innerText = `HP:${pokemon2.data.stats[0].base_stat}`
       pokemon2ul.appendChild(pokemon2BaseHpStatList)

       

      

       

       
    
        




       

       }catch(err) {
         console.log(err)
       }
      

    }

    const battlePokemon = () => {
       axios.get()
    }

    getPokeButton.addEventListener("click",() => {
        getPokemon()
    })

    battleButton.addEventListener("click", () => {
        
        battlePokemon()

    })


})