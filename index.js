
let battle = [];

// debugger;
document.addEventListener("DOMContentLoaded",()=>{
    let button = document.querySelector("#getPokemon");
    button.addEventListener("click", ()=>{
        document.querySelector("#openingAudio").play()
        getPokemon("pokemonOne");
        getPokemon("pokemonTwo");
    })
    let buttonTwo = document.querySelector("#battlePokemon");
    buttonTwo.addEventListener("click", ()=>{
        battleHistory(battle);
    })
    
})


//function that declares a random winner
const battleHistory = () => {
    let randomWinner = Math.floor(Math.random()*battle.length);
    let winner = battle[randomWinner];
    // debugger;
    let div = document.querySelector("#rdmWinner");

    //comment if you don't want a history of all the battles won

    // div.innerHTML = ""
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    li.innerText = `${winner}, you win`
    ul.appendChild(li);
    div.appendChild(ul);
    // debugger
    // the only way I could empty out the array
    battle = []
    // debugger


    document.querySelector("#attackSound").play()
    
    
}

const getPokemon = async (pokemonDivId) =>{
    
    try{
        
        //randomly gets the first pokemon
        let pokeId = Math.floor(Math.random() * 807)
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`);
        
        
        //image of the pokemons
        let div = document.querySelector(`#${pokemonDivId}`);
        div.innerHTML = ""
        let pokeOneSprite = res.data.sprites.front_default;
        let img = document.createElement("img");
        img.src = pokeOneSprite;
        div.appendChild(img);
        
        //gets the pokemon names of the pokemons
        let pokeName = res.data.name;
        let h3 = document.createElement("h3");
        h3.innerText = pokeName;
        div.appendChild(h3)
        
        
        //gets the hp of the pokemons
        let hpOne = res.data.stats[5].base_stat;
        let ul = document.createElement("ul");
        ul.innerText= "Moves: "
        let li = document.createElement("li");
        li.innerText = `HP: ${hpOne}`
        ul.appendChild(li);
        div.appendChild(ul);
        
        //gets four pp for both pokemons
        let pokeMoves = res.data.moves.slice(0,4);
        pokeMoves.forEach(async el =>{
            let newData = await axios.get(el.move.url);
            let li = document.createElement("li");
            li.innerText = `${el.move.name}, PP:${newData.data.pp}`
            ul.appendChild(li);
            div.appendChild(ul);
        })
        
        battle.push(pokeName);
        debugger;
        
    }catch(error){
        console.log(error)
    }
}

