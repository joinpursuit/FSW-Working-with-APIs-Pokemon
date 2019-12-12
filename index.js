document.addEventListener("DOMContentLoaded", () => {
    let getPokemon = document.querySelector("#pokemon");
    let battle = document.querySelector("#battle");
    let firstPoke = document.createElement("ul")
    let secondPoke = document.createElement("ul")
    let data = document.querySelector(".data")

    
    const getCharacter = async () => {
        pokemon.innerText = " "
        let pokeID = Math.floor(Math.random() * 800);
        try {
            let res = await axios.get("https://pokeapi.co/api/v2/pokemon/" + pokeID);
            let dataPoke = res.data;
            let name = dataPoke.name
            let sprite = dataPoke.sprites.front_default;
            let hp = `HP: ${dataPoke["stats"][5]["base_stat"]}`;

            let namePokemon = document.createElement("h2")
            let pokesprite= document.createElement("img")
            let pokehp = document.createElement("h3")
            let Header = document.createElement("h3")
            
            namePokemon.innerText = name
            pokesprite.src = sprite;
            pokehp.innerText = hp
            Header.innerText = "moves: "

            data.appendChild(namePokemon);
            data.appendChild(pokesprite);
            data.appendChild(pokehp)
            data.appendChild(Header)

            let moves = dataPoke.moves.slice(1,5);
            moves.forEach(async(move) => {
                let moveData = await axios.get(move.move.url);
                let li = document.createElement("li");
                li.innerText = `${move.move.name}, PP:${moveData.data.PP}`
                pokemon.appendChild(li)
            })
            

        } catch (err) {
            console.log(err)
        }
    }

    const battlePokemon = (firstPoke, secondPoke) => {

    }


    getPokemon.addEventListener("click",() => {
        getCharacter();
    })   
})