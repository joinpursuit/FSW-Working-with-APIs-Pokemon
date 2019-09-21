document.addEventListener("DOMContentLoaded", () =>{
    let button1 = document.querySelector("#random-pokemon");
    button1.addEventListener("click", getAllPokemon)
})

const randomPokeId = () => {
    let randomId = Math.floor((Math.random() * 809) +1);
    return randomId
}

const randomPokeUrl = () => {
    let randomId = randomPokeId()
    let url = "https://pokeapi.co/api/v2/pokemon/" + randomId
    return url
}

let oneMove1 = ""
let oneMove1url = ""
let oneMove2 = ""
let oneMove2url = ""
let oneMmove3 = ""
let oneMove3url = ""
let oneMove4 = ""
let oneMove4url = ""

let twoMove1 = ""
let twoMove1url = ""
let twoMove2 = ""
let twoMove2url = ""
let twoMove3 = ""
let twoMove3url = ""
let twoMove4 = ""
let twoMove4url = ""

let firstPokemon = ""
let secondPokemon = ""

const getPokemon1 = () => {
    let url = randomPokeUrl();
    axios.get(url)
       .then((response) => {
           firstPokemon = ""
           let pokemonName1 = response.data.name.toUpperCase();
           let nameInsert = document.querySelector("#pokemon-name1");
           nameInsert.innerHTML = "NAME: " + pokemonName1;
           firstPokemon = pokemonName1;
           let findHp = response.data.stats
           let pokemonHp = ""
           findHp.forEach((element) => {
               if (element.stat.name === "hp") {
                   pokemonHp = element.base_stat
               }
           })
           let insertHP = document.querySelector("#hp1")
           insertHP.innerHTML = "HP: " + pokemonHp
           let pokemonSprite = response.data.sprites.front_default;
           let img = document.querySelector("#sprite1");
           img.src = pokemonSprite;
           img.alt = pokemonName1;
           let findMoves = response.data.moves
           oneMove1 = ""
           oneMove1url = ""
           oneMove2 = ""
           oneMove2url = ""
           oneMove3 = ""
           oneMove3url = ""
           oneMove4 = ""
           oneMove4url = ""
           findMoves.forEach((element) => {
               if (element.move.name && oneMove1 === "") {
                   oneMove1 = element.move.name
                   oneMove1url = element.move.url
               } else if (element.move.name && oneMove2 === "") {
                   oneMove2 = element.move.name
                   oneMove2url = element.move.url
               } else if (element.move.name && oneMove3 === "") {
                   oneMove3 = element.move.name
                   oneMove3url = element.move.url
               } else if (element.move.name && oneMove4 === "") {
                   oneMove4 = element.move.name
                   oneMove4url = element.move.url
               }
           })
           let move1 = document.querySelector("#one-move-name1")
           move1.innerText = "MOVE 1: " + oneMove1.toUpperCase()
           let move2 = document.querySelector("#one-move-name2")
           move2.innerText = "MOVE 2: " + oneMove2.toUpperCase()
           let move3 = document.querySelector("#one-move-name3")
           move3.innerText = "MOVE 3: " + oneMove3.toUpperCase()
           let move4 = document.querySelector("#one-move-name4")
           move4.innerText = "MOVE 4: " + oneMove4.toUpperCase()

       })
          .catch(err => {
              console.log("COMPUTER BROKEN:", err)
          })
}

const getPokemon2 = () => {
    let url = randomPokeUrl();
    axios.get(url)
       .then((response) => {
           secondPokemon = ""
           let pokemonName2 = response.data.name.toUpperCase();
           let nameInsert = document.querySelector("#pokemon-name2");
           nameInsert.innerHTML = "NAME: " + pokemonName2;
           secondPokemon = pokemonName2
           let findHp = response.data.stats
           let pokemonHp = ""
           findHp.forEach((element) => {
               if (element.stat.name === "hp") {
                   pokemonHp = element.base_stat
               }
           })
           let insertHP = document.querySelector("#hp2")
           insertHP.innerHTML = "HP: " + pokemonHp
           let pokemonSprite = response.data.sprites.front_default;
           let img = document.querySelector("#sprite2");
           img.src = pokemonSprite;
           img.alt = pokemonName2;
           let findMoves = response.data.moves
           twoMove1 = ""
           twoMove1url = ""
           twoMove2 = ""
           twoMove2url = ""
           twoMove3 = ""
           twoMove3url = ""
           twoMove4 = ""
           twoMove4url = ""
           findMoves.forEach((element) => {
               if (element.move.name && twoMove1 === "") {
                   twoMove1 = element.move.name
                   twoMove1url = element.move.url
               } else if (element.move.name && twoMove2 === "") {
                   twoMove2 = element.move.name
                   twoMove2url = element.move.url
               } else if (element.move.name && twoMove3 === "") {
                   twoMove3 = element.move.name
                   twoMove3url = element.move.url
               } else if (element.move.name && twoMove4 === "") {
                   twoMove4 = element.move.name
                   twoMove4url = element.move.url
               }
           })
           let move1 = document.querySelector("#two-move-name1")
           move1.innerText = "MOVE 1: " + oneMove1.toUpperCase()
           let move2 = document.querySelector("#two-move-name2")
           move2.innerText = "MOVE 2: " + oneMove2.toUpperCase()
           let move3 = document.querySelector("#two-move-name3")
           move3.innerText = "MOVE 3: " + oneMove3.toUpperCase()
           let move4 = document.querySelector("#two-move-name4")
           move4.innerText = "MOVE 4: " + oneMove4.toUpperCase()

       })
          .catch(err => {
              console.log("COMPUTER BROKEN:", err)
          })
}

const getAllPokemon = () => {
    getPokemon1()
    getPokemon2()
}