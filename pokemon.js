let url = "https://pokeapi.co/api/v2/pokemon/?limit=482&offset=482/"
document.addEventListener("DOMContendLoaded", () => {
    let button = document.querySelector('#get-pokemon')
    button.addEventListener('click', getPokemon)
    let button2 = document.querySelector('#battle')
    button2.addEventListener('click', battlePokemon)

})

const getPokemon = () => {
    axios.get(url).then((response) => {
        console.log(response.result)
    })
}