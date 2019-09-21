document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('get').addEventListener('click', getPokes)
  document.getElementById('battle').addEventListener('click', battle)
})

const getPokes = () => {
  let div1 = document.getElementById('pokemon1')
  let div2 = document.getElementById('pokemon2')
  div1.innerText = ''
  div2.innerText = ''
  let id1 = Math.floor(Math.random()*80.9)
  let url1 = "https://pokeapi.co/api/v2/pokemon/" + id1
  let id2 = Math.floor(Math.random()*80.9)
  let url2 = "https://pokeapi.co/api/v2/pokemon/" + id2

  fetch(url1)
  .then(response => {
    return response.json()
  })
  .then(poke1 => {
    console.log(poke1)
    let pokemon1 = document.getElementById('pokemon1')
    let name1 = document.createElement('h3')
    name1.id = 'poke1'
    name1.innerText = poke1.name
    let sprite1 = document.createElement('img')
    sprite1.src = poke1.sprites.front_default
    let hp1 = document.createElement('h4')
    hp1.innerText = "HP: " + poke1.stats[5].base_stat
    let moves = document.createElement('h4')
    moves.innerText = "Moves:"
    pokemon1.appendChild(name1)
    pokemon1.appendChild(sprite1)
    pokemon1.appendChild(hp1)
    pokemon1.appendChild(moves)
    return poke1.moves
  })
  .then(moves => {
    fetch("https://pokeapi.co/api/v2/move/" + moves[0].move.name)
    .then(response => {
      return response.json()
    })
    .then(move => {
      let move1 = document.createElement('h4')
      move1.innerText = move.name + " PP: " + move.pp
      pokemon1.appendChild(move1)
      return moves
    })
  .then(moves => {
    fetch("https://pokeapi.co/api/v2/move/" + moves[1].move.name)
    .then(response => {
      return response.json()
    })
    .then(move => {
      let move2 = document.createElement('h4')
      move2.innerText = move.name + " PP: " + move.pp
      pokemon1.appendChild(move2)
      return moves
    })
  .then(moves => {
    fetch("https://pokeapi.co/api/v2/move/" + moves[2].move.name)
    .then(response => {
      return response.json()
    })
    .then(move => {
      let move3 = document.createElement('h4')
      move3.innerText = move.name + " PP: " + move.pp
      pokemon1.appendChild(move3)
      return moves
    })
  .then(moves => {
    fetch("https://pokeapi.co/api/v2/move/" + moves[3].move.name)
    .then(response => {
      return response.json()
    })
    .then(move => {
      let move4 = document.createElement('h4')
      move4.innerText = move.name + " PP: " + move.pp
      pokemon1.appendChild(move4)
    })
})
})
})
})
  fetch(url2)
  .then(response => {
    return response.json()
  })
  .then(poke2 => {
    console.log(poke2)
    let pokemon2 = document.getElementById('pokemon2')
    let name2 = document.createElement('h3')
    name2.id = 'poke2'
    name2.innerText = poke2.name
    let sprite2 = document.createElement('img')
    sprite2.src = poke2.sprites.front_default
    let hp2 = document.createElement('h4')
    hp2.innerText = "HP: " + poke2.stats[5].base_stat
    let moves = document.createElement('h4')
    moves.innerText = "Moves:"
    let move1 = document.createElement('h4')
    let move2 = document.createElement('h4')
    let move3 = document.createElement('h4')
    let move4 = document.createElement('h4')
    pokemon2.appendChild(name2)
    pokemon2.appendChild(sprite2)
    pokemon2.appendChild(hp2)
    pokemon2.appendChild(moves)
    return poke2.moves
  })
  .then(moves => {
    fetch("https://pokeapi.co/api/v2/move/" + moves[0].move.name)
    .then(response => {
      return response.json()
    })
    .then(move => {
      let move1 = document.createElement('h4')
      move1.innerText = move.name + " PP: " + move.pp
      pokemon2.appendChild(move1)
      return moves
    })
  .then(moves => {
    fetch("https://pokeapi.co/api/v2/move/" + moves[1].move.name)
    .then(response => {
      return response.json()
    })
    .then(move => {
      let move2 = document.createElement('h4')
      move2.innerText = move.name + " PP: " + move.pp
      pokemon2.appendChild(move2)
      return moves
    })
  .then(moves => {
    fetch("https://pokeapi.co/api/v2/move/" + moves[2].move.name)
    .then(response => {
      return response.json()
    })
    .then(move => {
      let move3 = document.createElement('h4')
      move3.innerText = move.name + " PP: " + move.pp
      pokemon2.appendChild(move3)
      return moves
    })
  .then(moves => {
    fetch("https://pokeapi.co/api/v2/move/" + moves[3].move.name)
    .then(response => {
      return response.json()
    })
    .then(move => {
      let move4 = document.createElement('h4')
      move4.innerText = move.name + " PP: " + move.pp
      pokemon2.appendChild(move4)
    })
})
})
})
})
}

const battle = () => {
  let history = document.getElementById('history')
  let result = Math.random()
  let poke1 = document.getElementById('poke1')
  let poke2 = document.getElementById('poke2')
  if (result > 0.5) {
    let entry = document.createElement('h4')
    entry.innerText = poke1.innerText + " beats " + poke2.innerText
    history.appendChild(entry)
  } else {
    let entry = document.createElement('h4')
    entry.innerText = poke2.innerText + " beats " + poke1.innerText
    history.appendChild(entry)
  }
}
