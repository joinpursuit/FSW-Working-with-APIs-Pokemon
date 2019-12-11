document.addEventListener("DOMContentLoaded", async() => {
  let pokemon1;
  let pokemon2;
  let data;
  let picture;
  let btn = document.querySelector("#getPoke")
    btn.addEventListener("click", () =>{
    getPokemon();
  })
  const getPokemon = async () => {
    let randomPokemon;
    let num = Math.floor(Math.random() * 809) + 1
    console.log(num)
    try {
      randomPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      data = randomPokemon.data
      name = data.name
      let h4 = document.createElement("h4");
      h4.innerText = data.name;
      let displayName = document.querySelector(".data");
      displayName.appendChild(h4);
      
      picture = data.sprites.front_default;

      debugger
    } catch (err) {
      console.log('there', err)
    }
    return randomPokemon.data
  }

  pokemon1 = await getPokemon();
  pokemon2 = await getPokemon();

})