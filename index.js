document.addEventListener("DOMContentLoaded", () => { 
    let button1 = document.querySelector("#button1");
    const choosePokemon = async () => { 
        try{
            let randomNum = Math.floor(Math.random() * 807)
            let pokemon1 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
        let info = pokemon1.data;
        let poke = info.name;
        let picture = info.sprites.front_default;
        let hp = info.stats[5].base_stat;
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
        for(let i = 0; i < 4; i++) {
        let mainPoke = document.querySelector("#mainPoke")
        let getMoves = info.moves[i].move.name
        let p4 = document.createElement("p")
        p4.innerText = getMoves
        mainPoke.appendChild(p4)}

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
