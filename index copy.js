
const fetchPoke =(callback=buildPoke)=>{
    let random = Math.floor((Math.random() * 151) + 1);
    axios.get(`https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon/${random}/`).then(res=>{
        callback(res.data)
    }).catch(err => {
        console.log(err);
    })
}

// let pokemon2=document.querySelector("#pokemon2")
const buildPoke = (poke)=>{
    let data=document.querySelector(".data");
    let pokemon=document.createElement("div");
    let pokeMax=document.querySelector(".data > div:nth-child(4)");
    pokeMax ? data.innerHTML=""  : console.log(`Max Pokemon is ${4}`)
    let name = document.createElement("h3");
    name.innerText=poke.name
    pokemon.appendChild(name)
    let img=document.createElement("img")
    img.src=poke.sprites.front_default
    pokemon.appendChild(img)
    let hp =document.createElement("ol")
    hp.value=poke.stats[5].base_stat;
    hp.innerText=`HP: ${poke.stats[5].base_stat}`;
    pokemon.appendChild(hp)
    let txt=document.createElement("ol")
    txt.innerText="Moves:"
    pokemon.appendChild(txt)
    let newMove =shuffleMove(poke.moves).slice(1,5);
    newMove.forEach(async(moveInfo)=>{
        let move=await axios.get(moveInfo.move.url);
        let li = document.createElement("li");
        li.innerText=`${move.data.name} [Power:${move.data.power}, PP:${move.data.pp}]`;
        li.value=move.data.power;
        pokemon.appendChild(li)   
        data.appendChild(pokemon)
    })
}

const battle =()=>{
    // let pokemon=document.querySelector(".data")
    let pokeMin=document.querySelector(".data > div:nth-child(1)");
    if(pokeMin.innerHTML){
        console.log("hell")
    }{
        alert("least need Two pokemon to battle")

    }
}


const shuffleMove=(arr)=> {
    let j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
}


// fetchPoke(`https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon/${random}/`, buildPoke);

// let get = document.querySelector("#get");
// get.addEventListener("click", fetchPoke);
// let fight = document.querySelector("#fight");
// fight.addEventListener("click",battle);