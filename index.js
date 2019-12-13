document.addEventListener("DOMContentLoaded", async() => {
  const pokemon = []; 
  const getPokemon = async () => {
    let randomPokemon;
    let num = Math.floor(Math.random() * 809) + 1
    
     try {
      
      randomPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      
      data = randomPokemon.data
      pokemon.push(data.name);

      //get display name and add header
      let h4 = document.createElement("h4");
      let displayName = document.querySelector(".data");
      h4.innerText = data.name;
      displayName.appendChild(h4);

      // add front image
      let picture = document.createElement("img");
      let displayPicture = document.querySelector(".data");
      picture.src = data.sprites.front_default;
      displayPicture.appendChild(picture);
      
      //display HP
      let li = document.createElement("li");
      let ul = document.createElement("ul");
      let displayHp = document.querySelector(".data");
      li.id = "hp"
      li.innerText = "HP: "+ data.stats[5].base_stat
      ul.appendChild(li); 
      displayHp.appendChild(ul);

      //loop through 4 moves
      data.moves.slice(0, 4).forEach (async el =>{ 
        let url = el.move.url
        let move = await axios.get(url);
       
        // display 4 moves
        let pp = move.data.pp
        let li = document.createElement("li");
        li.innerText = "Moves:\n " + move.data.name + " " + "PP: " +  pp
        ul.appendChild(li)
      })
    } catch (err) {  
       console.log(err)
   }
  }

    // battle function
  const battle = () => {
    console.log("battle")
    // use a random chose to get a random winner using if statement
    let winner = pokemon[Math.floor(Math.random() * pokemon.length)];
    let loser;
    if (winner == pokemon[0]) {
      loser = pokemon[1];
    
    } else {
      loser = pokemon[0];
    }

    // cerate ul and li append winner and loser to  
    let ul = document.createElement("ul");
    let li = document.createElement("li")
    li.id = "liBattle"
    li.innerText = `${winner} defeated ${loser}`;
    ul.appendChild(li)
    let winners = document.querySelector(".battleHistory");
    winners.appendChild(ul);

  }

  //create button with event listener to fire the function to get pokemon
  let btn = document.querySelector("#getPoke")
   btn.addEventListener("click", async () => {
     // refresh the page
    let refresh = document.querySelector(".data");
    refresh.innerHTML = "";
     await getPokemon();
     await getPokemon();
     console.log(pokemon)
    
   })

   //add event listener to the battle function
   let battleBtn = document.querySelector("#battle");
   battleBtn.addEventListener("click", () => {
      battle();
      
   })

})

