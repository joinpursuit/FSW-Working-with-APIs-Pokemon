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
            
            setTimeout(() => {
                displayBattleResult(myTwoPokemons);
                battleEffectDiv.style.display = "none";
            }, 1000);
        }
    })

    let movesFrom = document.querySelector("form");
    movesFrom.addEventListener("click", (event) => {
        let selectedMove = event.target
        if (selectedMove.parentNode.parentNode === movesFrom) {
            let leftSide = document.querySelector("#left");
            let leftPokemonHPText = leftSide.querySelector("h4").innerText;
            let leftPokemonHP = parseInt(leftPokemonHPText.slice(leftPokemonHPText.lastIndexOf(" ")));
            let leftPokemonImage = leftSide.querySelector("img").src;
        
            let rightSide = document.querySelector("#right");
            let rightPokemonHPText = rightSide.querySelector("h4").innerText;
            let rightPokemonHP  = parseInt(rightPokemonHPText.slice(rightPokemonHPText.lastIndexOf(" ")));
            let rightPokemonImage = rightSide.querySelector("img").src;

            if (readyForBattle) {
                fightSimulation(leftPokemonImage, leftPokemonHP, selectedMove.value, rightPokemonImage, rightPokemonHP);
            }
            
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
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => {
            if (!response) {
                console.log("Sorry \nSomething went wrong");
            }
            return response.json();
        })
        .then(resp => {
            pokemonInfo = resp;
            errorDiv.innerText = "";
            displayPokemonIntoDOM(side, pokemonInfo, nameOfPokemon);
        })
        .catch(err => {
            errorDiv.innerText += `Sorry ... An Error Occured:\n${err}`;
            console.log(err);
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
                console.log("Sorry \nSomething went wrong");
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
            errorDiv.innerText += `Sorry ... An Error Occured:\n${err}`;
            console.log(err)
        })
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

const fightSimulation = (p1Image, p1HP, p1Attack, p2Image, p2HP) => {
    let winner;
    let loser;

    let fightDiv = document.querySelector("#battleImage");
    fightDiv.innerHTML = "";
    fightDiv.style.display = "block";

    let pImage = document.createElement("img");
    pImage.src = p2Image;
    fightDiv.appendChild(pImage);
    let HealthPoints = document.createElement("h3");
    HealthPoints.innerText = "Health Points:"
    fightDiv.appendChild(HealthPoints);
    let hp = document.createElement("h4");
    hp.innerText = p2HP;
    fightDiv.appendChild(hp);
    
    setTimeout(() => {
        if (p2HP > 0 && readyForBattle) {
            p2HP -= p1Attack;
            if (p2HP < 0) {
                p2HP = 0;
            }
            hp.innerText = `${hp.innerText} ➡ ${p2HP}`;
            let p2H4Health = document.querySelector("#right").querySelector("h4");
            p2H4Health.innerText = "Health (HP): " + p2HP;
            if (p2HP <= 0) {
                readyForBattle = false;
                winner = document.querySelector("#left").querySelector("h3").innerText;
                loser = document.querySelector("#right").querySelector("h3").innerText;
                isAWinner(winner, loser);
            }   
        }

        setTimeout(() => {
            if (p1HP > 0 && readyForBattle) {
                fightDiv.innerHTML = "";
                let pImage = document.createElement("img");
                pImage.src = p1Image;
                fightDiv.appendChild(pImage);
                let HealthPoints = document.createElement("h3");
                HealthPoints.innerText = "Health Points:"
                fightDiv.appendChild(HealthPoints);
                let hp = document.createElement("h4");
                hp.innerText = p1HP;
                fightDiv.appendChild(hp);
                
                let allAttacks = document.querySelector("#right").querySelectorAll("li");
                let p2Attack = allAttacks[Math.floor(Math.random() * allAttacks.length)].innerText;
                p2Attack = parseInt(p2Attack.slice(p2Attack.lastIndexOf(" ")));
                    p1HP -= p2Attack;
                    if (p1HP < 0) {
                        p1HP = 0;
                    }
                    hp.innerText = `${hp.innerText} ➡ ${p1HP}`;
                    let p1H4Health = document.querySelector("#left").querySelector("h4");
                    p1H4Health.innerText = "Health (HP): " + p1HP;
                    
                if (p1HP <= 0) {
                    readyForBattle = false;
                    winner = document.querySelector("#right").querySelector("h3").innerText;
                    loser = document.querySelector("#left").querySelector("h3").innerText;
                    isAWinner(winner, loser);
                }
            } 
        }, 2000);
    }, 200);
    setTimeout(() => {
        fightDiv.style.display = "none";
    }, 5000);
}


const sleep = (time) => {
  var start = new Date().getTime();
  for (var i = 0; i < 1; i--) { //infinit loop
    if ((new Date().getTime() - start) > time) {
      break;
    }
  }
}

const isAWinner = (winner, loser) => {
    let battleHistoryDiv = document.querySelector("#battleHistory");
    let newParagraph = document.createElement("p");
    newParagraph.innerText = winner + " defeated " + loser;
    battleHistoryDiv.appendChild(newParagraph);
}

const stylePokemonCard = (side, type) => { //NEED TO DO THIS FUNCTION
    let pokemonDiv = document.querySelector(`#${side}`);
    
    switch (type) {
    case "fire":
        pokemonDiv.style.backgroundColor = "#F08030";
        break;
    case "water":
        pokemonDiv.style.backgroundColor = "#6890F0";
        break;
    case "grass":
        pokemonDiv.style.backgroundColor = "#78C850";
        break;
    case "eletric":
        pokemonDiv.style.backgroundColor = "#F8D030";
        break;
    case "psychic":
        pokemonDiv.style.backgroundColor = "#F85888";
        break;
    case "steel":
        pokemonDiv.style.backgroundColor = "#B8B8D0";
        break;
    case "normal":
        pokemonDiv.style.backgroundColor = "#A8A878";
        break;
    case "fairy":
        pokemonDiv.style.backgroundColor = "#EE99AC";
        break;
    case "dark":
        pokemonDiv.style.backgroundColor = "#705848";
        break;
    case "flying":
        pokemonDiv.style.backgroundColor = "#A890F0";
        break;
    case "ghost":
        pokemonDiv.style.backgroundColor = "#705898";
        break;
    case "poison":
        pokemonDiv.style.backgroundColor = "#A040A0";
        break;
    case "ice":
        pokemonDiv.style.backgroundColor = "#98D8D8";
        break;
    case "ground":
        pokemonDiv.style.backgroundColor = "#E0C068";
        break;
    case "rock":
        pokemonDiv.style.backgroundColor = "#B8A038";
        break;
    case "dragon":
        pokemonDiv.style.backgroundColor = "#7038F8";
        break;
    case "fighting":
        pokemonDiv.style.backgroundColor = "#C03028";
        break;
    case "bug":
        pokemonDiv.style.backgroundColor = "#A8B820";
        break;
    default :
        pokemonDiv.style.backgroundColor = "lightblue"
    }
}