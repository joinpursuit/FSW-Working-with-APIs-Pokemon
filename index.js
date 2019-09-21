let allPokemonsCount = 807;
let allPokemonsNames; //Server posponse.results is: Object, key is the id, the value is an object{name: "", url:""}
let calledIDs = [];
let readyForBattle = false;

let idFirstPokemon;
let idSecondPokemon;
let pokomenOne;
let popokomenOneName = "";
let pokemonTwo;
let popokomenTwoName = "";


document.addEventListener("DOMContentLoaded", () => {
    let startButton = document.querySelector("#start");
    let description = document.querySelector("#description");
    let gameDiv = document.querySelector("#game");
    

    gameDiv.style.display = "none";

    startButton.addEventListener("click", () => {
        description.style.display = "none";
        startButton.style.display = "none";
        gameDiv.style.display = "block";
        loadRandomPokemon();
    })

    let getPokeBtn = document.querySelector("#getPoke");
    getPokeBtn.addEventListener("click", () => {
        loadRandomPokemon();
    });

    let battleBtn = document.querySelector("#battle");
    battleBtn.addEventListener("click", () => {
        if (readyForBattle) {
            let myTwoPokemons = [];
            let leftSide = document.querySelector("#left");
            let leftPokemonName = leftSide.querySelector("h3").innerText;
            myTwoPokemons.push(leftPokemonName);
            
            let rightSide = document.querySelector("#right");
            let rightPokemonName = rightSide.querySelector("h3").innerText;
            myTwoPokemons.push(rightPokemonName);
            
            let battleEffectDiv = document.querySelector("#battleEffect");
            battleEffectDiv.style.display = "block";
            let dataDiv = document.querySelector("#data");
            dataDiv.style.visibility = "hidden";
            
            setTimeout(() => {
                displayBattleResult(myTwoPokemons);
                battleEffectDiv.style.display = "none"; 
                dataDiv.style.visibility = "visible";
            }, 1000);
        }
    })

    let movesFrom = document.querySelector("form");
    movesFrom.addEventListener("click", (event) => {
        let selectedMove = event.target
        if (
            selectedMove.parentNode.parentNode === movesFrom) {
            console.log(selectedMove.value) //WILL USE THIS FOR BATTLE SIMULATION
            setTimeout(() => {
                selectedMove.checked = false; 
            }, 500);
        }
    })
}) ///////////////// END OF DOMContentLoaded EVENT LISTNER


const loadRandomPokemon = () => {
    let battleBtn = document.querySelector("#battle");
    battleBtn.style.display = "none";

    let pokeballDiv = document.querySelector("#pokeball");
    pokeballDiv.style.display = "block";

    let battleEffectDiv = document.querySelector("#battleEffect");
    battleEffectDiv.style.display = "none";

    let dataDiv = document.querySelector("#data");
    dataDiv.style.visibility = "hidden";

    if (calledIDs.length < allPokemonsCount) {
        idFirstPokemon = getRandomId();
        if (calledIDs.length < allPokemonsCount) {
            idSecondPokemon = getRandomId();
            readyForBattle = true; 
            getPokemonInfo("left", idFirstPokemon, pokomenOne, popokomenOneName);
            getPokemonInfo("right", idSecondPokemon, pokemonTwo, popokomenTwoName);
        } else {
            window.alert("WOW! you got all the pokemons to fight\nPLEASE REFRESH THE PAGE TO START OVER");
        }
    } else {
        window.alert("WOW! you got all the pokemons to fight\nPLEASE REFRESH THE PAGE TO START OVER");
    }
    setTimeout(() => {
        battleBtn.style.display = "inline";
        pokeballDiv.style.display = "none";
        dataDiv.style.visibility = "visible";
    }, 1500);
}

const getRandomId = () => {
    let randomNum = Math.ceil(Math.random() * allPokemonsCount);
    if (!calledIDs.includes(randomNum)) {
        calledIDs.push(randomNum);
        return randomNum;
    }
    return getRandomId();
}

const getPokemonInfo = (side, id, pokemonInfo, nameOfPokemon) => {
    let errorDiv = document.querySelector("#errorMessage");
    console.log(`Pokemon's id: ${id}`)
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => {
            if (!response) {
                errorDiv.innerText = "Sorry \nSomething went wrong";
            }
            return response.json();
        })
        .then(resp => {
            pokemonInfo = resp;
            errorDiv.innerText = "";
            displayPokemonIntoDOM(side, pokemonInfo, nameOfPokemon);
        })
        .catch(err => {
            errorDiv.innerText += "Sorry ... An Error Occured:\n" + err;
        })        
}

const displayPokemonIntoDOM = (side, pokemonObject, nameOfPokemon) => {
    let pokemonDiv = document.querySelector(`#${side}`);
    
    let h3Name = pokemonDiv.querySelector("h3");
    let pokemonName = JSON.stringify(pokemonObject.name).toUpperCase();
    
    for (let i = 1; i < pokemonName.length - 1; i++) {
        nameOfPokemon += pokemonName[i];
    }
    h3Name.innerText = nameOfPokemon;
    
    let pokemonImage = pokemonDiv.querySelector("img");
    pokemonImage.src = pokemonObject.sprites.front_default;
    pokemonImage.alt = h3Name.innerText;

    let h4HealthPoints = pokemonDiv.querySelector("#hp");
    h4HealthPoints.innerText = "Health (HP): " + pokemonObject.stats[5].base_stat;

    let movesContainer = document.querySelector(`#${side}Moves`);
    movesContainer.innerText = "Moves:";

    
    let allMoves = pokemonObject.moves;
    
    let usedIndeces = [];
    if (allMoves.length <= 5) {
        for (let i = 0; i < allMoves.length; i++) {
            getMovesInfo(side, movesContainer, allMoves[i].move.url);
        }
    } else {
        for(let i = 0; i < 5; i++) {
            let randomIndex = getRandomIndex(allMoves.length, usedIndeces);
            getMovesInfo(side, movesContainer, allMoves[randomIndex].move.url);
        }
    }
    let pokemonType = pokemonObject.types[0].type.name;
    stylePokemonCard(side, pokemonType);
}

const getRandomIndex = (num, selectedIndeces) => {
    let randomIndex = Math.floor(Math.random() * num)

    if (!selectedIndeces.includes(randomIndex)) {
        selectedIndeces.push(randomIndex)
        return randomIndex;
    } else {
        return getRandomIndex(num, selectedIndeces);
    }
}

const getMovesInfo = (side, parent, url) => {
    let errorDiv = document.querySelector("#errorMessage");
    let moveContainer;
    let lable;

    fetch(url)
        .then(response => {
            if(!response) {
                errorDiv.innerText = "Sorry \nSomething went wrong";
            }
            return response.json();
        })
        .then(resp => {
            if (side === "right") {
                moveContainer = document.createElement("li");
                moveContainer.innerText = resp.name + " (PP): " + resp.pp;
                parent.appendChild(moveContainer);
            }
            if (side === "left") {
                moveContainer = document.createElement("label");
                moveContainer.innerHTML = `<input type="radio" name="${resp.name}" value="${resp.pp}">${resp.name} (PP): ${resp.pp}`;
                parent.appendChild(moveContainer);
            }

            readyForBattle = true;
        })
        .catch(err => {
            errorDiv.innerText += "Sorry ... An Error Occured:\n" + err;
            console.log(err)
        })
}

const stylePokemonCard = (side, type) => {

}

const displayBattleResult = (twoNamesArray) => {
    let winnerIndex = Math.floor(Math.random() * 2);
    let winner = twoNamesArray[winnerIndex];
    twoNamesArray.splice(winnerIndex, 1);
    let loser = twoNamesArray[0];
    
    let battleHistoryDiv = document.querySelector("#battleHistory");
    let newParagraph = document.createElement("p");
    newParagraph.innerText = winner + " defeated " + loser;
    battleHistoryDiv.appendChild(newParagraph);

    readyForBattle = false;
}