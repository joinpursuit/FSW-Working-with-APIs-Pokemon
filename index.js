document.addEventListener("DOMContentLoaded", ()=>{
    let button1 = document.querySelector("#getPoke")
    //waited to create function before creating the li
    let ul = document.querySelector("ul")
   const getPokemon = async () =>{
    let num = Math.floor(Math.random() * 807);
    try{
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
        let pokeIndx = res.data;
        let pokeName = pokeIndx.name;
        let pokeSprite = pokeIndx.spites.front_default;
        let randomset = 
        
        //pokeIndx is all the data of a random pokemon
        //need name, sprite, base hp stat, get a random set of 4 moves
        //
        debugger
    }
    catch(err){
        console.log(err);
        
    }
   }
    button1.addEventListener("click", getPokemon)

})