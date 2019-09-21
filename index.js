document.addEventListener("DOMContentLoaded", () => {
  let getButton = document.querySelector(".button-pokemon");

  getPokemon(1);
  getPokemon(2);
  
  getButton.addEventListener("click", () => {
    getPokemon(1);
    getPokemon(2);
  });

  let battleButton = document.querySelector(".battle");

  battleButton.addEventListener("click", selectWinner);

  function selectWinner() {
    let p1Name = document.querySelector("#p1Name").innerText;
    let p2Name = document.querySelector("#p2Name").innerText;
    let twoPokemon = [p1Name, p2Name];
    let winner = twoPokemon[Math.floor(Math.random() * twoPokemon.length)];
    let loser;
    if (winner == twoPokemon[0]) {
      loser = twoPokemon[1];
    } else {
      loser = twoPokemon[0];
    }
    let p = document.createElement("p");
    p.innerText = `${winner} defeated ${loser}`;
    let winners = document.querySelector(".battleHistory");
    winners.appendChild(p);
  }

  function getPokemon(num) {
    let randomId = getRandom();
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      .then(response => {
        console.log("response", response);
        return response.json();
      })
      .then(pokemonData => {
        console.log("pokemon", pokemonData);

        getMoves(pokemonData.moves, num);

        document.querySelector("#p" + num + "Name").innerText =
          pokemonData.name;
        document.querySelector("#p" + num + "Img").src =
          pokemonData.sprites.front_default;
        document.querySelector("#p" + num + "Hp").innerText =
          "Health Points: " + pokemonData.stats[5].base_stat;
      })
      .catch(err => {
        console.log("err", err);
      });
  }

  function getRandom() {
    return Math.floor(Math.random() * (809 - 1) + 1);
  }

  function getMoves(arr, num) {
    let ul = document.querySelector("#p" + num + "Moves");
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
    for (let i = 0; i < 4; i++) {
      fetch(arr[i].move.url)
        .then(response => {
          return response.json();
        })
        .then(moveData => {
          let li = document.createElement("li");
          let moveName = moveData.name;
          let movePP = moveData.pp;
          li.innerText = `${moveName} PP: ${movePP}`;
          ul.appendChild(li);
        });
    }
  }
});
