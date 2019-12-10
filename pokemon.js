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

            let pokeName = document.createElement("h2");
            let pokeSprite = document.createElement("img");
            let pokeHP = document.createElement("h3");
            let movesHeader = document.createElement("h3");
            

            pokeName.innerText = name;
            pokeSprite.src = sprite;
            pokeHP.innerText =  hp;
            movesHeader.innerText = "Moves:";

            pokemon.appendChild(pokeName);
            pokemon.appendChild(pokeSprite);
            pokemon.appendChild(pokeHP);
            pokemon.appendChild(movesHeader);
            let shuffledMoves = shuffleArr(pokeData.moves).slice(1,5);
            shuffledMoves.forEach((move) => {
                let li = document.createElement("li");
                li.innerText = move.move.name;
                pokemon.appendChild(li);
                let moveData = getMove(move);
                let p = document.createElement("p");
                p.innerText = moveData.pp;
                pokemon.appendChild(p);
            })
        } catch (err){
            console.log(err)
            debugger
        }
    }
    
    const getMove = async (move) => {
        try {
            let res = await axios.get(move.move.url);
            let moveData = res.data;
            return moveData;
        } catch (err)  {
            console.log(err);
        }
    }

    get.addEventListener("click", () => {
        getPokemon(pokemon1);
        getPokemon(pokemon2);
    })

    let fight = document.querySelector("#battlePokemon");
    fight.addEventListener("click", () => {
        let memeDiv = document.querySelector(".meme");
        memeDiv.innerHTML = "";
        let meme = document.createElement("img");
        meme.src = "./extraStuff/pokeMeme.gif"
        memeDiv.appendChild(meme);
    })
})

const shuffleArr = arr => {
    let shuffled = arr.sort( function() { return 0.5 - Math.random() });
    return shuffled;
}




