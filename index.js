document.addEventListener("DOMContentLoaded", () => { 
    let getPokeButton = document.querySelector("#getPokeButton");
    const choosePokemon = async () => { 
        try{
        let randomNum = Math.floor(Math.random() * 807)
        let pokemon1 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
        let info = pokemon1.data;
        let poke = info.name;
        let picture = info.sprites.front_default;
        let hp = `HP: ${info.stats[5].base_stat}`;
        let dataBox = document.querySelector("#dataBox")
        let p1 = document.createElement("p")
        p1.innerText = poke
        dataBox.appendChild(p1)
        let p2 = document.createElement("img")
        p2.src = picture
        dataBox.appendChild(p2)
        let p3 = document.createElement("p")
        p3.innerText = hp 
        dataBox.appendChild(p3)

        for(let i = 0; i < 4; i++) {
            let dataBox = document.querySelector("#dataBox")
            let moveName = info.moves[i].move.name
            let moveUrl = info.moves[i].move.url
            let pp = await axios.get(moveUrl)
            let p5 = document.createElement("p")
            p5.innerText = `Move: ${pp.data.name}; PP: ${pp.data.pp}`
            dataBox.appendChild(p5)
        }
        
        

    } catch(err) {
    console.log(err);
    }
   }

   getPokeButton.addEventListener("click", () => {
       choosePokemon()
    //    choosePokemon()
   })
 })