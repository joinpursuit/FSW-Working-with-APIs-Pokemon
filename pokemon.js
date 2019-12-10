document.addEventListener("DOMContentLoaded", ()=>{
    //let display = document.querySelector("#display")
    //let battle = document.querySelector("#battle")
    let getPokemon = document.querySelector("#getPokemon")
    let body = document.querySelector("body")
    
    getPokemon.addEventListener("click", ()=>{
        const getCharacter = async()=>{
            try{
                let res = await axios.get("https://pokeapi.co/api/v2/pokemon")
                
                //debugger
                 let character = res.data.results
                 let characters = character[Math.floor(Math.random() * character.length)]
                 let name = document.querySelector("#name")
                 name.innerText = characters.name
                 body.appendChild(name)
             } catch(err)  {
                 console.log("Error")
             }
         }
         const getCharacter2 = async ()=>{
             try{
                 let res2 = await axios.get("https://pokeapi.co/api/v2/move/")
                 let move = res2.data.results
                 let moves = move[Math.floor(Math.random() * character2.length)]
                 let name = document.querySelector("#name")
                     name.InnerText = moves.name
                     body.appendChild(name)
             } catch(err){
                 console.log("Error")
             }
         }
             getCharacter() && getCharacter2()
         })
     })
                 
                
            
                
                    
                
                    
                    
                
    
