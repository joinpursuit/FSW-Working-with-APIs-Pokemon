let apiUrl = 'https://pokeapi.co'

document.addEventListener('DOMContentLoaded', () => {
	let pokemonGrabber = document.querySelector('#get-pokemon');
	let battleButton = document.querySelector('#battle');
	pokemonGrabber.addEventListener('click', createBattleScene);
	battleButton.addEventListener('click', battlePokemon);

})

async function getPokemonFromOnline(){
	let pokeNum1 = Math.floor(Math.random() * 807) + 1;
	let pokeNum2 = Math.floor(Math.random() * 807) + 1;
	while(pokeNum1 === pokeNum2){
		pokeNum2 = Math.floor(Math.random() * 807) + 1;
	}

	let pokeData1 = await axios.get(`${apiUrl}/api/v2/pokemon/${pokeNum1}/`);
	let pokeData2 = await axios.get(`${apiUrl}/api/v2/pokemon/${pokeNum2}/`);
	return [pokeData1, pokeData2];
}


async function createBattleScene(){
	let pokemon = await getPokemonFromOnline();
	let container = document.querySelector('.data');
	let child = container.lastElementChild;
	//this removes the previous pokemon from the data container
	while(child){
		container.removeChild(child);
		child = container.lastElementChild;
	}
	for(let i = 0; i < pokemon.length; i++){
		let pokeName = document.createElement('p');
		pokeName.innerText = pokemon[i].data.species.name;
		let pokeImg = document.createElement('img');
		pokeImg.src = pokemon[i].data.sprites.front_shiny;
		let baseHP = document.createElement('p');
		baseHP.innerText = pokemon[i].data.stats[5].base_stat;	
		let movesList = await makeMovesList(pokemon[i]);
		let pokeCard = document.createElement('div');
		pokeCard.classList.add(`pokeCard${i + 1}`);
		pokeCard.appendChild(pokeName);
		pokeCard.appendChild(pokeImg);
		pokeCard.appendChild(baseHP);
		pokeCard.appendChild(movesList);
		container.appendChild(pokeCard);
	}
}

async function makeMovesList(pokemon){
	let movesList = document.createElement('ul');
	let assignedMoves = [];
	if(pokemon.data.moves.length < 4){
		for(let i = 0; i < pokemon.data.moves.length; i++){
			let newMoveNum = Math.floor(Math.random() * pokemon.data.moves.length);
			while(assignedMoves.indexOf(newMoveNum) !== -1){
				newMoveNum = Math.floor(Math.random() * pokemon.data.moves.length);
			};
			let moveData = await axios.get(pokemon.data.moves[newMoveNum].move.url);
			let newMove = document.createElement('li');
			newMove.innerText =`${pokemon.data.moves[newMoveNum].move.name} PP: ${moveData.data.pp}`;
			movesList.appendChild(newMove);
			assignedMoves.push(newMoveNum);
		}
	}
	else{
		for(let i = 0; i < 4; i++){
			let newMoveNum = Math.floor(Math.random() * pokemon.data.moves.length);
			while(assignedMoves.indexOf(newMoveNum) !== -1){
				newMoveNum = Math.floor(Math.random() * pokemon.data.moves.length);
			};
			let moveData = await axios.get(pokemon.data.moves[newMoveNum].move.url);
			let newMove = document.createElement('li');
			newMove.innerText =`${pokemon.data.moves[newMoveNum].move.name} PP: ${moveData.data.pp}`;
			movesList.appendChild(newMove);
			assignedMoves.push(newMoveNum);
		}
	}
	return movesList;
}

function battlePokemon(){
// added a class to the pokecards so that you can target them here in the battlepokemon function
//when you come back, finish the randomized battlepokemon function, then add css styles to make it look nice
//then if you have time finish up with the bonus stuff
}

// when back, start working on getting the data from the server
//When back, work on storing the pokemon on the screen
//when back finish making a special function for the moves