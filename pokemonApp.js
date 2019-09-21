document.addEventListener('DOMContentLoaded', () => {
    let getPokemon = document.querySelector('#get-pokemon');
    let battle = document.querySelector('#battle');
    getPokemon.addEventListener('click', showBothPokemon );
    battle.addEventListener('click', battle);
    
})

// displays pokemon 1 for battle
const getPokemon1=  () =>{

    let randomPoke1 = Math.floor(Math.random() * (809-0));
    console.log(randomPoke1)
    let firstPoke = `https://pokeapi.co/api/v2/pokemon/${randomPoke1}` ;


    fetch(firstPoke)
    .then((response)=>{
        console.log(response)
        return response.json();
    }).then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log('Error!')
    })

// await axios.get(firstPoke).then((response)=>{
//     try{
//         let pokemon1 = response.data
//         console.log(response.data)
//     }catch(err){
//         console.log("the error was thrown", err)
//     }
// })
    

    
}
getPokemon1();

// displays pokemon 2 for battle
const getPokemon2 =  () =>{
    let randomPoke2 = Math.floor(Math.random() * (809-0));
    console.log(randomPoke2);
    let secondPoke = `https://pokeapi.co/api/v2/pokemon/${randomPoke2}`

    fetch(secondPoke)
    .then((response)=>{
        console.log(response)
        return response;
    }).then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log('Error!')
    })
}
getPokemon2();

// display both random pokemons for battle
const showBothPokemon = () =>{
    getPokemon1();
    getPokemon2();
}
   


// const battle = () =>{

// }