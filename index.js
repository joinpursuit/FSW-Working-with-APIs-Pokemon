document.addEventListener("DOMContentLoaded",()=>{
    const getPokemon = async (side) =>{
        let id = Math.floor((Math.random() * 151) + 1);
        let  idUrl= `https://pokeapi.co/api/v2/pokemon/${id}/`

        try {
            let pokemon = await axios.get(idUrl)
            let pokeData = pokemon.data
            let pokeName = document.createElement("li")
            pokeName.innerText = pokeData["name"].toUpperCase()
            pokeName.value = "name"
            let img = document.createElement("img")
            img.src = pokeData.sprites.front_shiny
            let imgLi = document.createElement("li")
            imgLi.appendChild(img)
            let ul = document.createElement("ul")
            ul.appendChild(pokeName)
            ul.appendChild(imgLi)
            let hp = pokeData["stats"][5]["base_stat"]
            let hpLi = document.createElement("li")
            hpLi.innerText = `hp = ${hp}`
            ul.appendChild(hpLi)
            let movelist = pokeData["moves"]
            moves = movelist.sort(function(a, b){return 0.5 - Math.random()}).slice(0,4)
            
            moves.forEach( async (el)=>{
                let moveName = el["move"]["name"]
                let moveUrl = el["move"]["url"]
                let move = await axios.get(moveUrl)
                let pp = move["data"]["pp"]
                p = document.createElement("p")
                p.innerText = pp
                let ppValue = pp
                let moveLi = document.createElement("li")
                moveLi.innerText = `${moveName} PP: ${ppValue}`
                ul.appendChild(moveLi)

            })
            
            let display = document.querySelector("#display")
            display.appendChild(ul)
            ul.id = side
            
        } catch (err){
            console.log(err)
        }
    }
    
    let getPoke = document.querySelector("#getPoke")
    
    getPoke.addEventListener("click",()=>{
        let display = document.querySelector("#display")
        display.innerHTML = ""
        getPokemon("left")
        getPokemon("right")
    })
    
    let battle = document.querySelector("#battle")
    
    battle.addEventListener("click", ()=>{
        let names = []
        let left= document.querySelector("#left")
        let right= document.querySelector("#right")
        let leftName = left.firstChild.innerText
        let rightName = right.firstChild.innerText
        names.push(leftName)
        names.push(rightName)
        let winnerList = names.sort(function(a, b){return 0.5 - Math.random()});
        let li = document.createElement("li")
        li.innerText = `${winnerList[0]} beat ${winnerList[1]}`
        let history = document.querySelector("#battleHistory")
        history.appendChild(li)
        let display = document.querySelector("#display")
        display.innerHTML = ""
        getPokemon("left")
        getPokemon("right")
    })
    
})