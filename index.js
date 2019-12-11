
let battle = [];
// debugger;
document.addEventListener("DOMContentLoaded",()=>{
    let button = document.querySelector("#getPokemon");
    button.addEventListener("click", ()=>{
        getPokemon();
        getPokemonTwo();
        
    })
    let buttonTwo = document.querySelector("#battlePokemon");
    buttonTwo.addEventListener("click", ()=>{
        battleHistory(battle);
    })
    
})

//function that declares a random winner
const battleHistory = (battle) => {
    event.preventDefault();
    let randomWinner = Math.floor(Math.random()*battle.length);
    let winner = battle[randomWinner];
    let div = document.querySelector("#rdmWinner");
    //comment if you want a history of all the battles won
    div.innerHTML = ""
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    li.innerText = `${winner}, you win`
    ul.appendChild(li);
    div.appendChild(ul);
    // debugger
    
 

}

const getPokemon = async () =>{
            
    try{

        //randomly gets the first pokemon
        let pokeId = Math.floor(Math.random() * 807)
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`);

        
        //image of the first pokemon
        let div = document.querySelector("#pokemonOne");
        div.innerHTML = ""
        let pokeOneSprite = res.data.sprites.front_default;
        let img = document.createElement("img");
        img.src = pokeOneSprite;
        div.appendChild(img);
        
        //gets the pokemon name of the first pokemon
        let pokeOneName = res.data.name;
        let h3 = document.createElement("h3");
        h3.innerText = pokeOneName;
        div.appendChild(h3)

                
        //gets the hp of the first pokemon
        let hpOne = res.data.stats[5].base_stat;
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        li.innerText = `HP: ${hpOne}`
        ul.appendChild(li);
        div.appendChild(ul);

        //gets four pp
        let pokeMoves = res.data.moves.slice(0,4);
        pokeMoves.forEach(async el =>{
            let newData = await axios.get(el.move.url);
            let li = document.createElement("li");
            li.innerText = `${el.move.name}, PP:${newData.data.pp}`
            ul.appendChild(li);
            div.appendChild(ul);
      })
      battle = []
      battle.push(pokeOneName)

    
    }catch(error){
        console.log(error)
    }
}

const getPokemonTwo = async () =>{

    try{
                //randomly gets the second pokemon
                let pokeIdTwo = Math.floor(Math.random()* 807)
                let resTwo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeIdTwo}/`);
                
                
                //image of the second pokemon
                let divTwo = document.querySelector("#pokemonTwo");
                divTwo.innerHTML = ""
                let pokeTwoSprite = resTwo.data.sprites.front_default;
                let imgTwo = document.createElement("img");
                imgTwo.src = pokeTwoSprite;
                divTwo.appendChild(imgTwo);
                
                //gets the pokemon's name of the second pokemon
                let pokeTwoName = resTwo.data.name;
                let h3 = document.createElement("h3");
                h3.innerText = pokeTwoName;
                divTwo.appendChild(h3)
                
        
                //gets the hp of the second pokemon
                let hpTwo = resTwo.data.stats[5].base_stat;
                let ul = document.createElement("ul");
                let li = document.createElement("li");
                li.innerText = `HP: ${hpTwo}`;
                ul.appendChild(li);
                divTwo.appendChild(ul);

                //get four moves;
                let pokeMovesTwo = resTwo.data.moves.slice(0,4);
                pokeMovesTwo.forEach(async el =>{
                    let newDataTwo = await axios.get(el.move.url);
                    let li = document.createElement("li");
                    li.innerText = `${el.move.name}, PP:${newDataTwo.data.pp}`
                    ul.appendChild(li);
                    divTwo.appendChild(ul);
              })
            battle = []
              battle.push(pokeTwoName)
        



    }catch(error){
        console.log(error)
    }

}

