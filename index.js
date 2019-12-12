document.addEventListener("DOMContentLoaded", () => {
    let get = document.querySelector("#get")
    let battle = document.querySelector("#battle")
    let pokemonCount;

    get.addEventListener("click", () => {
        
        const getPokemon = async () => {
            try {
                let res = await axios.get("https://pokeapi.co/api/v2/pokemon/");
                pokemonCount = res.data.count
                // debugger
                // POKEMON 1
                // let challenger = document.querySelector("#challenger")
                let pokeID = Math.floor((Math.random() * pokemonCount) + 1);
                let random = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeID}/`)
                let challengerinfo = document.querySelector("#challengerinfo");
                challengerinfo.innerHTML = ""
                let challengerName = document.createElement("h1")
                let challengerSprite = document.createElement("img")
                challengerName.innerText = random.data.name;
                let src = random.data.sprites.front_default
                challengerSprite.src = src
                let challbase = document.createElement("h3")
                challHP = random.data.stats[0].base_stat
                challbase.innerText = `HP: ${challHP}` 
                let challMovesList = random.data.moves.slice(1, 5)
                challengerinfo.appendChild(challengerName)
                challengerinfo.appendChild(challengerSprite)
                challengerinfo.appendChild(challbase)
                let moveHeader = document.createElement("p")
                moveHeader.innerText = "Moves: "
                challengerinfo.appendChild(moveHeader)
                challMovesList.forEach(async move => {
                    let moveID = await axios.get(move.move.url) 
                    let challMoves = document.createElement("li")
                    let moveName = move.move.name
                    let pp = moveID.data.pp
                    challMoves.innerText = `${moveName} PP: ${pp}` 
                    challengerinfo.appendChild(challMoves)
                })
                
                // POKEMON 2
                // let champion = document.querySelector("#champion")
                let pokeID2 = Math.floor((Math.random() * pokemonCount) + 1);
                let random2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeID2}/`)
                let championinfo = document.querySelector("#championinfo");
                championinfo.innerHTML = ""
                let champName = document.createElement("h1")
                let champSprite = document.createElement("img")
                let src2 = random2.data.sprites.front_default
                champSprite.src = src2
                champName.innerText = random2.data.name;
                let champbase = document.createElement("h3")
                let champHP = random2.data.stats[0].base_stat
                champbase.innerText = `HP: ${champHP}`
                let champMovesList = random2.data.moves.slice(1, 5)
                championinfo.appendChild(champName)
                championinfo.appendChild(champSprite)
                championinfo.appendChild(champbase)
                let moveHeader2 = document.createElement("p")
                moveHeader2.innerText = "Moves: "
                championinfo.appendChild(moveHeader2)
                champMovesList.forEach(async move => {
                    let moveID2 = await axios.get(move.move.url) 
                    let champMoves = document.createElement("li")
                    let moveName2 = move.move.name
                    let pp2 = moveID2.data.pp
                    champMoves.innerText = `${moveName2} PP: ${pp2}`
                    championinfo.appendChild(champMoves)
                })         

                // Battle!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                battle.addEventListener("click", () => {
                    let battleHistory = document.querySelector("#battleHistory")
                    battleHistory.innerHTML = ""
                let p = document.createElement("p")
                    if(champHP > challHP){
                        p.innerText = `Winner is ${champName.innerText}`
                    } else {
                        p.innerText = `Winner is ${challengerName.innerText}`
                    }
                    battleHistory.appendChild(p)
                })
            } 
            catch(err){
                console.log(err)
            }
        }
    getPokemon()
    })
})