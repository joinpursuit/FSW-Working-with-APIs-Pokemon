document.addEventListener("DOMContentLoaded",() => {
    let pokeData = Math.floor((Math.random()*809)+1) 
    let  pokeButton = document.querySelector("#get")
    
    const getPokemon = async () => {
        try{
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeData}`)
            let pokemon = res.data;
            // pokemon.forEach(pokemon => {
            //     debugger 
            // })
        }catch(err){
            console.log("Error");
            
        }
    }
    pokeButton.addEventListener("click",()=>{

        getPokemon()
        getPokemon()
    })
})


// https://pokeapi.co/docs/v2.html#pokemon
// https://pokeapi.co/docs/v2.html/#moves