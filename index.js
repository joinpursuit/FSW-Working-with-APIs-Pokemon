document.addEventListener("DOMContentLoaded", async() => {
  let pokemon1;
  let pokemon2;
  const getPokemon = async () => {
    let randomPokemon;
    let num = Math.floor(Math.random() * 809) + 1
    console.log(num)
    try {
      randomPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
      // debugger
      // console.log('here', randomPokemon)
    } catch (err) {
      console.log('there', err)
    }
    return randomPokemon.data
  }

  pokemon1 = await getPokemon();
  pokemon2 = await getPokemon();

  

})