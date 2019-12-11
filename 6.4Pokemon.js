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
            // data.forEach(data =>{
                let poke = document.createElement("h2")
                poke.innerText = data.name
                let div1 = document.querySelector("#pokemonA")
                div1.appendChild(poke)
            let sprite = document.createElement("img")
            sprite.src = data.sprites.front_default;
            let display = document.querySelector("#pokemonA")
            display.appendChild(sprite)
            // })
            let hp = document.createElement("li")
            hp.innerText = data.stats[5].base_stat
            let ul = document.createElement("ul")
            ul.appendChild(hp)
            let health = document.querySelector("#battleHistory")
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




  










