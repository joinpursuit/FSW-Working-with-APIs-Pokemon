document.addEventListener("DOMContentLoaded", () => {
    let get = document.querySelector("#get");
    get.addEventListener("click", getPokemon);
    get.addEventListener("click", getPokemon2);
    let fight = document.querySelector("#fight");
    fight.addEventListener("click",battle)
})

const getPokemon = async () => {
    try {
        let random = Math.floor((Math.random() * 964) + 1);
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${random}/`);
        // debugger;
        let pokeName=res.data.name;
        let pokeImg=res.data.sprites.front_default;
        let pokeHP =res.data.stats[5].base_stat;
        let newMove=shuffleMove(res.data.moves);
        
        let move1 = newMove[0].move.name;
        let move1Url = newMove[0].move.url;
        let moveSat1= await axios.get(move1Url);
        let move1Power=moveSat1.data.power;
        let move1PP=moveSat1.data.pp;
        
        let move2 = newMove[1].move.name;
        let move2Url = newMove[1].move.url;
        let moveSat2= await axios.get(move2Url);
        let move2Power=moveSat2.data.power;
        let move2PP=moveSat2.data.pp;
        
        let move3 = newMove[2].move.name;
        let move3Url = newMove[2].move.url;
        let moveSat3= await axios.get(move3Url);
        let move3Power=moveSat3.data.power;
        let move3PP=moveSat3.data.pp;
        
        let move4 = newMove[3].move.name;
        let move4Url = newMove[3].move.url;
        let moveSat4= await axios.get(move4Url);
        let move4Power=moveSat4.data.power;
        let move4PP=moveSat4.data.pp;

        let pokemon1=document.querySelector("#pokemon1");
        let name=document.createElement("h3");
        name.innerText=pokeName;
        pokemon1.appendChild(name);
        // debugger;
        let img=document.createElement("img");
        img.src=pokeImg;
        pokemon1.appendChild(img);
        let hp=document.createElement("h5");
        hp.innerText=`HP: ${pokeHP}`;
        hp.id="pk1HP"
        pokemon1.appendChild(hp);
        let moveText=document.createElement("h5")
        moveText.innerHTML="Moves:"
        pokemon1.appendChild(moveText);
        let action1=document.createElement("h5");
        action1.innerText=`${move1} [ power: ${move1Power}, PP: ${move1PP} ]`;
        pokemon1.appendChild(action1)
        let action2=document.createElement("h5");
        action2.innerText=`${move2} [ power: ${move2Power}, PP: ${move2PP} ]`;
        pokemon1.appendChild(action2)
        let action3=document.createElement("h5");
        action3.innerText=`${move3} [ power: ${move3Power}, PP: ${move3PP} ]`;
        pokemon1.appendChild(action3)
        let action4=document.createElement("h5");
        action4.innerText=`${move4} [ power: ${move4Power}, PP: ${move4PP} ]`;
        pokemon1.appendChild(action4)
    } catch (err) {
        console.log(err);
        debugger
    }
}

const getPokemon2 = async () => {
    try {
        let random = Math.floor((Math.random() * 964) + 1);
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${random}/`);
        // debugger;
        let pokeName=res.data.name;
        let pokeImg=res.data.sprites.front_default;
        let pokeHP =res.data.stats[5].base_stat;
        let newMove=shuffleMove(res.data.moves);
        
        let move1 = newMove[0].move.name;
        let move1Url = newMove[0].move.url;
        let moveSat1= await axios.get(move1Url);
        let move1Power=moveSat1.data.power;
        let move1PP=moveSat1.data.pp;
        
        let move2 = newMove[1].move.name;
        let move2Url = newMove[1].move.url;
        let moveSat2= await axios.get(move2Url);
        let move2Power=moveSat2.data.power;
        let move2PP=moveSat2.data.pp;
        
        let move3 = newMove[2].move.name;
        let move3Url = newMove[2].move.url;
        let moveSat3= await axios.get(move3Url);
        let move3Power=moveSat3.data.power;
        let move3PP=moveSat3.data.pp;
        
        let move4 = newMove[3].move.name;
        let move4Url = newMove[3].move.url;
        let moveSat4= await axios.get(move4Url);
        let move4Power=moveSat4.data.power;
        let move4PP=moveSat4.data.pp;

        let pokemon2=document.querySelector("#pokemon2");
        let name=document.createElement("h3");
        name.innerText=pokeName;
        pokemon2.appendChild(name);
        // debugger;
        let img=document.createElement("img");
        img.src=pokeImg;
        pokemon2.appendChild(img);
        let hp=document.createElement("h5");
        hp.innerText=`HP: ${pokeHP}`;
        hp.id="pk2HP"
        pokemon2.appendChild(hp);
        let moveText=document.createElement("h5")
        moveText.innerHTML="Moves:"
        pokemon2.appendChild(moveText);
        let action1=document.createElement("h5");
        action1.innerText=`${move1} [ power: ${move1Power}, PP: ${move1PP} ]`;
        pokemon2.appendChild(action1)
        let action2=document.createElement("h5");
        action2.innerText=`${move2} [ power: ${move2Power}, PP: ${move2PP} ]`;
        pokemon2.appendChild(action2)
        let action3=document.createElement("h5");
        action3.innerText=`${move3} [ power: ${move3Power}, PP: ${move3PP} ]`;
        pokemon2.appendChild(action3)
        let action4=document.createElement("h5");
        action4.innerText=`${move4} [ power: ${move4Power}, PP: ${move4PP} ]`;
        pokemon2.appendChild(action4)
 
    } catch (err) {
        console.log(err);
        debugger
    }
}

const battle = () =>{
    let pokemon1 = document.querySelector("#pk1HP");
    let pokemon2 = document.querySelector("#pk2HP");
    if(pokemon1>pokemon2){
        console.log(pokemon1)
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

// let arr1 = [15,75,54645,312323,546,56]
// console.log(shuffleMove(arr1))
