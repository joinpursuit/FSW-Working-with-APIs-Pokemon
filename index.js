document.addEventListener("DOMContentLoaded", () => {
    let data = document.querySelector(".data");
    let columnOne = document.querySelector(".columnOne");
    let columnTwo = document.querySelector(".columnTwo");
    let getPokeBtn = document.querySelector("#pokeBtn");
    let battleBtn = document.querySelector("#battleBtn");
    const randomPoke = async (event) => {
        try {
            let num1 = Math.floor(Math.random() * 810);
            let num2 = Math.floor(Math.random() * 810);
            let poke1 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num1}`);
            let poke2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num2}`);
            
            let name1 = document.createElement("h2");
            let name2 = document.createElement("h2");
            name1.innerText = poke1.data.name;
            name2.innerText = poke2.data.name;
            columnOne.appendChild(name1);
            columnTwo.appendChild(name2);
            let img1 = document.createElement("img");
            let img2 = document.createElement("img");
            img1.src = poke1.data.sprites.front_shiny;
            img2.src = poke2.data.sprites.front_shiny;
            columnOne.appendChild(img1);
            columnTwo.appendChild(img2);
            
            let ul1 = document.createElement("ul");
            columnOne.appendChild(ul1);
            let hp1 = document.createElement("li");
            hp1.innerText = "HP: " + poke1.data.stats[5].base_stat;
            ul1.appendChild(hp1);

            let ul2 = document.createElement("ul");
            columnTwo.appendChild(ul2);
            let hp2 = document.createElement("li");
            hp2.innerText = "HP: " + poke2.data.stats[5].base_stat;
            ul2.appendChild(hp2);

            let move1 = document.createElement("li");
            let move2 = document.createElement("li");
            move1.innerText = "Moves: ";
            move2.innerText = "Moves: ";
            ul1.appendChild(move1);
            ul2.appendChild(move2); 
            
            // debugger;
            getMoves(poke1, ul1);
            getMoves(poke2, ul2);
            
            battleBtn = document.addEventListener("click", () => {
                battlePoke(poke1, poke2);
            })
            // debugger;

        } catch (err) {
            console.log(err);
            debugger;
        }
    }

    const getMoves = async (poke, ul) => {
        try {
            for(let i = 0; i <= 3 ; i++) {
                let moveName = poke.data.moves[i].move.name
                let li = document.createElement("li");
                let pokeMoves = poke.data.moves[i].move.url;
                let pokeList = await axios.get(`${pokeMoves}`);
                // debugger;
                li.innerText = moveName + ": " + pokeList.data.pp;
                ul.appendChild(li);
            }
        } catch(err) {
            console.log(err);
            debugger;
        }
    }

    const battlePoke = (firstPoke, secondPoke) => {
        try {
            let myArray = [firstPoke, secondPoke]
            let winnerPoke = myArray[Math.floor(Math.random() * myArray.length)];
            let winnerPokeStatement = "";
            if(winnerPoke === firstPoke) {
                winnerPokeStatement = `${firstPoke.data.name} beat ${secondPoke.data.name}`
            } else {
                winnerPokeStatement = `${secondPoke.data.name} beat ${firstPoke.data.name}`
            }
            let battleHistory = document.querySelector(".battleHistory");
            let battleP = document.createElement("p");
            // debugger;
            battleP.innerText = winnerPokeStatement;
            battleHistory.appendChild(battleP);
        } catch (err) {
            console.log(err);
            debugger;
        }
    }

    getPokeBtn.addEventListener("click", (event) => {
        columnOne.innerHTML = "";
        columnTwo.innerHTML = "";
        randomPoke();
    });

})       