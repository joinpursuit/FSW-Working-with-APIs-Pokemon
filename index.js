document.addEventListener("DOMContentLoaded", () => {
    let img = document.createElement("img")
    let img2 = document.createElement("img")

    let li = document.createElement("li")
    let li2 = document.createElement("li")

    let ul = document.createElement("ul")

    let pokebutton = document.getElementById("getPoke")
    // debugger

    pokebutton.addEventListener("click", () => {
        getPokemon()
    })
     

// axios.get each el and append it to the body then call function twice
    const getPokemon = async () => {
        
        // let res = await axios.get("https://pokeapi.co/api/v2/pokemon/")
        // // debugger
        // let count = parseInt(res.data.count)
        let pokeNum = Math.floor(Math.random()* 800)
        let pokeNum2 = Math.floor(Math.random()* 800)

        
        let pokemon1 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`)  //to get random sprite(pokemon imgage)
        let pokemon2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNum2}`)
        // debugger
        
        let pokeArr =[pokemon1,pokemon2]

        let name1 = pokemon1.data.name // to get name and save to a variable
        let name2 = pokemon1.data.name
        
        let hp1 = pokemon1.data.stats.forEach((el, i) => { //finds the hp and saves it to a variable
            if(i === pokemon1.data.stats.length-1){
                return el.base_stat
            }
        })
        let hp2 = pokemon2.data.stats.forEach((el, i) => {
            if(i === pokemon2.data.stats.length-1){
                return el.base_stat
            }
        })
        
        for(let i = 0; i < 4; i++){
            let result1 = []
            let result2 = []

            let moveName1 = pokemon1.data.moves[i].move.name
            let moveName2 = pokemon2.data.moves[i].move.name

            let pp1 = pokemon1.data.moves[i].move.url
            let pp2 = pokemon2.data.moves[i].move.url

            // let getPP = await axios.get(`https://pokeapi.co/api/v2/move/${i}/`)
            let getPP = await axios.get(pp)
            result1.push(moveName1 + "PP: ", )
            result2.push()
            getPP.data.pp

            debugger
        }
        
        
        
        
        // console.log(res1)
        img.src = pokemon1.data.sprites.front_default
        img2.src = pokemon2.data.sprites.front_default

        // for(let i = 0; i < pokeArr.length; i++){
        //     if(pokeArr[i]){
                
        //     }
        // }
        
        // console.log(img.src)
        li.innerText = name1
        li2.innerText = name2

        li.innerText = `HP: ${hp1}`
        li2.innerText = `HP: ${hp2}`

        document.getElementById("poke1").appendChild(li) 
        document.getElementById("poke1").appendChild(img)

        document.getElementById("poke2").appendChild(li2)
        document.getElementById("poke2").appendChild(img2)
        // debugger
        // document.body.appendChild(img)
        // document.body.appendChild(img2)
    }
    

    // const battlePokemon = () => {
            
    // }
})
 