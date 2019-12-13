document.addEventListener("DOMContentLoaded", async() => {
    let pokemon1;
    let pokemon2;
    let selectWinner;
    let btn = document.querySelector("#getPoke")
    btn.addEventListener("click", () =>{
    
      pokemon1 = getPokemon();
      pokemon2 = getPokemon();
      // selectWinner();
      let refresh = document.querySelector(".data");
      refresh.innerHTML = "";
      console.log('Loaded')
    })
  
  })
  
  const getPokemon = async () => {
      let randomPokemon;
      let num = Math.floor(Math.random() * 809) + 1
      
      try {
        randomPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        data = randomPokemon.data
        console.log(data)
  
        // get display name and add header
        let h4 = document.createElement("h4");
        let displayName = document.querySelector(".data");
        h4.innerText = data.name;
        displayName.appendChild(h4);
        
        // add front image
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
  
  
        data.moves.slice(0, 4).forEach (async el =>{ 
          let url = el.move.url
          let move = await axios.get(url);
         
          // moves.slice(1, 5)
          let pp = move.data.pp
          let li = document.createElement("li");
          li.innerText = "Moves:\n " + move.data.name + " " + "PP: " +  pp
          ul.appendChild(li)
        })
      
        
//         // for(let i = 0; i <= 3 ; i ++){
//         //   let getMovesUrl = data.moves[i].move.url
//         //   let moves = await axios.get(getMovesUrl)
//         // //  debugger
//         //   let li = document.createElement("li");
//         //   li.innerText = "Moves:\n " + moves.data.name + " " + "PP: " +  moves.data.PP
//         //   ul.appendChild(li)
//     //  }
        
     
      } catch (err) {  
        console.log(err)
      }
      let battleBtn = document.querySelector("#battle");
        battleBtn.addEventListener("click", () => {
        const selectWinner = async() =>{
          let twoPokemon = [pokemon1, pokemon2];
          console.log(twoPokemon)
          debugger
          let winner = twoPokemon[Math.floor(Math.random() * twoPokemon.length)];
          let loser;
          if (winner == twoPokemon[0]) {
            loser = twoPokemon[1];
          
          } else {
            loser = twoPokemon[0];
          }
          let ul = document.createElement("ul");
          let li = document.createElement("li")
          li.innerText = `${winner} defeated ${loser}`;
          let winners = document.querySelector(".battleHistory");
          winners.appendChild(p);
  
        }
      })
    }
     

  
//   // pokemon1 = await getPokemon();
//   // pokemon2 = await getPokemon();