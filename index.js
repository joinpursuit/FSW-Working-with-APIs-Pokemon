document.addEventListener("DOMContentLoaded", () => {
    let pokiBtn = document.querySelector("#pokemon");
    let battleBtn = document.querySelector("#battle");
    const getPokemon = async () => {
        try {
            let poke = Math.floor(Math.random() * 807) + 1;
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}/`);
            return res.data;
        } catch(err) {
            console.log(err)
        }
    }
    const getMoves = (pokemon, div) => {
        let foo = document.querySelector(`#${div.id} ul`);
        if (foo) {
            foo.parentNode.removeChild(foo);
        }
        let ul = document.createElement("ul");
        ul.id = "pokemonBattle";

        ul.innerText = `Moves:`
        div.appendChild(ul);
        for (let i = 0; i < 4; i++) {
            let randomMove = pokemon.moves[Math.floor(Math.random() * pokemon.moves.length - 1)].move.name;
            let li = document.createElement("li");
            li.innerText = randomMove;
            ul.appendChild(li);
        }
    }
    pokiBtn.addEventListener("click", async () => {
        let pokemon1 = await getPokemon();
        let pokemon2 = await getPokemon();

        let poke1Data = document.querySelector("#pokemon1");
        let poke2Data = document.querySelector("#pokemon2");
        poke1Data.innerHTML = "";
        poke2Data.innerHTML = "";
        let poki1Name = document.createElement("h3");
        let poki2Name = document.createElement("h3");
        poki1Name.id = "poki1Name";
        poki2Name.id = "poki2Name";
        
        
        poki1Name.innerText = pokemon1.name;
        poki2Name.innerText = pokemon2.name;

        poke1Data.appendChild(poki1Name);
        poke2Data.appendChild(poki2Name);
        
        
        let image1 = document.createElement("img");
        image1.src = pokemon1.sprites.front_default;
        poke1Data.appendChild(image1);
        
        let image2 = document.createElement("img");
        image2.src = pokemon2.sprites.front_default;
        poke2Data.appendChild(image2);
        
        let hp1 = document.createElement("p");
        hp1.innerText = `HP: ${pokemon1.stats[5].base_stat}`;
        poke1Data.appendChild(hp1);
        getMoves(pokemon1, poke1Data);
        
        let hp2 = document.createElement("p");
        hp2.innerText = `HP: ${pokemon2.stats[5].base_stat}`;
        poke2Data.appendChild(hp2);
        getMoves(pokemon2, poke2Data);
    })
    battleBtn.addEventListener("click", () => {
        let poke1 = document.querySelector("#poki1Name").innerText;
        let poke2 = document.querySelector("#poki2Name").innerText;
        let winnerArr = [poke1, poke2];
        let winnerIndex = Math.floor(Math.random() * winnerArr.length);
        let battleHistory = document.querySelector("#battleHistory");
        let battle = document.createElement("p");
    
        if (winnerIndex === 0) {
            battle.innerText = poke1 + " defeated " + poke2;
            battleHistory.appendChild(battle);
        } else {
            battle.innerText = poke2 + " defeated " + poke1;
            battleHistory.appendChild(battle);
        }
    })
})