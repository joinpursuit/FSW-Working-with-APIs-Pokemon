document.addEventListener("DOMContentLoaded", () => {

})
const createElements = async (pokemon) => {
    let ul = document.createElement("ul")
    let left = document.querySelector("#left")
    let data = document.querySelector(".data");

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
    let img = document.createElement("img");
    img.src = pokemon.sprites.front_default;
    image.appendChild(img);
    ul.appendChild(image);

    let hp = document.createElement("li")
    hp.innerText = `HP: ${pokemon.stats[5].base_stat}`;
    ul.appendChild(hp);

    let moves = document.createElement("li")
    moves.innerText = `Moves: `;
    ul.appendChild(moves);

    let move1 = document.createElement("li")
    let firstMove = await axios.get(pokemon.moves[0].move.url)
    firstMove = firstMove.data;
    move1.innerText = `${firstMove.name} PP:${firstMove.pp}`;
    ul.appendChild(move1);

    let move2 = document.createElement("li")
    let secondMove = await axios.get(pokemon.moves[1].move.url);
    secondMove = secondMove.data;
    move2.innerText = `${secondMove.name} PP:${secondMove.pp}`;
    ul.appendChild(move2);

    let move3 = document.createElement("li")
    let thirdMove = await axios.get(pokemon.moves[2].move.url);
    thirdMove = thirdMove.data;
    move3.innerText = `${thirdMove.name} PP:${thirdMove.pp}`
    ul.appendChild(move3);

    let move4 = document.createElement("li")
    let fourthMove = await axios.get(pokemon.moves[3].move.url);
    fourthMove = fourthMove.data;
    move4.innerText = `${fourthMove.name} PP:${fourthMove.pp}`;
    ul.appendChild(move4);

    data.appendChild(ul)

}

const battlePokemon = () => {
    let battleHistory = document.querySelector(".battleHistory")
    let leftMon = document.querySelector("#left")
    let rightMon = document.querySelector("#right")
    let p = document.createElement("p")
    if(Math.floor(Math.random())){
       p.innerText = `${leftMon.firstChild.innerText} defeated ${rightMon.firstChild.innerText}`
    } else {
        p.innerText = `${rightMon.firstChild.innerText} deafeated ${leftMon.firstChild.innerText}`
    }
    battleHistory.appendChild(p)
}
 
const removeElements = () => {
    let leftMon = document.querySelector("#left")
    let rightMon = document.querySelector("#right")
    if(leftMon){
        leftMon.parentNode.removeChild(leftMon)
    }
    if(rightMon){
        rightMon.parentNode.removeChild(rightMon)
    }
}

const getPokemon = async () => {
    try {
        removeElements()
        // Fetching a random Pokemon
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 807) + 1}`);
        // Initializing a pokemonOne for all information about the generated Pokemon
        let pokemonOne = res.data;

        // Repeat above for pokemonTwo
        let resTwo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 807) + 1}`);
        let pokemonTwo = resTwo.data;

        // Create the Elements for pokemonOne
        let nameOne = document.createElement("h4")
        nameOne.innerText = pokemonOne.name

        //Create the Elements for pokemonTwo
        let nameTwo = document.createElement("h4")
        nameTwo.innerText = pokemonTwo.name
        
        await createElements(pokemonOne)
        await createElements(pokemonTwo)

    }catch(err) {
        console.log(err);
    }
 }
