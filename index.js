
console.log("heyy")
document.addEventListener("DOMContentLoaded",()=>{
    // let form = document.querySelector("form");
    let button = document.querySelector("#getPokemon");
    button.addEventListener("click", ()=>{
        getPokemon();
        getPokemonTwo();

    })
      
})
const getPokemon = async () =>{
            
    try{

        //randomly gets the first pokemon
        let pokeId = Math.floor(Math.random() * 809)
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`);

        //gets the pokemon name of the first pokemon
        let pokeOneName = res.data.name;
        
        //image of the first pokemon
        let div = document.querySelector("#pokemonOne");
        div.innerHTML = ""
        let pokeOneSprite = res.data.sprites.front_default;
        let img = document.createElement("img");
        img.src = pokeOneSprite;
        div.appendChild(img);

        //gets the hp of the first pokemon
        let hpOne = res.data.stats[5].base_stat;
        
    
    }catch(error){
        console.log(error)
    }
}

const getPokemonTwo = async () =>{

    try{
                //randomly gets the second pokemon
                let pokeIdTwo = Math.floor(Math.random()* 809)
                let resTwo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeIdTwo}/`);
                
                //gets the pokemon's name of the second pokemon
                let pokeTwoName = resTwo.data.name;
        
                //image of the second pokemon
                let divTwo = document.querySelector("#pokemonTwo");
                divTwo.innerHTML = ""
                let pokeTwoSprite = resTwo.data.sprites.front_default;
                let imgTwo = document.createElement("img");
                imgTwo.src = pokeTwoSprite;
                divTwo.appendChild(imgTwo);
                
        
                //gets the hp of the second pokemon
                let hpTwo = resTwo.data.stats[5].base_stat;
                // debugger;

    }catch(error){
        console.log(error)
    }

}

