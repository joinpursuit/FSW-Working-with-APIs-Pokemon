document.addEventListener("DOMContentLoaded", () => {
    let get = document.querySelector("#get")
    let battle = document.querySelector("#battle")
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
                img.innerHTML =""
                info.innerText = random.data.name;
                let src = random.data.sprites.front_default
                sprite1.src = src
                let challbase = document.createElement("h3")
                challbase.innerText = "HP: " + random.data.stats[0].base_stat
                let challMovesList = random.data.moves.slice(1, 5)
                challengerinfo.appendChild(info)
                challengerinfo.appendChild(sprite1)
                challengerinfo.appendChild(challbase)

                let moveHeader = document.createElement("p")
                moveHeader.innerText = "Moves: "
                // debugger
                challengerinfo.appendChild(moveHeader)
                challMovesList.forEach(async move => {
                    let moveID = await axios.get(move.move.url) // 12.10.19 left off
                    let challMoves = document.createElement("li")
                    let moveName = move.move.name
                    let pp = moveID.data.pp
                    challMoves.innerText = `${moveName} PP: ${pp}`  // 12.10.19 left off
                    challengerinfo.appendChild(challMoves)
                })
                
                
                // POKEMON 2
                let pokeID2 = Math.floor((Math.random() * pokemonCount) + 1);
                let random2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeID2}/`)
                let championinfo = document.querySelector("#championinfo");
                let info2 = document.createElement("h1")
                let sprite2 = document.createElement("img")
                let src2 = random2.data.sprites.front_default
                sprite2.src = src2
                info2.innerText = random2.data.name;
                let champbase = document.createElement("h3")
                champbase.innerText = "HP: " + random2.data.stats[0].base_stat
                let champMovesList = random2.data.moves.slice(1, 5)
                championinfo.appendChild(info2)
                championinfo.appendChild(sprite2)
                championinfo.appendChild(champbase)
                let moveHeader2 = document.createElement("p")
                moveHeader2.innerText = "Moves: "
                championinfo.appendChild(moveHeader)
                champMovesList.forEach(async move => {
                    let moveID2 = await axios.get(move.move.url) 
                    let champMoves = document.createElement("li")
                    let moveName2 = move.move.name
                    let pp2 = moveID2.data.pp
                    champMoves.innerText = `${moveName2} PP: ${pp2}`
                    championinfo.appendChild(champMoves)

                })

            } 
            catch(err){
                console.log(err)
            }
        }

    getPokemon()
    })

    // battle.addEventListener("click", () => {
        
    //     const battleHistory = async () => {
    //         let pokemon1 = 
    //     }
    // })
    // battleHistory()

})
// console.log("hello")