// Joseph P. Pasaoa
//

let pokemonLeft = [];
let pokemonRight = [];

/* DOM-Loaded executes */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#button-chooser').addEventListener('click', () => {
        getDataFromApi();
    });
});

const randomNumGen = (max) => {
  return Math.floor(Math.random() * max) + 1
}

const handleError = (error) => {
  console.log(`The error that was thrown: `, error);
}

function getPokemon(whichOne) {

}

function battlePokemon() {

}

const getDataFromApi = async () => {
  try {
    let outputPokemonObj = {
      id: randomNumGen(151),
      moveIndices: {}
    };
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${outputPokemonObj.id}/`);
    // debugger;
    // console.log(response.data);
    outputPokemonObj['name'] = response.data.name;
    outputPokemonObj['avatarUrl'] = response.data.sprites.front_default;
    outputPokemonObj['baseHP'] = response.data.stats[5].base_stat;
    while (Object.keys(outputPokemonObj.moveIndices).length < 4) {
      outputPokemonObj.moveIndices[randomNumGen(response.data.moves.length - 1)] = true;
    }
    console.log(outputPokemonObj);

  } catch (err) {
    handleError(err);
  }
}