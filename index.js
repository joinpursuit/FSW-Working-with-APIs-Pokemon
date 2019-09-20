document.addEventListener("DOMContentLoaded",()=>{})

function getPokemon(){
    let pokemonID = Math.floor(Math.random()*808 + 1)
    let pokemonID2 = Math.floor(Math.random()*808 + 1)
     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}` )
     .then(response => {
       return response.json()
     })
     .then(response=>{
      displayPokemon(response,1)
     }).catch(err => {
      console.log("err: ", err)
     }
     )
     let moveID = [];
     for(let i = 0 ; i<8;i++){
      moveID.push(Math.floor(Math.random()*80 + 1))
     }
     
     for(let i = 0 ; i<8;i++){
     axios.get(`https://pokeapi.co/api/v2/move/${moveID[i]}`)
     .then(response=>{
        displayMove(response,i)
      }).catch(err => {
       console.log("err: ", err)
      })
     }


     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID2}` )
     .then(response => {
       return response.json()
     })
     .then(response=>{
        displayPokemon(response,2)
     }).catch(err => {
      console.log("err: ", err)
     }
     )

     
        
}

function displayPokemon(poke,num){
    
  let player

  if(num === 1){
    player = document.querySelector("#p1")}
    else if(num === 2){
    player = document.querySelector("#p2")
    }
    while (player.firstChild) {
      player.removeChild(player.firstChild);
    }
    let name = document.createElement("h3")
    let sprite = document.createElement("img")
    let hp = document.createElement("p")
    name.innerText = poke.name
    sprite.src = poke.sprites.front_default
    hp.innerText = "HP: " + poke.stats[0].base_stat
    let arr = [name,sprite,hp]
    for(let i of arr){
    player.appendChild(i)
    

  }}



function displayMove(move,num){
  let moveBlock = document.querySelector(`#move${num}`)
  moveBlock.innerText = move.data.name + " PP: " + move.data.pp

}

function battlePokemon(){
  let firstpoke = document.querySelector("#p1").firstChild.innerText;
  let secondpoke = document.querySelector("#p2").firstChild.innerText;
  let p = document.createElement("p");
  let arr = [firstpoke,secondpoke];
  let num = Math.floor(Math.random()*2)
  let num2 = 1 - num;
  p.innerText = arr[num]+ " defeated " + arr[num2];
  document.querySelector(".battleHistory").appendChild(p)
}