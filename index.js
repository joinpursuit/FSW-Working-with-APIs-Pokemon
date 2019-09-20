document.addEventListener("DOMContentLoaded", () =>{
    let button1 = document.querySelector("#random-pokemon");
    button1.addEventListener("click", getPokemon1)
})

const randomPokeId = () => {
    let randomId = Math.floor((Math.random() * 809) +1);
    return randomId
}

const randomPokeUrl = () => {
    let randomId = randomPokeId()
    let url = "https://pokeapi.co/api/v2/pokemon/" + randomId
    return url
}

const getPokemon1 = () => {
    let url = randomPokeUrl();
    axios.get(url)
       .then((response) => {
           let pokemonName = response.data.name.toUpperCase();
           let nameInsert = document.querySelector("#pokemon-name1");
           nameInsert.innerHTML = "NAME: " + pokemonName;
           let pokemonHp = response.data.stats.stat.hp
           let hpInsert = document.querySelector("#hp1")
           hpInsert.innerHTML = "HP: " + pokemonHp
           let pokemonSprite = response.data.sprites.front_default;
           let img = document.querySelector("#sprite1");
           img.src = pokemonSprite;
           img.alt = pokemonName;
           if 

       })
}