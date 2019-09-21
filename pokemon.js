const url = "https://pokeapi.co/api/v2/pokemon"
document.addEventListener("DOMContendLoaded", () => {
    let button = document.querySelector('#get-pokemon')
    button.addEventListener('click', getTwoPokemon)
    let button2 = document.querySelector('#battle')
    button2.addEventListener('click', battlePokemon)
})

const pokemon1 = async () => {
    let randNum1 = Math.floor(Math.random() * (809 - 1) + 1);

    let p1 = `${url}/${randNum1}`

    await axios.get(p1).then(res => {
        try {
            let first_Poke = res.data;
            console.log(first_Poke.name)
        }
     })
    .catch (err => {
    console.log('Error Alert!', err)
} 
