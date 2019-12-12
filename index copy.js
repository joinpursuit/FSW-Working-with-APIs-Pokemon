const fetchData = async (url) =>{
    try {
        let fetch = await axios.get(url)
        return fetch.data
    } catch (err){
        console.log(err)
    }
}

const getPokemonTwo = async (side) =>{
    let pokemonUl = document.createElement("ul")
    pokemonUl.id = side
    let id = Math.floor((Math.random() * 151) + 1);
    let idUrl= `https://pokeapi.co/api/v2/pokemon/${id}/`
    let pokemonData = await fetchData(idUrl)
    let pokemonName = pokemonData["name"]
    let name = document.createElement("li")
    name.innerText = pokemonName
    pokemonUl.appendChild(name)
    let img = document.createElement("img")
    let pokemonImg = pokemonData["sprites"]["front_shiny"]
    img.src = pokemonImg
    let imgLi = document.createElement("li")
    imgLi.appendChild(img)
    pokemonUl.appendChild(imgLi)
    let pokemonHp = pokemonData["stats"][5]["base_stat"]
    let hp = document.createElement("li")
    hp.innerText = `HP: ${pokemonHp}`
    pokemonUl.appendChild(hp)
    let movelist = pokemonData["moves"]
    moves = movelist.sort(function(a, b){return 0.5 - Math.random()}).slice(0,4)
    moves.forEach( async (move)=>{
        let moveName = move["move"]["name"]
        let moveUrl = move["move"]["url"]
        let moveData = await fetchData(moveUrl)
        let movePP = moveData["pp"]
        let moveLi = document.createElement("li")
        moveLi.innerText = `${moveName} PP: ${movePP}`
        pokemonUl.appendChild(moveLi)
        
    })
    let display = document.querySelector("#display")
    display.appendChild(pokemonUl)

}

let getPoke = document.querySelector("#getPoke")

getPoke.addEventListener("click",()=>{
    let display = document.querySelector("#display")
    display.innerHTML = ""
    getPokemonTwo("left")
    getPokemonTwo("right")
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
    getPokemonTwo("left")
    getPokemonTwo("right")
})
