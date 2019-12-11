document.addEventListener("DOMContentLoaded", () => {
   let pokemon1 = document.querySelector("#pokemon1")
   let pokemon2 = document.querySelector("#pokemon2")
   let getPoke = document.querySelector("#getPoke")
   let battle = document.querySelector("#battle")
   let pokemon = ""
   let pokemonchar = ""
   let poke1 = document.createElement("img")
   let poke2 = document.createElement("img")
   let status1 = ""
   let status2 = ""
   let mymove1 = ""
   let mymove2 = ""
   let h1 =document.createElement("h1")
   let h2 =document.createElement("h1")
   let p1 =document.createElement("p")
   let p2 =document.createElement("p")
   let movelistUl = document.createElement("ul")
   let movelistUl2 = document.createElement("ul")
   let hp1 = document.createElement("h5")
   let hp2 = document.createElement("h5")
      
   const randomNumber = (max, min) => Math.floor(Math.random() * (max -min)) + min



    const fetchData = async () =>{
        let num = randomNumber(800,1);
        let num2 = randomNumber(800,1);
        try{
          let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
          let res2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num2}`);

           pokemon = res.data.name
           pokemonchar =res2.data.name
           poke1.src = res.data.sprites.front_default
          poke2.src = res2.data.sprites.front_default

          status1 = res.data.stats[5].base_stat
          status2 = res2.data.stats[5].base_stat
          
          hp1.innerText= ""
          hp1.innerText = `HP: ${status1}`

          hp2.innerText= ""
          hp2.innerText = `HP: ${status2}`
          

          mymove1 = res.data.moves
          mymove2 = res2.data.moves
          for(let i = 1; i < 5; i ++){
            let randNum = randomNumber(mymove1.length-1,1)
            let randNum2 = randomNumber(mymove2.length-1,1)
            let moveName1 = mymove1[randNum].move.name
            let moveName2 = mymove2[randNum2].move.name
            let moveData1 = await axios.get(mymove1[randNum].move.url)
            let moveData2 = await axios.get(mymove2[randNum2].move.url)
            let movePP1 = moveData1.data.pp
            let movePP2 = moveData2.data.pp

            let move1li = document.createElement("li")
            let move2li = document.createElement("li")
            p1.innerText = "Moves:"
            move1li.innerText = `${moveName1} :${movePP1}` 
            movelistUl.appendChild(move1li)

            p2.innerText = "Moves:"
            move2li.innerText = `${moveName2} :${movePP2}` 
            movelistUl2.appendChild(move2li)
        }

       
       

        //   debugger
          h1.innerText = pokemon
          h2.innerText = pokemonchar

          
        //    debugger
        } 
          catch(err) {
              console.log(err)
              debugger
          }
      }

      getmoves = () =>{

      }

   getPoke.addEventListener("click", () => {
    movelistUl.innerHTML = ""
    movelistUl2.innerHTML = ""
    pokemon1.appendChild(h1)
    pokemon1.appendChild(poke1)
    pokemon1.appendChild(hp1)
    pokemon1.appendChild(p1)
    pokemon1.appendChild(movelistUl)
    
    pokemon2.appendChild(h2)
    pokemon2.appendChild(poke2)
    pokemon2.appendChild(hp2)
    pokemon2.appendChild(p2)
    pokemon2.appendChild(movelistUl2)

    fetchData();
   })

   battle.addEventListener("click", () => {
       let history = document.querySelector("#history")
       if(status1 > status2){
        let p = document.createElement("p")
        p.innerText = `${pokemon} has defeated ${pokemonchar}`
        p.id = "winner"
        history.appendChild(p)
       } else {
        let p = document.createElement("p")
        p.innerText = `${pokemonchar} has defeated ${pokemon}`
        p.id = "winner"
        history.appendChild(p)

       }

   })



})