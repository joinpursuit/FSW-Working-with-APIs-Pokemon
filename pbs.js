document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("poke-gen");
    button.addEventListener("click", getPokemon)
})
const getRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 964 - 1);
    return randomNumber
}

const getPokemon = () => {
    console.log(getRandomNumber())
    let url = "https://pokeapi.co/api/v2/pokemon/?limit=964"
    axios
        .get(url)
        .then((response) => {
            let pokemon1 = response.data.results[getRandomNumber()]
            console.log(pokemon1.name)
            console.log(pokemon1.url)

        })
        .catch(err => {
            console.log("Oops, there was an error please try again")
        })
    // console.log(pokemonName)
    

pokemonName = (pokeName) => {
    let battleContainer = document.querySelector(".data")
    let name = document.createElement('p')
    name.innerText = pokeName
    document.battleContainer.appendChild(pokeName);
}

pokemonMove = (answer) => {
    let jokeAnswer = document.getElementById('answer');
    jokeAnswer.innerText = answer;
    document.body.appendChild(jokeAnswer)

}


}

//     renderPokemon()

//     let battleContainer = document.querySelector(".data");
//     let nameContainer = document.createElement('p')
//     nameContainer.innerText = pokemonName

//     battleContainer.appendChild(nameContainer)
// }
