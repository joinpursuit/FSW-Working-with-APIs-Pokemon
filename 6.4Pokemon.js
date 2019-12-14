document.addEventListener("DOMContentLoaded",async()=>{
    let getPokemon = document.querySelector("#getPokemon")
    getPokemon.addEventListener("click",()=>{
        button()
        // get2Pokemon() 
        // getMove()
    
    })
    const button =async()=>{
        let getButton = document.querySelector("#getPokemon")
        getButton.addEventListener("click", get2Pokemon)
        let battleButton = document.querySelector("#battle")
        battleButton.addEventListener("click", battlePoke)
    }
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
    const getMove = async() =>{
        let url = `https://pokeapi.co/api/v2/pokemon/${moves.name}  ${move.pp}`
        fetch(url)
        .then(res =>res.json())
        .then(pokemon =>{
            displayMove(move, pokemon)
            
        })
    }
    const displayMove = (move, pokemon) => {
        let pokeCard = document.querySelector(`#${pokemon.name}`)
        let movesList = pokeCard.querySelector('#moves');
        let moveLi = document.createElement('li')
        moveLi.innerText = move.name + 'PP:' + move.pp
        movesList.appendChild(moveLi)

    }

    const get2Pokemon =async()=>{
        displayOne()
        displayOne()
    }
    const battle = ()=>{
        let battle = document.querySelector("#battle")
        let winner = pokemonWinner()
        let loser =winner ===2?1:2
        let winning = battle.childNodes[winner]
        let losing = batle.childNodes[loser]
        console.log(losing.innerHTML)
        console.log(battle.childNodes)
        console.log("the winner is:", winner)
        let footer = document.querySelector("#moves")
        let result = document.createElement("p")
        result.innerText = `${winning} defeats: ${losing}`
        footer.appendChild(result)

    }
    const pokemonWinner = ()=>{
        let startRandom = randomNumber(0,3)
        return startRandom
    }
    const randomNumber =(min,max)=>{
        return Math.floor(Math.random() * ((max - min)+ min))
    }


    get2Pokemon()
    getMove()
    battle()
    })
    




  










