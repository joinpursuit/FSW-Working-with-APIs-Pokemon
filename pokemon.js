document.addEventListener('DOMContentLoaded', ()=>{
    let button1 = document.querySelector('#getPoke');
    button1.addEventListener('click', getPoke);
    let button2 = document.querySelector('#battlePoke');
    button2.addEventListener('click', battlePoke);
})
let picture1 = document.createElement('img');
picture1.setAttribute('id', 'poke1');
let picture2 = document.createElement('img');
picture2.setAttribute('id', 'poke2');

const firstPokemon = async () => {
    let first = Math.floor(Math.random() * (807 - 0));
    console.log(first)
    let pokemon1 = `https://pokeapi.co/api/v2/pokemon/${first}`;
    let div1 = document.querySelector('div')

}




const secondPokemon = async (names) => {

    let second = Math.floor(Math.random() * (807 - 0));
    console.log(second)
    let pokemon2 = `https://pokeapi.co/api/v2/pokemon/${second}`;
    let div2 = document.querySelector('div')
}

const battlePokemon = (names) => {
    fetch('https://pokeapi.co/docs/v2.html/#moves')
        .then(response => {
            return response.json();
        })
    then(names => {
        displayPokemon(names)
    })
        .catch(err => {
            console.log('not found, please try again', err)
        })
    document.body.appendChild(fetchPokemon)
    fetchPokemon.src = names
}