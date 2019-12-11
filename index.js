document.addEventListener("DOMContentLoaded", () => {

})
const createElements = (pokemon) => {
    let ul = document.createElement("ul")
    let left = document.querySelector("#left")
    if(left){
        ul.id = "right"
    } else {
        ul.id = "left"
    }

    let name = document.createElement("li")
    let h4 = document.createElement("h4")
    h4.innerText = pokemon.name
    name.appendChild(h4)
    ul.appendChild(name)

    let image = document.createElement("li")

    let hp = document.createElement("li")

    let moves = document.createElement("li")

    let move1 = document.createElement("li")

    let move2 = document.createElement("li")

    let move3 = document.createElement("li")

    let move4 = document.createElement("li")
    
    document.body.appendChild(ul)

}


 
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
        let nameOne = document.createElement("h4")
        nameOne.innerText = pokemonOne.name

        //Create the Elements for pokemonTwo
        let nameTwo = document.createElement("h4")
        nameTwo.innerText = pokemonTwo.name
        
        createElements(pokemonOne)
        createElements(pokemonTwo)

    }catch(err) {
        console.log(err);
    }
 }
