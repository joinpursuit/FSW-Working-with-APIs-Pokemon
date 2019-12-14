document.addEventListener("DOMContentLoaded", () => {
    let pokiBtn = document.querySelector("#pokemon");
    let battleBtn = document.querySelector("#battle");
    const getPokemon = async () => {
        try {
            let num = Math.floor(Math.random() * 807) + 1;
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}/`);
            // debugger
            return res.data;
        } catch(err) {
            console.log(err)
        }
    }
    const getMoves = (pokemon, div) => {
        let foo = document.querySelector(`#${div.id} ul`);
        console.log(foo);
        if (foo) {
            foo.parentNode.removeChild(foo);
        }
        let ul = document.createElement("ul");
        ul.id = "pokemonBattle";
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
        let poki1Name = document.querySelector("#poki1Name");
        let poki2Name = document.querySelector("#poki2Name");

        // let poke1Data = document.querySelector("#pokemon1");
        // let div2 = document.querySelector("#pokemon2");
        // div1.id = "pokemon1";
        // div2.id = "pokemon2";
        // poke1Data.appendChild(div1);
        // poke2Data.appendChild(div2);
        
        poki1Name.innerText = pokemon1.name;
        poki2Name.innerText = pokemon2.name;
        let image1 = document.createElement("img");
        image1.src = pokemon1.sprites.front_default;
        poke1Data.appendChild(image1);
        let image2 = document.createElement("img");
        image2.src = pokemon2.sprites.front_default;
        poke2Data.appendChild(image2);
        console.log(pokemon1.stats[Math.floor(Math.random()* pokemon1.stats.length - 1)])
        console.log(getMoves(pokemon1, poke1Data));
        console.log(pokemon2.stats[Math.floor(Math.random()* pokemon2.stats.length - 1)])
        console.log(getMoves(pokemon2, poke2Data));
    })
})