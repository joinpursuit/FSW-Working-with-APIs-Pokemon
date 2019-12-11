document.addEventListener("DOMContentLoaded", () => {
    let battle = []
    let button = document.querySelector("#getPokemon")  
    button.addEventListener("click", () => {
        getPokemon()
        getPokemon2()
    })
    let battleButton = document.querySelector("#button")
    battleButton.addEventListener("click", () => {
        getWinner()
    })
})

const getPokemon = async () => {
    try {
        let pokeId = Math.floor(Math.random() * 807)
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
        let div1 = document.querySelector("#pokemonOne")
        div1.innerHTML = ""
        let h2 = document.createElement("h2")
        let img = document.createElement("img")
        img.src = res.data.sprites.front_default
        h2.innerText = res.data.name    
        let h3 = document.createElement("h3")
        let moves = document.createElement("h3")
        moves.innerText = "Moves: "
        h3.innerText = "HP: " + res.data.stats[5].base_stat
        let movesList = document.createElement("ul")
        let movesArr = res.data.moves.slice(1,5) 
        movesList.appendChild(moves)
        shuffle(movesArr)

        movesArr.forEach(async el => {
            let newData2 = await axios.get(el.move.url);
            let li = document.createElement("li")
            let ul = document.createElement("ul")
            li.innerText = `${el.move.name} PP: ${newData2.data.pp}`
            ul.appendChild(li)
            div1.appendChild(ul)
            movesList.appendChild(li)
        })
        document.body.appendChild(h3)
        div1.appendChild(h2)
        div1.appendChild(img)
        div1.appendChild(h3)
        div1.appendChild(movesList)
        battle.push(h2)
    } catch (error) {
        
    }
}

const shuffle = (arr) => {
    for (let i = arr.length - 1; i < 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
}

const getPokemon2 = async () => {
    try {
        let pokeId = Math.floor(Math.random() * 807)
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
        let div2 = document.querySelector("#pokemonTwo")
        div2.innerHTML = ""
        let h2 = document.createElement("h2")
        let img = document.createElement("img")
        img.src = res.data.sprites.front_default
        h2.innerText = res.data.name    
        let h3 = document.createElement("h3")
        let moves = document.createElement("h3")
        moves.innerText = "Moves: "
        h3.innerText = "HP: " + res.data.stats[5].base_stat
        let movesList2 = document.createElement("ul")
        let movesArr = res.data.moves.slice(0,4) 
        movesList2.appendChild(moves)
        shuffle(movesArr)
        movesArr.forEach(async el => {
            let newData = await axios.get(el.move.url);
            let li = document.createElement("li")
            let ul = document.createElement("ul")
            li.innerText = `${el.move.name} PP: ${newData.data.pp}`;
            ul.appendChild(li)
            div2.appendChild(ul)
            movesList2.appendChild(li)
        })

        document.body.appendChild(h3)
        div2.appendChild(h2)
        div2.appendChild(img)
        div2.appendChild(h3)
        div2.appendChild(movesList2)
        battle.push(h2)
    } catch (error) {
        
    }
}

const getWinner = (arr) => {
    shuffle(arr)
    let winner = arr[0]
    let div = document.querySelector(".battleHistory")
    div.innerHTML = ""
    let ul = document.createElement("ul")
    let li = document.createElement("li")
    li.innerText = winner
    div.appendChild(ul)
}