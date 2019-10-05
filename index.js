let apiUrl = 'https://pokeapi.co'
let pokemonLost = true;

document.addEventListener('DOMContentLoaded', () => {
	let pokemonGrabber = document.querySelector('#get-pokemon');
	let battleButton = document.querySelector('#battle');
	setTimeout(playMusic, 5000);
	pokemonGrabber.addEventListener('click', createBattleScene);
	battleButton.addEventListener('click', battlePokemon);

})

async function playMusic(){
	try{
	let music = document.querySelector('audio');
	await music.play();
	}
	catch(err){
		console.log(err.message);
	}
}

async function getPokemonFromOnline(){
	let pokeNum1 = Math.floor(Math.random() * 807) + 1;
	let pokeNum2 = Math.floor(Math.random() * 807) + 1;
	while(pokeNum1 === pokeNum2){
		pokeNum2 = Math.floor(Math.random() * 807) + 1;
	}

	let pokeData1 = await axios.get(`${apiUrl}/api/v2/pokemon/${pokeNum1}/`);
	let pokeData2 = await axios.get(`${apiUrl}/api/v2/pokemon/${pokeNum2}/`);
	pokemonLost = false;
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
		baseHP.classList.add('baseHP');
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
			let moveInfo = document.createElement('p');
			moveInfo.innerText = `${pokemon.data.moves[newMoveNum].move.name}`;
			moveInfo.classList.add('moveInfo');
			let pp = document.createElement('p');
			pp.innerText = `PP:${moveData.data.pp}`;
			pp.classList.add('ppclass');
			newMove.appendChild(moveInfo);
			newMove.appendChild(pp);
			movesList.appendChild(newMove);
			assignedMoves.push(newMoveNum);
		}
	}
	return movesList;
}

function battlePokemon(){
	if(!pokemonLost){
		let battleHistory = document.querySelector('.battleHistory');
		let randomAttacker = Math.floor(Math.random() * 2);
		let attackingPokemon;
		let defendingPokemon;
		if(randomAttacker === 0){
			attackingPokemon = document.querySelector('.pokeCard1');
			defendingPokemon = document.querySelector('.pokeCard2');
		}
		else{
			attackingPokemon = document.querySelector('.pokeCard2');
			defendingPokemon = document.querySelector('.pokeCard1');
		}
		//This goes through the amount of list items in the pokecard selected and takes a random move
		let randomMove = Math.floor(Math.random() * attackingPokemon.querySelector('ul').getElementsByTagName('li').length);
		let attackingMovePP = parseInt(attackingPokemon.querySelector('ul').getElementsByTagName('li')[randomMove].querySelector('.ppclass').innerText.slice(3));
		let summary = document.createElement('ul');
		let attack = document.createElement('li');
		attack.innerText = `${attackingPokemon.firstElementChild.innerText} used ${attackingPokemon.querySelector('ul').getElementsByTagName('li')[randomMove].querySelector('.moveInfo').innerText}`;
		summary.appendChild(attack);
		let defendingPokemonHP = parseInt(defendingPokemon.querySelector('.baseHP').innerText) - attackingMovePP;
		if(defendingPokemonHP <= 0){
			let superEffective = document.createElement('p');
			superEffective.innerText = 'It was super effective!!!';
			let defeated = document.createElement('p');
			let sprite = defendingPokemon.querySelector('img');
			sprite.src = 'https://cdn.pixabay.com/photo/2013/07/12/12/57/red-146613_960_720.png';
			defeated.innerText = `${attackingPokemon.firstElementChild.innerText} defeated ${defendingPokemon.firstElementChild.innerText}`;
			summary.appendChild(superEffective);
			summary.appendChild(defeated);
			pokemonLost = true;
		};
		defendingPokemon.querySelector('.baseHP').innerText = defendingPokemonHP;
		battleHistory.appendChild(summary);	
	}


	//when back, finish the rest of the logic for the battle scene of pokemon

	// added a class to the pokecards so that you can target them here in the battlepokemon function
//when you come back, finish the randomized battlepokemon function, then add css styles to make it look nice
//then if you have time finish up with the bonus stuff
}

// when back, start working on getting the data from the server
//When back, work on storing the pokemon on the screen
//when back finish making a special function for the moves