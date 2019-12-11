document.addEventListener("DOMContentLoaded", ()=> {
    let get = document.querySelector("#getBtn")
    let data = document.querySelector(".data")
    let pokemon1 = document.createElement("ul");
    let pokemon2 = document.createElement("ul");
    data.appendChild(pokemon1);
    data.appendChild(pokemon2);

    let pokeArr = []

    const getPokemon = async (pokemon) => {
        pokemon.innerHTML = "";
        let num = Math.floor(Math.random() * 807);
        try{
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            let pokeData = res.data;
            let name = pokeData.name;
            pokeArr.push(name)
            let sprite = pokeData.sprites.front_default;
            let hp = `HP: ${pokeData.stats[5]["base_stat"]}`;

            let pokeName = document.createElement("h2");
            let pokeSprite = document.createElement("img");
            let pokeHP = document.createElement("h3");
            let movesHeader = document.createElement("h3");
            
            pokeName.innerText = name;
            pokeName.id = name;
            pokeSprite.src = sprite;
            pokeHP.innerText =  hp;
            movesHeader.innerText = "Moves:";

            pokemon.appendChild(pokeName);
            pokemon.appendChild(pokeSprite);
            pokemon.appendChild(pokeHP);
            pokemon.appendChild(movesHeader);

            let shuffledMoves = shuffleArr(pokeData.moves).slice(1,5);
            shuffledMoves.forEach(async(move) => {
                let moveData = await axios.get(move.move.url);
                let li = document.createElement("li");
                li.innerText = `${move.move.name},   PP:${moveData.data.pp}`;
                pokemon.appendChild(li);
            })
        } catch (err){
            console.log(err)
            debugger
        }
    }

    get.addEventListener("click", () => {
        getPokemon(pokemon1);
        getPokemon(pokemon2);
    })

    const battle = () => {
        let battleHistory = document.querySelector(".battleHistory");
        let shuffledPokemon = shuffleArr(pokeArr)

        let pokeName1 = shuffledPokemon[0];
        let pokeName2 = shuffledPokemon[1];

        let h4 = document.createElement("h4");
        h4.innerText += `${pokeName1} has defeated ${pokeName2}`;

        document.querySelector("#theme").play();
        let memeDiv = document.querySelector(".meme");
        memeDiv.innerHTML = "";
        let meme = document.createElement("img");
        meme.src = "./extraStuff/pokeMeme.gif"
        memeDiv.appendChild(meme);
        
        battleHistory.appendChild(h4);
        pokeArr = [];
    
    }

    let fight = document.querySelector("#battlePokemon");
    fight.addEventListener("click", () => {
        battle(pokemon1, pokemon2);      
    })
})

const shuffleArr = arr => {
    let shuffled = arr.sort( function() { return 0.5 - Math.random() });
    return shuffled;
}




