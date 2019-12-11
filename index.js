document.addEventListener("DOMContentLoaded", () => {
    let get = document.querySelector("#get")
    get.addEventListener("click", () => {
        const getPokemon = async () => {
            try {
                let res = await axios.get("https://pokeapi.co/api/v2/pokemon/");
                let pokemonCount = res.data.count

                let pokeID = Math.floor((Math.random() * pokemonCount) + 1);
                let pokeID2 = Math.floor((Math.random() * pokemonCount) + 1);

                let random = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeID}/`)
                let random2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeID2}/`)

                let data = document.querySelector("#data");

                let info = document.createElement("P")
                let info2 = document.createElement("P")

                info.innerText = random.data.name;
                info2.innerText = random2.data.name;

                data.appendChild(info)
                data.appendChild(info2)

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