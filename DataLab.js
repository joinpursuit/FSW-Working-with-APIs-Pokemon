document.addEventListener('DOMContentLoaded', () => {
    typeWriter();

    let button = document.querySelector('#get');
    button.addEventListener('click', get2Pokemon);
    let button2 = document.querySelector('#battle');
    button2.addEventListener('click', battlePokemon);

})

//make directions to load like a typewriter

let txt = 'Click "Get Pokémon" to display your fighters. Click "Battle" to start the battle.';
let speed = 30;
let i = 0;
let directions = document.createElement('p');

function typeWriter() {
    let instructions = document.querySelector('#instructions');
    let text = "";
    if (i < txt.length) {
        text += txt.charAt(i);
        directions.innerHTML += text;
        i++;
        setTimeout(typeWriter, speed);
    }
    instructions.appendChild(directions);

}


const colortypes = {
    fire: 'orangered',
    water: 'lightskyblue',
    grass: 'greenyellow',
    electric: 'yellow',
    psychic: 'lightcoral',
    steel: 'silver',
    bug: 'rgb(175, 255, 175)',
    fairy: 'pink',
    dark: 'darkgoldenrod',
    flying: 'lavender',
    ghost: 'orchid',
    poison: 'magenta',
    ice: 'lightcyan',
    ground: 'beige',
    rock: 'palegoldenrod',
    dragon: 'plum',
    fighting: 'palevioletred',
    normal: 'olivedrab',

}


const firstPokemon = async () => {
    let pic1 = document.createElement('img');
    pic1.setAttribute('id', 'poke1');
    let first = Math.floor(Math.random() * (810 - 1) + 1);
    let p1 = `https://pokeapi.co/api/v2/pokemon/${first}`;
    let div = document.querySelector('.data');

    await axios.get(p1).then((response) => {
        try {
            let pokemon1 = response.data;
            let data = document.querySelector('#pokeCard1');

            if (!data) {
                let pokeCard1 = document.createElement('div');
                pokeCard1.setAttribute('id', 'pokeCard1')
                div.appendChild(pokeCard1)

                let type = pokemon1.types[0].type.name;
                console.log(type)
                pokeCard1.style.backgroundColor = colortypes[type];

                let typeName = document.createElement('h3');
                typeName.innerText = `${pokemon1.types[0].type.name} `;
                typeName.setAttribute('class', 'type1');
                pokeCard1.appendChild(typeName)

                let name1 = document.createElement('h2');
                name1.innerText = pokemon1.name;
                name1.setAttribute('id', 'name1');
                pokeCard1.appendChild(name1);
                div.appendChild(pokeCard1)

                let hp1 = document.createElement('p');
                hp1.innerText = `HP: ${pokemon1.stats[5].base_stat}`;
                hp1.setAttribute('id', 'hp1')
                pokeCard1.appendChild(hp1);

                pic1.src = `${pokemon1.sprites.front_shiny}`;
                let moves = pokemon1.moves;
                pokeCard1.appendChild(pic1);





                for (i = 0; i < 4; i++) {
                    let move = document.createElement('p');
                    move.setAttribute('id', 'move')
                    move.innerText = `${moves[i].move.name}`;
                    pokeCard1.appendChild(move);
                    let moveURL = moves[i].move.url;
                    axios.get(moveURL).then((response) => {
                        let eachMove = document.createElement('p');
                        eachMove.setAttribute('class', 'power')
                        eachMove.innerText = `PP: ${response.data.pp}`;
                        move.appendChild(eachMove)
                    })

                }


            } else {
                newPokeCard1 = document.createElement('div');
                newPokeCard1.setAttribute('id', 'pokeCard1');
                pokeCard1.parentNode.replaceChild(newPokeCard1, pokeCard1)

                let type = pokemon1.types[0].type.name;
                newPokeCard1.style.backgroundColor = colortypes[type];
                console.log(type)

                let newTypeName = document.createElement('h3');
                newTypeName.innerText = `${pokemon1.types[0].type.name} `;
                newTypeName.setAttribute('class', 'type1');
                newPokeCard1.appendChild(newTypeName)

                let name1 = document.createElement('h2');
                name1.innerText = pokemon1.name;
                name1.setAttribute('id', 'name1');
                newPokeCard1.appendChild(name1);
                div.appendChild(pokeCard1);

                let hp1 = document.createElement('p');
                hp1.innerText = `HP: ${pokemon1.stats[5].base_stat}`;
                hp1.setAttribute('id', 'hp1')
                newPokeCard1.appendChild(hp1);

                pic1.src = `${pokemon1.sprites.front_shiny}`;
                let moves = pokemon1.moves;
                newPokeCard1.appendChild(pic1);





                for (i = 0; i < 4; i++) {
                    let move = document.createElement('p');
                    move.innerText = `${moves[i].move.name}`;
                    move.setAttribute('id', 'move')
                    newPokeCard1.appendChild(move);
                    let moveURL = moves[i].move.url;
                    axios.get(moveURL).then((response) => {
                        let eachMove = document.createElement('p');
                        eachMove.setAttribute('class', 'power')
                        eachMove.innerText = ` PP: ${response.data.pp}`;
                        move.appendChild(eachMove)
                    })
                }
            }
        } catch (err) {
            console.log('oops, there was an error. please try again', err);
        }
    })
}


const secondPokemon = async () => {
    let pic2 = document.createElement('img');
    pic2.setAttribute('id', 'poke2');
    let second = Math.floor(Math.random() * (810 - 1) + 1);
    console.log(second)
    let p2 = `https://pokeapi.co/api/v2/pokemon/${second}`;
    let div = document.querySelector('.data')

    await axios.get(p2).then((response) => {
        try {
            let pokemon2 = response.data;
            let data = document.querySelector('#pokeCard2');

            if (!data) {
                let pokeCard2 = document.createElement('div');
                pokeCard2.setAttribute('id', 'pokeCard2');
                div.appendChild(pokeCard2)

                let type = pokemon2.types[0].type.name;
                console.log(type)
                pokeCard2.style.backgroundColor = colortypes[type];

                let typeName = document.createElement('h3');
                typeName.innerText = pokemon2.types[0].type.name;
                typeName.setAttribute('class', 'type2');
                pokeCard2.appendChild(typeName)

                let name2 = document.createElement('h2');
                name2.setAttribute('id', 'name2');
                name2.innerText = `${pokemon2.name} `;
                pokeCard2.appendChild(name2);

                div.appendChild(pokeCard2)
                let hp2 = document.createElement('p');
                hp2.innerText = `HP: ${pokemon2.stats[5].base_stat}`;
                hp2.setAttribute('id', 'hp2')
                pokeCard2.appendChild(hp2);


                pic2.src = `${pokemon2.sprites.front_shiny}`;
                let moves = pokemon2.moves;
                pokeCard2.appendChild(pic2);





                for (i = 0; i < 4; i++) {
                    let move = document.createElement('p');
                    move.innerText = `${moves[i].move.name}`;
                    move.setAttribute('id', 'move')
                    pokeCard2.appendChild(move);

                    let moveURL = moves[i].move.url;
                    axios.get(moveURL).then((response) => {
                        let eachMove = document.createElement('p');
                        eachMove.setAttribute('class', 'power')
                        eachMove.innerText = `PP: ${response.data.pp}`;
                        move.appendChild(eachMove)
                        console.log(eachMove)
                    })

                }

            } else {
                newPokeCard2 = document.createElement('div');
                newPokeCard2.setAttribute('id', 'pokeCard2');
                pokeCard2.parentNode.replaceChild(newPokeCard2, pokeCard2)

                let type = pokemon2.types[0].type.name;
                console.log(type)
                newPokeCard2.style.backgroundColor = colortypes[type];
                div.appendChild(newPokeCard2)

                let newTypeName = document.createElement('h3');
                newTypeName.innerText = `${pokemon2.types[0].type.name} `;
                newTypeName.setAttribute('class', 'type2');
                newPokeCard2.appendChild(newTypeName)

                let name2 = document.createElement('h2');
                name2.innerText = pokemon2.name;
                name2.setAttribute('id', 'name2');
                newPokeCard2.appendChild(name2);

                let hp2 = document.createElement('p');
                hp2.innerText = `HP: ${pokemon2.stats[5].base_stat}`;
                hp2.setAttribute('id', 'hp2')
                newPokeCard2.appendChild(hp2);


                pic2.src = `${pokemon2.sprites.front_shiny}`;
                let moves = pokemon2.moves;
                newPokeCard2.appendChild(pic2);





                for (i = 0; i < 4; i++) {
                    let move = document.createElement('p');
                    move.innerText = `${moves[i].move.name}`;
                    move.setAttribute('id', 'move')
                    newPokeCard2.appendChild(move);
                    let moveURL = moves[i].move.url;
                    axios.get(moveURL).then((response) => {
                        let eachMove = document.createElement('p');
                        eachMove.setAttribute('class', 'power')
                        eachMove.innerText = ` PP: ${response.data.pp}`;
                        move.appendChild(eachMove)
                    })
                }
            }
        } catch (err) {
            console.log('oops, there was an error. please try again', err);
        }
    })
}

const get2Pokemon = () => {
    firstPokemon();
    secondPokemon();
    let audio = document.querySelector('audio');
    audio.play();
    hideMysteryPokemon();
}




const battlePokemon = () => {
    let num = Math.floor(Math.random() * 2);
    console.log(num)
    let firstPokemon = document.querySelector('#name1').innerText;
    let secondPokemon = document.querySelector('#name2').innerText;
    let totalHistory = document.querySelector('.battleHistory');
    let win = document.createElement('p');
    totalHistory.appendChild(win)
    
    if (num === 0) {

        win.innerText = `${firstPokemon} defeats ${secondPokemon}!`;
        totalHistory.replaceChild(win);

    } else {
        win.innerText = `${secondPokemon} defeats ${firstPokemon}!`;
        totalHistory.replaceChild(win, win);
    }

}

const hideMysteryPokemon = () => {
    let mysteryCard1 = document.querySelector('#load1')
    let mysteryCard2 = document.querySelector('#load2')
    mysteryCard1.style.display = 'none'
    mysteryCard2.style.display = 'none'
}