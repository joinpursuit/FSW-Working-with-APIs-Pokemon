document.addEventListener("DOMContentLoaded", () =>{
    let getPokemon = document.querySelector("#getPokemon")
    let battle = document.querySelector("#battle")
    let battlelist = document.querySelector("#battlelist")
    let rightImage = document.querySelector("#rightImage")
    let leftImage = document.querySelector("#leftImage")
    let pokemon = []
    let res
    const randomPokemon1 = async () =>{
        let leftPokemonStats = document.querySelector("#leftPokemonStats")
        while(leftPokemonStats.firstChild){
            leftPokemonStats.removeChild(leftPokemonStats.firstChild)
        }
        while(leftImage.firstChild){
            leftImage.removeChild(leftImage.firstChild)
        }
        try{
            let random = Math.floor(Math.random() * Math.floor(809));
            res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${random}/`);
            let pokemonName = res.data.name;
            let imgUrl= res.data.sprites.back_default;
            let hp = res.data.stats[5].base_stat
            let moves = res.data.moves
            let p = document.createElement("p");
            let p2 = document.createElement("p");
            p.innerText = pokemonName.toUpperCase();
            p2.innerText = "HP: " + hp
            let image = document.createElement("img");
            image.id = `image1`
            image.src = imgUrl
            image.style = "height: 200px"
            leftPokemonStats.appendChild(p);
            leftImage.appendChild(image);
            leftPokemonStats.appendChild(p2);
            for(let i = 0; i < 4; i++){
                let li = document.createElement("li")
                let movesURL = await axios.get(moves[i].move.url)
                li.innerText = moves[i].move.name.toUpperCase() + " PP: " + movesURL.data.pp
                leftPokemonStats.appendChild(li)
            }
            pokemon.push(pokemonName)
        }
        catch(err) {
            console.log(err);
        }
    }

    const randomPokemon2 = async () =>{
        let rightPokemonStats = document.querySelector("#rightPokemonStats")
        while(rightPokemonStats.firstChild){
            rightPokemonStats.removeChild(rightPokemonStats.firstChild)
        }
        while(rightImage.firstChild){
            rightImage.removeChild(rightImage.firstChild)
        }
        try{
            let random = Math.floor(Math.random() * Math.floor(809));
            res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${random}/`);
            let pokemonName = res.data.name;
            let imgUrl= res.data.sprites.front_default;
            let hp = res.data.stats[5].base_stat;
            let moves = res.data.moves;
            let p = document.createElement("p");
            let p2 = document.createElement("p");
            p.innerText = pokemonName.toUpperCase();
            p2.innerText = "HP: " + hp
            let image = document.createElement("img");
            image.id = `image2`
            image.src = imgUrl;
            image.style = "height: 200px"
            rightPokemonStats.appendChild(p);
            rightImage.appendChild(image);
            rightPokemonStats.appendChild(p2);
            for(let i = 0; i < 4; i++){
                let li = document.createElement("li")
                let movesURL = await axios.get(moves[i].move.url)
                li.innerText = moves[i].move.name.toUpperCase() + " PP: " + movesURL.data.pp
                rightPokemonStats.appendChild(li)
            }
            pokemon.push(pokemonName)
        }
        catch(err) {
            console.log(err);
        }
    }

    getPokemon.addEventListener("click", () =>{
        randomPokemon1();
        randomPokemon2();
    })

    const chooseWinner = (arr) =>{
        let random = Math.floor(Math.random() * Math.floor(1));
        let li = document.createElement("li")
        li.innerText = pokemon[random].toUpperCase() + " WINS"
        battlelist.appendChild(li)
        pokemon = []
    }

    battle.addEventListener("click", () =>{
        chooseWinner();
    })
})