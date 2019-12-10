document.addEventListener("DOMContentLoaded", ()=> {
    let get = document.querySelector("#getBtn")
    
    let data = document.querySelector(".data")
    let pokemon1 = document.createElement("ul");
    let pokemon2 = document.createElement("ul");
    data.appendChild(pokemon1);
    data.appendChild(pokemon2);

    const getPokemon = async (pokemon) => {
        pokemon.innerHTML = "";
        let num = Math.floor(Math.random() * 807);
        try{
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}/`);
            let pokeData = res.data;
            let name = pokeData.name;
            let sprite = pokeData.sprites.front_default;
            let hp = `HP: ${pokeData.stats[5]["base_stat"]}`;
            debugger
            // let moves 
            

            let pokeName = document.createElement("h2");
            let pokeSprite = document.createElement("img");
            let pokeHP = document.createElement("h3");

            pokeName.innerText = name;
            pokeSprite.src = sprite;
            pokeHP.innerText =  hp;

            pokemon.appendChild(pokeName);
            pokemon.appendChild(pokeSprite);
            pokemon.appendChild(pokeHP);
        } catch (err){
            console.log(err)
            debugger
        }
    }

    get.addEventListener("click", () => {
        getPokemon(pokemon1);
        getPokemon(pokemon2);
    })
})