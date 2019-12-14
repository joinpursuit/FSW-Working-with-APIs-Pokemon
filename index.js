document.addEventListener("DOMContentLoaded", () => {
    let getPokeButton = document.querySelector("#getPokeButton");
    const choosePokemon1 = async () => {
        const div = document.createElement('div');
        let dataBox = document.querySelector("#dataBox");

        try {
            let randomNum = Math.floor(Math.random() * 807);
            let pokemon1 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
            let info = pokemon1.data;
            let poke = info.name;
            let picture = info.sprites.front_default;
            let hp = `HP: ${info.stats[5].base_stat}`;
            let h2 = document.createElement("h2");

            h2.innerText = poke
            div.appendChild(h2);
            let p2 = document.createElement("img");
            p2.src = picture;
            div.appendChild(p2);
            let p3 = document.createElement("p");
            p3.innerText = hp;
            div.appendChild(p3);

            for (let i = 0; i < 4; i++) {
                let moveName = info.moves[i].move.name
                let moveUrl = info.moves[i].move.url
                let pp = await axios.get(moveUrl)
                let p5 = document.createElement("p")
                p5.innerText = `Move: ${pp.data.name}; PP: ${pp.data.pp}`
                div.appendChild(p5)
            }

            dataBox.append(div);

        } catch (err) {
            console.log(err);
        }
    }

    getPokeButton.addEventListener("click", () => {
        document.getElementById('dataBox').innerHTML = '';
        choosePokemon1()
        choosePokemon1()
    })
    battleButton.addEventListener("click", () => {
        
        const pokemons = document.querySelectorAll('h2')
        console.log(pokemons)
        // let random = Math.floor(Math.random() * pokemons.length);
        // console.log(random)

// Jenesh helped with this code but i want to go back and implement 
// math.random so that the first pokemon is not always winning 

        const notification = document.createElement('p');
        const winner = pokemons[0].innerText;
        const loser = pokemons[1].innerText;
        console.log(winner, loser)
        notification.innerText = winner + ' has defeated ' + loser;
        const battleHistory = document.querySelector('.battleHistory');
        battleHistory.append(notification)
    })
})