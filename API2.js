document.addEventListener("DOMContentLoaded", () => {
    setupButtonListeners();
    })

    const setupButtonListeners = () => {
        const getPokemonbutton = document.querySelector("#getPokemonbutton")
        getPokemonbutton.addEventListener('click', fetchTwoRandomPokemon)
    
        const startBattle = document.querySelector("#battleButton")
        startBattle.addEventListener("click", startBattle)
    }

    const fetchTwoRandomPokemon = () => {
        fetchSinglePokemon();
        fetchSinglePokemon();
    }


const fetchSinglePokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/9/`
    let axios_url = axios(url);

    axios_url.then(response => {
        console.log(response.data.name);
        
    })
    
}
