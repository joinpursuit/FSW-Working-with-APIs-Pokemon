document.addEventListener("DOMContentLoaded", async() => {
  let pokemon1;
  let pokemon2;
  let data;
  //let picture;
  let btn = document.querySelector("#getPoke")
    btn.addEventListener("click", () =>{
    getPokemon();
    getMoves()
  })
  const getPokemon = async () => {
    let randomPokemon;
    let num = Math.floor(Math.random() * 809) + 1
    
    try {
      randomPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      data = randomPokemon.data
      
      let h4 = document.createElement("h4");
      h4.innerText = data.name;
      let displayName = document.querySelector(".data");
      displayName.appendChild(h4);
      
      let picture = document.createElement("img");
      picture.src = data.sprites.front_default;
      let displayPicture = document.querySelector(".data");
      displayPicture.appendChild(picture);
      
      let li = document.createElement("li");
      li.id = "hp"
      li.innerText = "HP: "+ data.stats[5].base_stat
      let ul = document.createElement("ul");
      ul.appendChild(li); 
      let displayHp = document.querySelector(".data");
      displayHp.appendChild(ul);
      
      
      
      debugger 
    } catch (err) {  
      console.log('there', err)
    }
    // return randomPokemon.data
  }
  // const moves = async () => {
  //   try{
  //     let getHP
  //   }}

  pokemon1 = await getPokemon();
  pokemon2 = await getPokemon();

})