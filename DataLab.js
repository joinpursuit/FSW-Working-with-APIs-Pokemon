document.addEventListener('DOMContentLoaded', () => {
    let button = document.querySelector('#get');
    button.addEventListener('click', get2Pokemon);
    let button2 = document.querySelector('#battle');
    button2.addEventListener('click', battlePokemon);
})

let pic1 = document.createElement('img');
pic1.setAttribute('id', 'poke1');
let pic2 = document.createElement('img');
pic2.setAttribute('id', 'poke2');

const firstPokemon = async () => {
    let first = Math.floor(Math.random() * (810 - 1) + 1);
    console.log(first)
    let p1 = `https://pokeapi.co/api/v2/pokemon/${first}`;
    let div1 = document.querySelector('div')


    await axios.get(p1).then((response) => {
        try {
            let pokemon1 = response.data;

            let data = document.querySelector('#data1');

            if (!data) {
                let data1 = document.createElement('div');
                data1.setAttribute('id', 'data1');
                div1.appendChild(data1)
                pic1.src = `${pokemon1.sprites.front_shiny}`;
                let moves = pokemon1.moves;
                data1.appendChild(pic1);

                let name1 = document.createElement('h3');
                name1.innerText = pokemon1.name;
                name1.setAttribute('id', 'name1');
                data1.appendChild(name1);
                div1.appendChild(data1)

                let hp1 = document.createElement('p');
                hp1.innerText = `HP: ${pokemon1.stats[5].base_stat}`;
                data1.appendChild(hp1);

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

                pic1.src = `${pokemon1.sprites.front_shiny}`;
                let moves = pokemon1.moves;
                newData1.appendChild(pic1);

                let name1 = document.createElement('h3');
                name1.innerText = pokemon1.name;
                name1.setAttribute('id', 'name1');
                newData1.appendChild(name1);
                div1.appendChild(data1)

                let hp1 = document.createElement('p');
                hp1.innerText = `HP: ${pokemon1.stats[5].base_stat}`;
                newData1.appendChild(hp1);

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
            console.log('oops, there was an error. please try again', err);
        }
    })
}


const secondPokemon = async () => {

    let second = Math.floor(Math.random() * (810 - 1) + 1);
    console.log(second)
    let p2 = `https://pokeapi.co/api/v2/pokemon/${second}`;
    let div2 = document.querySelector('div')

    await axios.get(p2).then((response) => {
        try {
            let pokemon2 = response.data;
            console.log(pokemon2.name, pokemon2.moves[0].move.name, pokemon2.moves[1].move.name, pokemon2.moves[2].move.name, pokemon2.moves[3].move.name);

            let data = document.querySelector('#data2');

            if (!data) {
                let data2 = document.createElement('div');
                data2.setAttribute('id', 'data2');
                div2.appendChild(data2)
                pic2.src = `${pokemon2.sprites.front_shiny}`;
                let moves = pokemon2.moves;
                data2.appendChild(pic2);

                let name2 = document.createElement('h3');
                name2.setAttribute('id', 'name2');
                name2.innerText = pokemon2.name;
                data2.appendChild(name2);
                console.log(pokemon2)
                div2.appendChild(data2)

                let hp2 = document.createElement('p');
                hp2.innerText = `HP: ${pokemon2.stats[5].base_stat}`;
                data2.appendChild(hp2);

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

                pic2.src = `${pokemon2.sprites.front_shiny}`;
                let moves = pokemon2.moves;
                newData2.appendChild(pic2);

                let name2 = document.createElement('h3');
                name2.innerText = pokemon2.name;
                name2.setAttribute('id', 'name2');
                newData2.appendChild(name2);
                div2.appendChild(data2)

                let hp2 = document.createElement('p');
                hp2.innerText = `HP: ${pokemon2.stats[5].base_stat}`;
                newData2.appendChild(hp2);

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
            console.log('oops, there was an error. please try again', err);
        }
    })
}

const get2Pokemon = () => {
    firstPokemon();
    secondPokemon();
}


const battlePokemon = () => {
    let num = Math.floor(Math.random() * 2);
    console.log(num)
    let firstPokemon = document.querySelector('#name1').innerText;
    let secondPokemon = document.querySelector('#name2').innerText;
    let totalHistory = document.querySelector('.battleHistory');

    if (num === 0) {
        let win1 = document.createElement('p');
        win1.innerText = `${firstPokemon} defeats ${secondPokemon}!`;
        totalHistory.appendChild(win1);

     } else{
         let win2 = document.createElement('p');
         win2.innerText = `${secondPokemon} defeats ${firstPokemon}!`;
         totalHistory.appendChild(win2);
     }

}


       
