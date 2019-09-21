document.addEventListener("DOMContentLoaded", () => {
    let gettingPokemon = document.querySelector('#get-pokemon')
    gettingPokemon.addEventListener('click', summonPokemon)
    let battle = document.querySelector('#battle-time')
    battle.addEventListener('click', pokemonBattle)
})

function movePP (moveName, moveNum, currentPokemon) {
    //this endpoint gives move and its PP
    fetch('https://pokeapi.co/api/v2/move/' + moveName + '/')
    .then((response) => {
        return response.json();
    })
    .then(data => {
        // console.log("Move:", data.name)
        // console.log("PP Expectation:", data.pp) //return this
        // console.log(moveName, "PP: ", data.pp);
        let pokemonData = document.querySelector('#poke' + currentPokemon + 'move' + moveNum);
        let pokemonMove = document.createElement('p')

        pokemonMove.innerText = moveName, "PP: ", data.pp;
        pokemonMove.id = 'poke' + currentPokemon + 'move' + moveNum;

        pokemonData.parentNode.replaceChild(pokemonMove, pokemonData)
        // pokemonData.appendChild(pokemonMove);
        // console.log("Finished");
        // pokemonData.parentNode.replaceChild(pokemonMove, pokemonData)
    })
}
//figure out how to append these moves on to the DOM and get the rest of the
//data also

function summonPokemon () {
    console.log("Pokemon Summoned")
    let pokemonOne = Math.floor(Math.random() * 809);
    let pokemonTwo = Math.floor(Math.random() * 809);

    //pokemon one endpoints
    //This endpoint gets name and base hp
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonOne + '/')
    .then((response) => {
        return response.json();
    })
    .then(data => {
        // console.log("Poke Name:", data.name)
        // console.log("Stat Name", data.stats[5].stat.name)
        // console.log("HP: ", data.stats[5].base_stat)
        // console.log("Move Name", data.moves[randomMove].move.name)

        //print name and HP
        let nameHolder = document.querySelector('#poke1Name');
        let hpHolder = document.querySelector('#poke1HP');
        let spriteHolder = document.querySelector('#poke1Img');
        // let moveHolder = document.querySelector('#moveTitle');

        let pokemonName = document.createElement('h1');
        let pokemonHP = document.createElement('span');
        let pokemonSprite = document.createElement('img');
        // let move = document.createElement('p');

        pokemonName.innerText = data.name.toUpperCase();
        pokemonName.id = 'poke1Name';
        pokemonHP.innerText = "HP: " + data.stats[5].base_stat;
        pokemonHP.id = 'poke1HP';
        pokemonSprite.src = data.sprites.front_shiny;
        pokemonSprite.id = 'poke1Img';
        // move.innerText = 'Attacks:';
        // move.id = 'moveTitle';

        nameHolder.parentNode.replaceChild(pokemonName, nameHolder);
        hpHolder.parentNode.replaceChild(pokemonHP, hpHolder);
        spriteHolder.parentNode.replaceChild(pokemonSprite, spriteHolder);
        // moveHolder.parentNode.replaceChild(move, moveHolder);

        //print 4 moves
        for (let i = 1; i <= 4; i++) {
            let randomMove = Math.floor(Math.random() * data.moves.length);
            movePP(data.moves[randomMove].move.name, i, 1)
        }
    })

    //pokemon two endpoints
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonTwo + '/')
    .then((response) => {
        return response.json();
    })
    .then(data => {
        // console.log("Poke Name:", data.name)
        // console.log("Stat Name", data.stats[5].stat.name)
        // console.log("HP: ", data.stats[5].base_stat)
        // console.log("Move Name", data.moves[randomMove].move.name)

        //print name and HP
        let nameHolder = document.querySelector('#poke2Name');
        let hpHolder = document.querySelector('#poke2HP');
        let spriteHolder = document.querySelector('#poke2Img');
        let moveHolder = document.querySelector('#moveTitle2');

        let pokemonName = document.createElement('h1');
        let pokemonHP = document.createElement('span');
        let pokemonSprite = document.createElement('img');
        // let move = document.createElement('h4');

        pokemonName.innerText = data.name.toUpperCase();
        pokemonName.id = 'poke2Name';
        pokemonHP.innerText = "HP: " + data.stats[5].base_stat;
        pokemonHP.id = 'poke2HP';
        pokemonSprite.src = data.sprites.front_shiny;
        pokemonSprite.id = 'poke2Img';
        // move.innerText = 'Attacks:';
        // move.id = 'moveTitle';

        nameHolder.parentNode.replaceChild(pokemonName, nameHolder);
        hpHolder.parentNode.replaceChild(pokemonHP, hpHolder);
        spriteHolder.parentNode.replaceChild(pokemonSprite, spriteHolder);
        // moveHolder.parentNode.replaceChild(move, moveHolder);

        //print 4 Moves
        for (let i = 1; i <= 4; i++) {
            let randomMove = Math.floor(Math.random() * data.moves.length);
            movePP(data.moves[randomMove].move.name, i, 2)
        }
    })

}

function pokemonBattle () {
    let nameHolder1 = document.querySelector('#poke1Name');
    let nameHolder2 = document.querySelector('#poke2Name');
    let historyHolder = document.querySelector('#history');

    let pokemonName = document.createElement('p');

    let outcome = Math.floor(Math.random() * 2);

    if (outcome === 1) {
        pokemonName.innerText = nameHolder1.innerText + " defeated " + nameHolder2.innerText;
    } else {
        pokemonName.innerText = nameHolder2.innerText + " defeated " + nameHolder1.innerText;
    }
    pokemonName.id = 'history';

    historyHolder.parentNode.replaceChild(pokemonName, historyHolder);
}