document.addEventListener("DOMContentLoaded", () =>{
    let getPokemon = document.querySelector("#getPokemon")
    
    const randomPokemon = async () =>{
        try{
            let random = Math.floor(Math.random() * Math.floor(964))
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${random}/`);
            let pokemonName = res.data.name;
            // let imgUrl= res.data.sprites.front_default;
            let imgUrl= res.data.sprites.back_default;
            let hp = res.data.stats[5].base_stat
            let moves = res.data.moves
            let movelist= []
            let p = document.createElement("p");
            let p2 = document.createElement("p")
            p.innerText = pokemonName.toUpperCase()
            p2.innerText = "HP: " + hp
            let image = document.createElement("img")
            image.src = imgUrl
            document.body.appendChild(p)
            document.body.appendChild(p2)
            document.body.appendChild(p3)
            document.body.appendChild(image)
        }
        catch(err) {
            console.log(err);
        }
    }
    getPokemon.addEventListener("click", randomPokemon)
})