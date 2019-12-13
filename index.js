// document.addEventListener("DOMContentLoaded", () => { 
//     // let button1 = document.querySelector("#button1");
//     const choosePokemon = async () => { 
//         try{
//             let randomNum = Math.floor(Math.random() * 807)
//             let pokemon1 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
//             // let pokemon2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
//             let info = pokemon1.data;
//             let poke = info.name;
//             let picture = info.sprites.front_default;
//             let hp = `HP: ${info.stats[5].base_stat}`;
//             let pokepoke1 = document.querySelector("#pokepoke1")
//             let p1 = document.createElement("p")
//             p1.innerText = poke

//             pokepoke1.appendChild(p1)
//             let p2 = document.createElement("img")
//             p2.src = picture
//             pokepoke1.appendChild(p2)
//             let p3 = document.createElement("p")
//             p3.innerText = hp 
//             pokepoke1.appendChild(p3)
//             let movePoke = document.querySelector("#pokepoke1")
//             for(let i = 0; i < 4; i++) {
//             let getMoves = info.moves[i].move.name
        // let p4 = document.createElement("p")
        // p4.innerText = getMoves
        // pokepoke1.appendChild(p4)


        // let url = info.data.moves[i].move.url
        //     let ppAndNameRes = await axios.get(url)
        //     let p4 = document.createElement("p")
        //     p4.innerText = ppAndNameRes.info.name + ", PP:" + ppAndNameRes.info.pp
        //     console.log(p4.innerText)
        //     pokepoke1.appendChild(p4)

        // let url = info.data.moves[i].move.url
        //     let ppAndNameRes = await axios.get(url)
        //     let p4 = document.createElement("p")
        //     p4.innerText = ppAndNameRes.info.name + ", PP:" + ppAndNameRes.info.pp
        //     mainPoke.appendChild(p4) 
        // }


//     } catch(err) {
//     console.log(err);
//     }
//    }

//    button1.addEventListener("click", () => {
//        choosePokemon()
//    })


   
// choosePokemon()
// })
// let button1 = document.querySelector("#button1") {}
// button1.addEventListener("click", () => {
    //  choosePokemon(pokemon1);
    //     choosePokemon(pokemon2)

//  })


document.addEventListener("DOMContentLoaded", () => {
    let getPokeButton = document.querySelector("#getPokeButton") 
        getPokeButton.addEventListener("click", loadPokemon)
})
const loadPokemon = () => {

    let pokemon1 = await loadPokemonFromAPI();
    let pokemon2 = await loadPokemonFromAPI();
}
    const loadPokemonFromAPI = () => {
        let randomNum = Math.floor(Math.random() * 807)
        let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
        return pokemon.data
    }
        const createPokemonCard = (pokemon) => {
           let newCardPokemon = document.createElement("li");
           let pokemonName = document.createElement("p");
           let pokemonImage = document.createElement("img");
           let pokemonHP = document.createElement("p");
           let pokemonPower = document.createElement("p");
           
        }