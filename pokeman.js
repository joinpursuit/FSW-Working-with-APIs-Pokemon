document.addEventListener('DOMContentLoaded', () => {
    let button1 = document.querySelector('getPoke');
    button1.addEventListener('click', getPokemon);
    let button2 = document.querySelector('battlePoke');
    button2.addEventListener('click', battlePokemon);
})
let picture1 = document.createElement('img');
picture1.setAttribute('id', 'poke1');
let picture2 = document.createElement('img');
picture2.setAttribute('id', 'poke2');

const firstPokemon = async () => {
    let first = Math.floor(Math.random() * (807 - 0));
    console.log(first)
    let pokemon1 = `https://pokeapi.co/api/v2/pokemon/${first}`;
    let div1 = document.querySelector('div')


    await axios.get(pokemon1).then((response) => {
        try {
            let pokemon1 = response.data;
            console.log(pokemon1.name, pokemon1.moves[0].move.name, pokemon1.moves[1].move.name, pokemon1.moves[2].move.name, pokemon1.moves[3].move.name);

            let data = document.querySelector('data1');

            if (!data) {
                let data1 = document.createElement('div');
                data1.setAttribute('id', 'data1');
                div1.appendChild(data1)
                pic1.src = `${pokemon1.sprites.front_shiny}`;
                let moves = pokemon1.moves;
                data1.appendChild(picture1);

                let name1 = document.createElement('h3');
                name1.innerText = pokemon1.name;
                data1.appendChild(name1);

                div1.appendChild(data1)
                for (i = 0; i < 4; i++) {
                    let move = document.createElement('p'); 0
                    move.innerText = `${moves[i].move.name} PP: `;
                    data1.appendChild(move);
                    let moveURL = moves[i].move.url;
                    axios.get(moveURL).then((response) => {
                        let eachMove = document.createElement('p');
                        eachMove.setAttribute('class', 'power')
                        eachMove.innerText = `   ${response.data.pp}`;
                        move.appendChild(eachMove)
                        console.log(eachMove)
                    })

                }


            } else {
                newData1 = document.createElement('div');
                newData1.setAttribute('id', 'data1');
                data1.parentNode.replaceChild(newData1, data1)

                picture1.src = `${pokemon1.sprites.front_shiny}`;
                let moves = pokemon1.moves;
                newData1.appendChild(picture1);

                let name1 = document.createElement('h3');
                name1.innerText = pokemon1.name;
                newData1.appendChild(name1);

                div1.appendChild(data1)
                for (i = 0; i < 4; i++) {
                    let move = document.createElement('p');
                    move.innerText = `${moves[i].move.name} PP: `;
                    newData1.appendChild(move);
                    let moveURL = moves[i].move.url;
                    axios.get(moveURL).then((response) => {
                        let eachMove = document.createElement('p');
                        eachMove.setAttribute('class', 'power')
                        eachMove.innerText = `   ${response.data.pp}`;
                        move.appendChild(eachMove)
                        console.log(eachMove)
                    })
                }
            }
        } catch (err) {
            console.log('pokemon not found please try again', err);
        }
    })
}


const secondPokemon = async () => {

    let second = Math.floor(Math.random() * (807 - 0));
    console.log(second)
    let pokemon2 = `https://pokeapi.co/api/v2/pokemon/${second}`;
    let div2 = document.querySelector('div')

    await axios.get(pokemon2).then((response) => {
        try {
            let pokemon2 = response.data;
            console.log(pokemon2.name, pokemon2.moves[0].move.name, pokemon2.moves[1].move.name, pokemon2.moves[2].move.name, pokemon2.moves[3].move.name);

            let data = document.querySelector('#data2');

            if (!data) {
                let data2 = document.createElement('div');
                data2.setAttribute('id', 'data2');
                div2.appendChild(data2)
                picture2.src = `${pokemon2.sprites.front_shiny}`;
                let moves = pokemon2.moves;
                data2.appendChild(picture2);

                let name2 = document.createElement('h3');
                name2.innerText = pokemon2.name;
                data2.appendChild(name2);
                console.log(pokemon2)
                div2.appendChild(data2)
                for (i = 0; i < 4; i++) {
                    let move = document.createElement('p');
                    move.innerText = `${moves[i].move.name} PP: `;
                    data2.appendChild(move);

                    let moveURL = moves[i].move.url;
                    axios.get(moveURL).then((response) => {
                        let eachMove = document.createElement('p');
                        eachMove.setAttribute('class', 'power')
                        eachMove.innerText = `   ${response.data.pp}`;
                        move.appendChild(eachMove)
                        console.log(eachMove)
                    })

                }

            } else {
                newData2 = document.createElement('div');
                newData2.setAttribute('id', 'data2');
                data2.parentNode.replaceChild(newData2, data2)

                picture2.src = `${pokemon2.sprites.front_shiny}`;
                let moves = pokemon2.moves;
                newData2.appendChild(picture2);

                let name2 = document.createElement('h3');
                name2.innerText = pokemon2.name;
                newData2.appendChild(name2);

                div2.appendChild(data2)
                for (i = 0; i < 4; i++) {
                    let move = document.createElement('p');
                    move.innerText = `${moves[i].move.name} PP: `;
                    newData2.appendChild(move);
                    let moveURL = moves[i].move.url;
                    axios.get(moveURL).then((response) => {
                        let eachMove = document.createElement('p');
                        eachMove.setAttribute('class', 'power')
                        eachMove.innerText = `   ${response.data.pp}`;
                        move.appendChild(eachMove)
                        console.log(eachMove)
                    })

                }
            }
        } catch (err) {
            console.log('pokemon not found, please try again', err);
        }
    })
}

// const getPokemon = () => {
//     let min = 0;
//     let max = 965;
//     let first = Math.floor(Math.random() * (max - min) + min);
//     let second = Math.floor(Math.random() * (max - min) + min);
//     let pokemon1 = 'https://pokeapi.co/api/v2/pokemon/?limit=807';
//     let pokemon2 = 'https://pokeapi.co/api/v2/pokemon/?limit=807';
//     console.log(first, second);
//     axios.get(p1).then((response) => {
//         let pokemon1 = response.data.results[first];
//         console.log(pokemon1)
//     }).catch(err => {
//         console.log('pokemon not found, press again', err)

//     });
// }
//     let newPokemon = document.createElement('startPokemon')
//     if (document.querySelector('name')) {
//         let nextPokemon = document.querySelector('name');
//         console.log(nextPokemon);

//     }
//     document.body.replaceChild(nextPokemon, newPokemon)
//     newPokemon.src = names
// }


// const fetchPokemon = () => {

//     fetch("https://pokeapi.co/docs/v2.html/#pokemon")
//         .then(response => {
//             return response.json();
//         })
//         .then(names => {
//             displayPokemon(names)
//         })
//         .catch(err => {
//             console.log("Not found", err)
//         })

//     displayPokemon = (names) => {
//         let pokemonGet = document.querySelector('GetPoke');
//         for (let name of names) {
//             let PokemonBattle = document.createElement('Battle')
//             PokemonBattle.innerText = name.url
//             pokemonGet.appendChild(PokemonBattle)
//         }
//     }
// }
const battlePokemon = (names) => {
    fetch('https://pokeapi.co/docs/v2.html/#moves')
        .then(response => {
            return response.json();
        })
    then(names => {
        displayPokemon(names)
    })
        .catch(err => {
            console.log('not found, please try again', err)
        })
    document.body.appendChild(fetchPokemon)
    fetchPokemon.src = names
}