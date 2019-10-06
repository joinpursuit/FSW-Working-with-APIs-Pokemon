// Joseph P. Pasaoa
//

/* TODO
  PORT STAGE CONTROLS TO DOM CREATION AND TO REPLACE HIDDEN BUFFER SHIM
  toggle for classic font vs modern font
  hide pokemon cards until fully built
  X split async retrieval into simulta retrs
*/



let game = {
  round: 0,
  pokemonCreated: 0,
  pokemonLoaded: 0,
  pokemonThrown: 0,
  pokemonBuffer: [],
  historyLeft: [],
  historyRight: []
};

/* DOM-Loaded executes */
document.addEventListener("DOMContentLoaded", () => {
  createEmptyBuffer();

  createCard('left', true);
  createCard('right', true);
  let anotherLeftPokemon = meldPokemonToCard();
  game.historyLeft.push(anotherLeftPokemon);
  game.pokemonBuffer.shift();
  game.pokemonLoaded += 1;
  let anotherRightPokemon = meldPokemonToCard();
  game.historyRight.push(anotherRightPokemon);
  game.pokemonBuffer.shift();
  game.pokemonLoaded += 1;

  document.querySelector('#button-chooser').addEventListener('click', () => {
    cycleOneRound();
    game.round += 1;
    game.pokemonThrown += 2;
  });
  document.querySelector('#button-battle').addEventListener('click', () => {
    let newEvent = runBattle();
    addEventToHistory(newEvent);
  });
});



const handleError = (msgStr, error, id) => {
  console.log(msgStr, error, ' Trying again');
}

const genRandomNum = (max) => { /* MIN: 1 inclusive, MAX: inclusive */
  return Math.floor(Math.random() * max) + 1;
}

const createEmptyBuffer = () => {
  let hiddenDiv = document.createElement('div');
  hiddenDiv.className = "hiding-space";
  document.querySelector('.data').appendChild(hiddenDiv);
}

const clearStage = () => {
  const revealedCards = document.querySelectorAll('.revealed');
  for (let i = revealedCards.length - 1; i >= 0; i--) {
    revealedCards[i].remove();
  }
}

const addEventToHistory = (str) => {
  const historyList = document.querySelector('#historylog');
  let makingLI = document.createElement('li');
  makingLI.className = 'historyitem';
  makingLI.innerHTML = str;
  historyList.appendChild(makingLI);
}

const getMonsterData = async (id) => {
  try {
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    return response.data;
  } catch (err) {
    handleError('getError: ', err, id);
  }
}

const getMovesDataArr = async (urlsArr) => {
  try {
    let movesDataArr = await Promise.all(
      urlsArr.map(url => {
          return axios.get(url)
            .then(response => {
                return response.data;
            })
      })
    )
    return movesDataArr;
  } catch (error) {
      handleError('getError: ', err, id);
  }
}

const buildAPokemon = async () => {
    let outputObj = {
      id: genRandomNum(151), /* Only using First-Generation Pokemon! */
      moveURLsObj: {},
      moves: []
    };
    let monsterData = await getMonsterData(outputObj.id); /* NETWORK REQ POKEMON MONSTER DATA */
    while (Object.values(outputObj.moveURLsObj).length < 4) {
      let randomMoveNum = genRandomNum(monsterData.moves.length - 1);
      outputObj.moveURLsObj[randomMoveNum] = monsterData.moves[randomMoveNum].move.url;
    }
    let moveURLsArr = Object.values(outputObj.moveURLsObj);
    outputObj.moves = await getMovesDataArr(moveURLsArr); /* NETWORK REQs MOVE DATA x4 */
    outputObj['name'] = monsterData.name;
    outputObj['avatarURL'] = monsterData.sprites.front_default;
    outputObj['baseHP'] = monsterData.stats[5].base_stat;
    return outputObj;
}

const createCard = (side, hiddenBool) => {
  let dataGrid = document.querySelector('.data');

  let newCard = document.createElement('div');
  if (hiddenBool) {
    newCard.className = `pokemoncard ${side}`;
  } else {
    newCard.className = `pokemoncard ${side} revealed`;
  }
  newCard.id = 'card' + game.pokemonCreated;
  game.pokemonCreated += 1;

    let cardHeader = document.createElement('h3');
    newCard.appendChild(cardHeader);
    let cardAvatar = document.createElement('img');
    newCard.appendChild(cardAvatar);
    let cardHp = document.createElement('p');
    cardHp.className = 'hp';
    newCard.appendChild(cardHp);
    let cardMovesBox = document.createElement('div');
    cardMovesBox.className = 'moves-box';

      let cardMovesBoxH4 = document.createElement('h4');
      cardMovesBoxH4.innerText = 'Moves';
      cardMovesBox.appendChild(cardMovesBoxH4);
      let cardMovesBoxList = document.createElement('ul');
      cardMovesBox.appendChild(cardMovesBoxList);
      
    newCard.appendChild(cardMovesBox);

  dataGrid.appendChild(newCard);
}

const meldPokemonToCard = async () => {
  let card = document.querySelector('#card' + game.pokemonLoaded);
  let pokemon = await game.pokemonBuffer[0];

  card.querySelector('h3').innerText = pokemon.name;
  
  card.querySelector('img').src = pokemon.avatarURL;
  card.querySelector('img').setAttribute('alt', `${pokemon.name} avatar`);

  card.querySelector('p').innerHTML = `<strong>HP:</strong> ${pokemon.baseHP}`;

  for (let move of pokemon.moves) {
    let cardMovesBoxListItem = document.createElement('li');
      let moveItemHTML = `<strong>${move.name}</strong><span>PP: ${move.pp}/${move.pp}</span>`;
      cardMovesBoxListItem.innerHTML = moveItemHTML;
      card.querySelector('ul').appendChild(cardMovesBoxListItem);
  }

  return pokemon;
}


const cycleOneRound = () => {
  let start = Date.now();
  clearStage();
 
  let hiddenCards = document.querySelectorAll('.pokemoncard');
  hiddenCards[0].className += ' revealed';
  hiddenCards[1].className += ' revealed';

  game.pokemonBuffer.push(buildAPokemon());
  game.pokemonBuffer.push(buildAPokemon());
  createCard('left', true);
  createCard('right', true);
  let anotherLeftPokemon = meldPokemonToCard();
  game.historyLeft.push(anotherLeftPokemon);
  game.pokemonBuffer.shift();
  game.pokemonLoaded += 1;
  let anotherRightPokemon = meldPokemonToCard();
  game.historyRight.push(anotherRightPokemon);
  game.pokemonBuffer.shift();
  game.pokemonLoaded += 1;

  console.log('drawTime: ', (Date.now() - start));
  console.log('gameHistories: ', game.historyLeft, game.historyRight);
}

const runBattle = () => {
  let playerLeft = document.querySelectorAll('.pokemoncard')[0].querySelector('h3').innerText;
  let playerRight = document.querySelectorAll('.pokemoncard')[1].querySelector('h3').innerText;
  if (genRandomNum(2) === 1) {
    return `<strong>${playerLeft}</strong> defeats <strong>${playerRight}</strong>`;
  } else {
    return `<strong>${playerRight}</strong> defeats <strong>${playerLeft}</strong>`;
  }
}



/* IMMEDIATE EXECUTES - BUILD TWO POKEMON FROM NETWORK REQS ASAP */
game.pokemonBuffer.push(buildAPokemon());
game.pokemonBuffer.push(buildAPokemon());
