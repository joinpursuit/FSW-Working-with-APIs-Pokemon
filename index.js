document.addEventListener("DOMContentLoaded", () => {
    let get = document.querySelector("#get")
    let pokemonCount;

    get.addEventListener("click", () => {
        const getPokemon = async () => {
            try {
                let res = await axios.get("https://pokeapi.co/api/v2/pokemon/");
                pokemonCount = res.data.count

                // POKEMON 1
                let pokeID = Math.floor((Math.random() * pokemonCount) + 1);
                let random = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeID}/`)
                let challengerinfo = document.querySelector("#challengerinfo");
                let info = document.createElement("h1")
                let sprite1 = document.createElement("img")
                info.innerText = random.data.name;
                let src = random.data.sprites.front_default
                sprite1.src = src
                let challbase = document.createElement("li")
                challbase.innerText = random.data.stats[0]["base_stat"]
                debugger
                challengerinfo.appendChild(info)
                challengerinfo.appendChild(sprite1)
                challengerinfo.appendChild(challbase)
                
                
                // POKEMON 2
                let pokeID2 = Math.floor((Math.random() * pokemonCount) + 1);
                let random2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeID2}/`)
                let championinfo = document.querySelector("#championinfo");
                let info2 = document.createElement("h1")
                let sprite2 = document.createElement("img")
                let src2 = random2.data.sprites.front_default
                sprite2.src = src2
                info2.innerText = random2.data.name;
                let champbase = document.createElement("li")
                champbase.innerText = random2.data.stats[0]["base_stat"]
                championinfo.appendChild(info2)
                championinfo.appendChild(sprite2)
                championinfo.appendChild(champbase)
                // let moves = await axios.get("https://pokeapi.co/api/v2/move")
            } 
            catch(err){
                console.log(err)
            }
        }
    getPokemon()
    })
})
// console.log("hello")