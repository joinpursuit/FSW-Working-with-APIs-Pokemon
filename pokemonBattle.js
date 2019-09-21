document.addEventListener("DOMContentLoaded", () => { // everything needs to be loaded before it runs
    let getPokemonButton = document.querySelector("#getPokemon");
    // listens to a click to execute function on buttons

    getPokemonButton.addEventListener("click", () => {
        firstRandomPokemon();
        secondRandomPokemon();
        // fetches pokemon one and two
    })
    let battleButton = document.querySelector("#battle");
    battleButton.addEventListener("click", selectWin);
    // listens to a click to execute function on buttons

    let pOneName = null;
    let pOneSprites = null;
    let pOneHp = null;
    let pokemonOneMoves = []

    let pTwoName = null;
    let pTwoSprites = null;
    let pTwoHp = null;
    let pokemonTwoMoves = []
    //sets pokemon data/ information

    let winners = document.querySelector("#winners")


    function selectWin() {
        let duelists = [pOneName, pTwoName];
        let battleWinner = duelists[Math.floor(Math.random() * duelists.length)]
        // selecting a random winner from pOneName and pTwoName
        let li = document.createElement('li');

        let battleLoser;
        if (battleWinner === duelists[0]) {
            battleLoser = duelists[1]
        } else {
            battleLoser = duelists[0]
        }
        // this condition is selecting a winners and loser
        li.innerText = `${battleWinner} defeated ${battleLoser}`
        winners.appendChild(li)
        // creating an "li" and its appended to an ul

    }


    function firstRandomPokemon() {
        let pokemonOneId = getRandomPokemon()
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonOneId}`)
            .then(response => {
                return response.json();
            })
            .then(pokemonOneData => {
                pokemonOneMoves = pokemonOneData.moves
                // fetches a random pokemon base on random numbers 


                getMoves(pokemonOneMoves, 1)
                // this function gets and sets the move

                pOneName = pokemonOneData.name;
                pOneSprites = pokemonOneData.sprites.front_default;
                pOneHp = pokemonOneData.stats[5].base_stat;
                document.querySelector("#p1-name").innerText = pOneName;

                document.getElementById("p1-sprites").src = pOneSprites;
                document.querySelector('#p1-hp').innerText = `HP: ${pOneHp}`;
                // appending api information to variables then appending variables to document's tags 
            })
            .catch(err => { // if promise is not met it will return a error as a response 
                console.log("err:", err)
            })

    }

    function secondRandomPokemon() {
        let pokemonTwoId = getRandomPokemon()
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonTwoId}`)
            .then(response => {
                return response.json();
            })
            .then(pokemonTwoData => {
                pokemonTwoMoves = pokemonTwoData.moves
                getMoves(pokemonTwoMoves, 2)
                // takes in api response and sets it to a variable that later is use as an 
                //argument for the getMove function -targeting pokemon two moves 

                pTwoName = pokemonTwoData.name; // make sure to move from right to left in assigning values
                pTwoSprites = pokemonTwoData.sprites.front_default; // 
                pTwoHp = pokemonTwoData.stats[5].base_stat;
                // appending api information to variables that is later appended to variables and the document's tags
                document.querySelector("#p2-name").innerText = pTwoName;
                document.getElementById("p2-sprites").src = pTwoSprites;
                document.querySelector('#p2-hp').innerText = `HP: ${pTwoHp}`;
                // appending tags to a value -- api response
            })
            .catch(err => { // if promise is not met it will return a error as a response 
                console.log("err:", err)
            })
    }

    function getRandomPokemon() {
        return (Math.floor(Math.random() * (809 - 1)) + 1);
    } // randomly selecting a flowing point that its round down to a whole number

    function getMoves(array, num) {
        let div = document.querySelector(`#p${num}-attributes`)
        while (div.firstChild) {
            div.removeChild(div.firstChild)
        }
        // if 'ul' has children it deletes them, to avoid override information in the ul
        let p = document.createElement("p")
        p.innerText = "move"
        div.appendChild(p)

        for (let i = 0; i < 4; i++) {
            let li = document.createElement("p")
            let pokeName = array[i].move.name
            // loops through pokemon arrays moves 
            //and makes api calls based on pokemon move-name 

            fetch(`https://pokeapi.co/api/v2/move/${pokeName}`)
                .then(response => {
                    return response.json();
                })
                .then(move => {
                    li.innerText = `${move.name} - PP:${move.pp}`
                    div.appendChild(li)

                })

            // it sets li content to pokemon move-names and pp(power-point)
            // then append it to the 'ul'

        }

    }

})







// function pokemonMoves(name) {

//     fetch(`https://pokeapi.co/api/v2/move/${name}`)
//         .then(response => {
//             return response.json();
//         })
//         .then(move => {
//             console.log(move.name, move.pp)
//         })

// }