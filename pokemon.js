document.addEventListener("DOMContendLoaded", () => {
    let button = document.querySelector('#get-pokemon')
    button.addEventListener('click', getPokemon)
    let button2 = document.querySelector('#battle')
    button2.addEventListener('click', battlePokemon)
})

function getRandom() {
    return Math.floor(Math.random() * (809 - 1) + 1);
}
const getPokemon = () => {

    let randomId = getRandom()

    let url = `http://pokeapi.co/api/v2/pokemon/${randomId}`

    axios.get(url)
        .then(response => {
            let key = response.data.name
            console.log("response", response)
        })
        .catch(error => {
            console.log("there's an error", error)
        })
}


