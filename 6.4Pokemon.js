document.addEventListener("DOMContentLoaded",async()=>{
    let getPokemon = document.querySelector("#getPokemon")
    getPokemon.addEventListener("click",()=>{
        get2Pokemon() 
        getMove()
    })
    const displayOne = async()=>{
        try{
            let random = Math.floor(Math.random()* 809) +1;
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`)
            let data = res.data
            debugger
            let poke = document.createElement("h2")
            let div1 = document.querySelector("#pokemonB")
            let sprite = document.createElement("img")
            let display = document.querySelector("#pokemonB")
            let hp = document.createElement("li")
            let ul = document.createElement("ul")
            let health = document.querySelector("#pokemonB")
            let move = document.createElement("p")
            let ulMove = document.querySelector("#pokemonB")
            poke.innerText = `Pokemon Name: ${data.name}`
            sprite.src = data.sprites.front_default;
            hp.innerText = `Pokemon HP: ${data.stats[5].base_stat}`;
            move.innerText =` Moves: ${data.moves[0].moves}`;

            div1.appendChild(poke)
            display.appendChild(sprite)
            ul.appendChild(hp)
            ulMove.appendChild(move)
            health.appendChild(ul)
            move.appendChild(moveLi)
        }catch(err){
            console.log("error")
        }
    }
    const getMove = () =>{
        let url = `https://pokeapi.co/api/v2/pokemon/`
        fetch(url)
        .then(res =>res.json())
        .then(pokemon =>{
            displayMove(move, pokemon)
            
        })
    }
    const displayMove = (move, pokemon) => {
        const pokeCard = document.querySelector(`#${pokemon.name}`)
        const movesList = pokeCard.querySelector('.moves-list');
    
        const moveLi = document.createElement('li')
        moveLi.innerText = move.name + 'PP:' + move.pp
    
        movesList.appendChild(moveLi)

    }

    const get2Pokemon =async()=>{
        displayOne()
        displayOne()
    }
    get2Pokemon()
    getMove()
    })
    




  










