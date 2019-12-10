document.addEventListener("DOMContentLoaded", () => {
    let get = document.querySelector("#get")
    get.addEventListener("click", () => {
        const getPokemon = async () => {
            try {
                let res = await axios.get("https://pokeapi.co/api/v2/pokemon/");
                let pokemon = res.data.results
                pokemon.forEach(poke => {
                    let data = document.querySelector("#data");
                    let info = document.createElement("P")
                    info.innerText = poke.name;
                    data.appendChild(info)

                })

            } 
            catch(err){
                console.log(err)
            }
        }
        getPokemon()
    })
})
// console.log("hello")