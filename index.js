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
        for (let i = 0; i < 4; i++) {
            console.log(pokemon.moves[Math.floor(Math.random() * pokemon.moves.length)].move);
            debugger
        }


    }
    pokiBtn.addEventListener("click", async () => {
        let pokemon1 = await getPokemon();
        let pokemon2 = await getPokemon();
        let div1 = document.createElement("div1");
        let div2 = document.createElement("div2");
        document.body.appendChild(div1);
        document.body.appendChild(div2);
        console.log(pokemon1.name);
        console.log(pokemon1.sprites);
        console.log(pokemon1.stats[Math.floor(Math.random()* (pokemon1.stats).length - 1)])
        console.log(getMoves(pokemon1, div1));
        console.log(pokemon2.name);
        console.log(pokemon2.sprites);
        console.log(pokemon2.stats[Math.floor(Math.random()* (pokemon2.stats).length - 1)])
        console.log(getMoves(pokemon2, div2));
    })
})