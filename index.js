document.addEventListener("DOMContentLoaded", () => {
    let img = document.createElement("img")
    let img2 = document.createElement("img")

    let li = document.createElement("li")
    let li2 = document.createElement("li")

    let pokebutton = document.getElementById("getPoke")
    // debugger

    pokebutton.addEventListener("click", () => {
        getPokemon()
    })
     


    const getPokemon = async () => {
        
        let res = await axios.get("https://pokeapi.co/api/v2/pokemon/")
        // debugger
        let count = parseInt(res.data.count)
        let pokeNum = Math.floor(Math.random()* 800)
        let pokeNum2 = Math.floor(Math.random()* 800)

        
        let pokeImg1 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`)  //to get random sprite(pokemon imgage)
        let pokeImg2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNum2}`)
        
        let pokeArr =[pokeImg1,pokeImg2]

        let name1 = pokeImg1.data.name // to get name and save to a variable
        let name2 = pokeImg1.data.name
        
        let hp1 = pokeImg1.data.stats.forEach((el, i) => { //finds the hp and saves it to a variable
            if(i === pokeImg1.data.stats.length-1){
                return el.base_stat
            }
        })
        let hp2 = pokeImg2.data.stats.forEach((el, i) => {
            if(i === pokeImg2.data.stats.length-1){
                return el.base_stat
            }
        })
        // debugger
        
        // console.log(res1)
        img.src = pokeImg1.data.sprites.front_default
        img2.src = pokeImg2.data.sprites.front_default

        for(let i = 0; i < pokeArr.length; i++){
            if(i === 0){
                
            }
        }
        
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
 