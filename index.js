document.addEventListener("DOMContentLoaded", () => { 
    let select = document.querySelector("select");
    let button1 = document.querySelector("#button1");
    const choosePokemon = async () => { 
        try{
            let randomNum = Math.floor(Math.random() * 807)
            let pokemon1 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
        // let pokemon2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum(1, 809)}`);
        // console.log(pokemon1)
        let info = pokemon1.data;
        let poke = info.name;
        let picture = info.sprites.front_default;
        let hp = info.stats[5].base_stat;
        
        for(let i = 0; i < 4; i++) {
            
            let mainPoke = document.querySelector("#mainPoke")
            let getMoves = info.moves[i].move.name
        let p1 = document.createElement("p")

        p1.innerText = getMoves
        mainPoke.appendChild(p1)}

        let getMoves = info.moves
        let pp = info.moves
        debugger
        

        let mainPoke = document.querySelector("#mainPoke")
        let p1 = document.createElement("p")
        p1.innerText = poke
        mainPoke.appendChild(p1)
        let p2 = document.createElement("img")
        p2.src = picture
        mainPoke.appendChild(p2)
        let p3 = document.createElement("p")
        p3.innerText = hp 
        mainPoke.appendChild(p3)





        // let displayName = document.createElement("body")
        // let picture = document.createElement("body")
        // let hp = document.createElement("body")





        // ul.appendChild(li)
        // debugger;

    
    } catch(err) {
    console.log(err);
    }
   }

   button1.addEventListener("click", () => {
       choosePokemon()
   })
// choosePokemon()
// })
// let button1 = document.querySelector("#button1") {}
// button1.addEventListener("click", () => {
    //  choosePokemon(pokemon1);
    //     choosePokemon(pokemon2)

 })
