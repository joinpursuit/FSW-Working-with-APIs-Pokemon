document.addEventListener("DOMContentLoaded",()=>{
    let getPokemon = document.querySelector("#getPokemon")
    getPokemon.addEventListener("click",displayOne)
    // let battle = document.querySelector("#battle")
    // battle.addEventListener("click", battlePokemon)
})  

const displayOne = async()=>{
    let sprite = document.createElement("img")
    let randomA = Math.floor(Math.random()* 964) +1
    let one = `https://pokeapi.co/api/v2/pokemon/${randomA}`


    await axios.get(one).then((response)=>{
        try{
            let pokemonA = response.data
            let stats = document.querySelector("pokemonA")
            let name = document.createElement("h2")
            let hp = document.createElement("h3")
          
            pokemonA.id = pokemonA.name
            name.innerText = ""
            // pokemonA.name
            sprite.src = pokemonA.sprites.front_default
            hp.innerText = pokemonA.stats[5].base_stat
            pokemonA.appendChild(name)
            pokemonA.appendChild(sprite)
            pokemonA.appendChild(hp)
            pokemonA.appendChild(stats)
        }catch(err){
            console.log("error press again")
        }
        displayOne()
    })
    
}
const displayTwo = async()=>{
    let sprite = document.createElement("img")
    let randomB = Math.floor(Math.random()*964)
    let one = `https://pokeapi.co/api/v2/pokemon/${randomB}`
    await axios.get(one).then((response)=>{
        try{
            let pokemonB = response.data
            let stats = document.querySelector("PokemonB")
            let name = document.createElement("h2")
            let hp = document.createElement("h3")
            pokemonB.id = pokemonB.name
            name.innerText = ""
            sprite.src = pokemonB.sprites.front_default
            hp.innerText = pokemonB.stats[5].base_stat
            pokemonB.appendChild(name)
            pokemonB.appendChild(sprite)
            pokemonB.appendChild(hp)
            pokemonB.appendChild(stats)
        }catch(err){
            console.log("error press again")
        }
    })
}









// let url = `https://pokeapi.co/api/v2/pokemon/${one}`
// let anotherUrl =  `https://pokeapi.co/api/v2/pokemon/${another}`
// let first = document.getElementById("pokemonA")
// let second = document.getElementById("pokemonB")
// first.innerHTML = ""
// second.innerHTML=""