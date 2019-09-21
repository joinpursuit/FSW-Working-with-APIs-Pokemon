// Joseph P. Pasaoa
//

/* TODO
  toggle for classic font vs modern font
  hide pokemon cards until fully built
  split async retrieval into simulta retrs
*/


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
    outputPokemonObj.moves = await getMoveData(Object.values(outputPokemonObj.moveURLsObj));
    return outputPokemonObj;
  } catch (err) {
    handleError(err);
  }
}

const makeCard = async (side) => {
  let pokemonObj = await buildAPokemon();
  console.log('new poke: ', pokemonObj);
  // debugger;
  let emptyDataDiv = document.querySelector('.data');

  let newCard = document.createElement('div');
    newCard.className = `pokemon-card ${side}`;
    let cardHeader = document.createElement('h3');
      cardHeader.innerText = pokemonObj.name;
    newCard.appendChild(cardHeader);
    let cardAvatar = document.createElement('img');
      cardAvatar.src = pokemonObj.avatarURL;
      cardAvatar.setAttribute('alt', `${pokemonObj.name} avatar`);
    newCard.appendChild(cardAvatar);
    let cardHp = document.createElement('p');
      cardHp.className = 'hp';
      cardHp.innerHTML = `<strong>HP:</strong> ${pokemonObj.baseHP}`;
    newCard.appendChild(cardHp);
    let cardMovesBox = document.createElement('div');
      cardMovesBox.className = 'moves-box';
      let cardMovesBoxH4 = document.createElement('h4');
        cardMovesBoxH4.innerText = 'Moves';
      cardMovesBox.appendChild(cardMovesBoxH4);
      let cardMovesBoxList = document.createElement('ul');
        for (let move of pokemonObj.moves) {
          let cardMovesBoxListItem = document.createElement('li');
            let moveItemHTML = `<strong>${move.name}</strong><span>PP: ${move.pp}/${move.pp}</span>`;
            cardMovesBoxListItem.innerHTML = moveItemHTML;
          cardMovesBoxList.appendChild(cardMovesBoxListItem);
        }
      cardMovesBox.appendChild(cardMovesBoxList);
      
    newCard.appendChild(cardMovesBox);

  emptyDataDiv.appendChild(newCard);
}

const clearStage = () => {
  const dataGrid = document.querySelector('.data');
  while (dataGrid.firstChild) {
    dataGrid.removeChild(dataGrid.lastChild);
  }
}

const getPokemon = async () => {
  clearStage();
  await makeCard('left');

  let hiddenDiv = document.createElement('div');
    hiddenDiv.id = "hiding-space";
  document.querySelector('.data').appendChild(hiddenDiv);

  makeCard('right');
}

const battlePokemon = () => {

}