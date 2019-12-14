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
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        div1.id = "pokemon1";
        div2.id = "pokemon2";
        document.body.appendChild(div1);
        document.body.appendChild(div2);
        console.log(pokemon1.name);
        console.log(pokemon1.sprites.front_default);
        console.log(pokemon1.stats[Math.floor(Math.random()* pokemon1.stats.length - 1)])
        console.log(pokemon1)
        console.log(getMoves(pokemon1, div1));
        console.log(pokemon2.name);
        console.log(pokemon2.sprites.front_default);
        console.log(pokemon2.stats[Math.floor(Math.random()* pokemon2.stats.length - 1)])
        console.log(getMoves(pokemon2, div2));
    })
})