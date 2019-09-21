// Joseph P. Pasaoa
//

let pokemonLeft = [];
let pokemonRight = [];

/* DOM-Loaded executes */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#button-chooser').addEventListener('click', () => {
        getPokemon();
    });
});



const handleError = (error) => {
  console.log(`The error that was thrown: `, error);
}

const randomNumGen = (max) => {
  return Math.floor(Math.random() * max) + 1
}

const getMoveData = async (urlArray) => {
  try {
    let movesArray = [];
    for (let url of urlArray) {
      let response = await axios.get(url);
      let moveObj = {
        name: response.data.name,
        pp: response.data.pp
      }
      movesArray.push(moveObj);
    }
    return movesArray;
  } catch (err) {
    handleError(err);
  }
}

const buildAPokemon = async () => {
  try {
    let outputPokemonObj = {
      id: randomNumGen(151),
      moveURLsObj: {},
      moves: []
    };
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${outputPokemonObj.id}/`);
    outputPokemonObj['name'] = response.data.name;
    outputPokemonObj['avatarURL'] = response.data.sprites.front_default;
    outputPokemonObj['baseHP'] = response.data.stats[5].base_stat;
    while (Object.keys(outputPokemonObj.moveURLsObj).length < 4) {
      let thisMoveIndex = randomNumGen(response.data.moves.length - 1);
      outputPokemonObj.moveURLsObj[thisMoveIndex] = response.data.moves[thisMoveIndex].move.url;
    } 
    outputPokemonObj.moves = getMoveData(Object.values(outputPokemonObj.moveURLsObj));
    return outputPokemonObj;
  } catch (err) {
    handleError(err);
  }
}

const displayPokemon = (side, pokemonObj) => {
  console.log(side, pokemonObj);
}

const getPokemon = () => {
  displayPokemon('left', buildAPokemon());
  displayPokemon('right', buildAPokemon());
}

const battlePokemon = () => {

}