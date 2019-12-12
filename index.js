document.addEventListener("DOMContentLoaded",() => {
    let  pokeButton = document.querySelector("#get")
    
    const getPokemon = async () => {
        let pokeData = Math.floor((Math.random()*809)+1) 
        try{
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeData}`)
            return res.data;
            debugger
            // let pokeName = await axios.get('https://pokeapi.co/api/v2/pokemon/' )
            // pokemon.forEach(pokemon => {
                
            // })
            
            
        }catch(err){
            console.log("Error");
            
        }
        

        
        
    }
    pokeButton.addEventListener("click", async()=>{
       
        let pokemon1 = await getPokemon()
        let pokemon2 = await getPokemon()
        // console.log(getPokemon());
        
        let ul = document.querySelector("ul")
        let h1 = document.createElement("h1")
        h1.innerText =  pokemon1.name
        let newh1 = document.createElement("h1")

        newh1.innerText =  pokemon2.name
        document.body.appendChild(h1)
        document.body.appendChild(newh1)
        
    
        
    })
})


// https://pokeapi.co/docs/v2.html#pokemon
// https://pokeapi.co/docs/v2.html/#moves