document.addEventListener("DOMContentLoaded", async() => {
  let pokemon1;
  let pokemon2;
  let btn = document.querySelector("#getPoke")
  btn.addEventListener("click", () =>{
    pokemon1 = getPokemon();
    pokemon2 = getPokemon();
    let refresh = document.querySelector(".data");
    refresh.innerHTML = ""
      //getPokemon();
      // getMoves()
     
  })

})
  const getPokemon = async () => {
    let randomPokemon;
    let num = Math.floor(Math.random() * 809) + 1
    
    try {
      randomPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      data = randomPokemon.data
      
      let h4 = document.createElement("h4");
      let displayName = document.querySelector(".data");
      h4.innerText = data.name;
      displayName.appendChild(h4);
      
      let picture = document.createElement("img");
      let displayPicture = document.querySelector(".data");
      picture.src = data.sprites.front_default;
      displayPicture.appendChild(picture);
      
      let li = document.createElement("li");
      let ul = document.createElement("ul");
      let displayHp = document.querySelector(".data");
      li.id = "hp"
      li.innerText = "HP: "+ data.stats[5].base_stat
      ul.appendChild(li); 
      displayHp.appendChild(ul);
      
      for(let i = 0; i <= 3 ; i ++){
        let getMovesUrl = data.moves[i].move.url
        let moves = await axios.get(getMovesUrl)
       // debugger
        let li = document.createElement("li");
        li.innerText = "Moves:\n " + moves.data.name + " " + "PP: " +  moves.data.PP
        ul.appendChild(li)
      }
    
      
   //debugger 
    } catch (err) {  
      console.log('there', err)
    }
   
  }

  
  // pokemon1 = await getPokemon();
  // pokemon2 = await getPokemon();
  



