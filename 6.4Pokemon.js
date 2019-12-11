document.addEventListener("DOMContentLoaded",async()=>{
    let getPokemon = document.querySelector("#getPokemon")
    getPokemon.addEventListener("click",()=>{
        get2Pokemon()
    })
    const displayOne = async()=>{
        try{
            let random = Math.floor(Math.random()* 809) +1;
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`)
            let data = res.data
            let poke = document.createElement("h2")
            let div1 = document.querySelector("#pokemonB")
            let sprite = document.createElement("img")
            let display = document.querySelector("#pokemonB")
            let hp = document.createElement("li")
            let ul = document.createElement("ul")
            let health = document.querySelector("#pokemonB")
            poke.innerText = `Pokemon Name: ${data.name}`
            sprite.src = data.sprites.front_default;
            hp.innerText = `Pokemon HP: ${data.stats[5].base_stat}`;
            div1.appendChild(poke)
            display.appendChild(sprite)
            ul.appendChild(hp)
            health.appendChild(ul)
        }catch(err){
            console.log("error")
        }
    }

    const get2Pokemon =async()=>{
        displayOne()
        displayOne()
    }
    get2Pokemon()

    })
    




  










