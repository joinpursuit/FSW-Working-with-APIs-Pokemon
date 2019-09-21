document.addEventListener("DOMContentLoaded", () => {

    let getPoke = document.getElementById("getPoke");
    getPoke.addEventListener("click", getTwoPoke);

    let battleButton = document.getElementById("battle");
    battleButton.addEventListener("click", pokeBattle);
})


function getTwoPoke() {
    let randomNum = Math.ceil(Math.random() * 807);
    let randomNum2 = Math.ceil(Math.random() * 807);

    let url = `https://pokeapi.co/api/v2/pokemon/${randomNum}`;
    let url2 = `https://pokeapi.co/api/v2/pokemon/${randomNum2}`;

    let pokemon1 = document.getElementById("poke1");
    let pokemon2 = document.getElementById("poke2");

    pokemon1.innerHTML = "";
    pokemon2.innerHTML = "";
    

    axios.get(url)
        .then((response) => {
            
            

            let firstPoke = response.data
            console.log(firstPoke)
            
            let nameDiv = document.createElement("div");
            pokemon1.appendChild(nameDiv);
            let pokeName = firstPoke.name;
            let printName = document.createElement("h1");
            printName.id = "pn"
            printName.innerText = pokeName;
            printName.className = "nameClass";
            nameDiv.appendChild(printName)

            let imgDiv = document.createElement("div");
            pokemon1.appendChild(imgDiv);
            let pokeSrc = firstPoke.sprites.front_default;
            let pokePic = document.createElement("img");
            pokePic.src = pokeSrc;
            pokePic.className = "picClass"
            imgDiv.appendChild(pokePic)

            let hpDiv = document.createElement("div");
            pokemon1.appendChild(hpDiv);
            let hp = document.createElement("p");
            hp.innerText = `HP: ${firstPoke.stats[5].base_stat}`
            hp.className = "hpClass"
            hpDiv.appendChild(hp); 
            
            let firstListDiv = document.createElement("div");
            pokemon1.appendChild(firstListDiv);
            let list = document.createElement("ul");
            list.id = "theList"
            list.innerText = "Moves:"
            list.className = "listClass"
            firstListDiv.appendChild(list);
            
            for (let i = 0; i < 4; i++) {
                let theMove = firstPoke.moves[i].move.url;
                getTheMoves(theMove);
            }

        }) 
        .catch(err => {
            console.log("Oops! There's an error.")
        })

    axios.get(url2)
        .then((response) => {
            
            let secondPoke = response.data
            console.log(secondPoke)
            
            let nameDiv2 = document.createElement("div");
            pokemon2.appendChild(nameDiv2);
            let pokeName2 = secondPoke.name;
            let printName2 = document.createElement("h1");
            printName2.id = "pn2"
            printName2.innerText = pokeName2;
            printName2.className = "nameClass"
            nameDiv2.appendChild(printName2)

            let imgDiv2 = document.createElement("div");
            pokemon2.appendChild(imgDiv2);
            let pokeSrc2 = secondPoke.sprites.front_default;
            let pokePic2 = document.createElement("img");
            pokePic2.src = pokeSrc2;
            pokePic2.className = "picClass"
            imgDiv2.appendChild(pokePic2)

            let hpDiv2 = document.createElement("div");
            pokemon2.appendChild(hpDiv2);
            let hp2 = document.createElement("p");
            hp2.innerText = `HP: ${secondPoke.stats[5].base_stat}`
            hp2.className = "hpClass"
            hpDiv2.appendChild(hp2);   

            let secondListDiv = document.createElement("div");
            pokemon2.appendChild(secondListDiv);
            let list2 = document.createElement("ul");
            list2.id = "theList2"
            list2.innerText = "Moves:"
            list2.className = "listClass"
            secondListDiv.appendChild(list2);
            
            for (let i = 0; i < 4; i++) {
                let theMove = secondPoke.moves[i].move.url;
                getTheMoves2(theMove);
            }

        }) 
        .catch(err => {
            console.log("Oops! There's an error.")
        })


    }

function getTheMoves(pokeMove){
        axios.get(pokeMove)
        .then((response) => {
            let theList = document.getElementById("theList")
            console.log("request1")
            let name = response.data.name;
            let pp = response.data.pp;

            let listItem = document.createElement("li");
            listItem.innerText = `${name} PP: ${pp}`;
            theList.appendChild(listItem)
        })
    }

function getTheMoves2(pokeMove2){
        axios.get(pokeMove2)
        .then((response) => {
            let theList2 = document.getElementById("theList2")
            console.log("request1")
            let name = response.data.name;
            let pp = response.data.pp;

            let listItem2 = document.createElement("li");
            listItem2.innerText = `${name} PP: ${pp}`;
            theList2.appendChild(listItem2)
        })
    }


function pokeBattle() {
    let leftPoke = document.getElementById("pn").innerText;
    let rightPoke = document.getElementById("pn2").innerText;

    let battleList = document.getElementById("battleList");

    let random = Math.ceil(Math.random() * 807);
    let random2 = Math.ceil(Math.random() * 807);
    console.log(battleList.length)



    if (random > random2) {
        
        let battleListItem = document.createElement("li");
        battleListItem.innerText = `${leftPoke} defeated ${rightPoke}`;
        battleList.appendChild(battleListItem);
    } else if (random2 > random) {
        let battleListItem2 = document.createElement("li");
        battleListItem2.innerText = `${rightPoke} defeated ${leftPoke}`;
        battleList.appendChild(battleListItem2);
    } else {
        let battleListItem3 = document.createElement("li");
        battleListItem3.innerText = `${rightPoke} and ${leftPoke} tied.`;
        battleList.appendChild(battleListItem3);
    }
}