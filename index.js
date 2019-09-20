let apiUrl = 'https://pokeapi.co'

document.addEventListener('DOMContentLoaded', () => {
	let pokemonGrabber = document.querySelector('#get-pokemon');
	pokemonGrabber.addEventListener('click', createBattleScene);
})

async function getPokemonFromOnline(){
	let pokeNum1 = Math.floor(Math.random() * 809) + 1;
	let pokeNum2 = Math.floor(Math.random() * 809) + 1;
	while(pokeNum1 === pokeNum2){
		pokeNum2 = Math.floor(Math.random() * 809) + 1;
	}

	let pokeData1 = await axios.get(`${apiUrl}/api/v2/pokemon/${pokeNum1}/`);
	let pokeData2 = await axios.get(`${apiUrl}/api/v2/pokemon/${pokeNum2}/`);
	return [pokeData1, pokeData2];
}


async function createBattleScene(){
	let pokemon = await getPokemonFromOnline();
	console.log(pokemon[0]);
	for(let i = 0; i < pokemon.length; i++){
		let pokeName = document.createElement('p');
		pokeName.innerText = pokemon[i].data.species.name;
		let pokeImg = document.createElement('img');
		pokeImg.src = pokemon[i].data.sprites.front_shiny;
		let baseHP = document.createElement('p');
		baseHP.innerText = pokemon[i].data.stats[5].base_stat;	
	}
}

function makeMovesList(pokemon){
	let movesList = document.createElement('ul');
}

// when back, start working on getting the data from the server
//When back, work on storing the pokemon on the screen
//when back finish making a special function for the moves