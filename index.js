document.addEventListener("DOMContentLoaded", () => {
    let get = document.querySelector("#get")
    get.addEventListener("click", () => {
        const getPokemon = async () => {
            try {
                let res = await axios.get("https://pokeapi.co/api/v2/pokemon/");
                let pokemon = res.data.results
                debugger
                let poke = pokemon[Math.floor(Math.random()*pokemon.length)]
                let poke2 = pokemon[Math.floor(Math.random()*pokemon.length)]
                let data = document.querySelector("#data");
                let info = document.createElement("P")
                let info2 = document.createElement("P")
                info.innerText = poke.name;
                info2.innerText = poke2.name;
                data.appendChild(info)
                data.appendChild(info2)


            } 
            catch(err){
                console.log(err)
            }
        }
    getPokemon()
    })
})
// console.log("hello")