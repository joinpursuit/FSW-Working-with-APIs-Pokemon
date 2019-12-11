document.addEventListener("DOMContentLoaded", () => {

})

 const getPokemon = async () => {
    try {
        // Fetching a random Pokemon
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 964) + 1}`);
        // Initializing a pokemonOne for all information about the generated Pokemon
        let pokemonOne = res.data;

        // Repeat above for pokemonTwo
        let resTwo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 964) + 1}`);
        let pokemonTwo = resTwo.data;

        // Create the Elements for pokemonOne
        
    } catch (err) {
        console.log(err);
    }
 }
