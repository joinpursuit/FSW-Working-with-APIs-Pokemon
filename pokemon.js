document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("button")
    const getPokemon = async () => {
        try {
            let res = await axios.get("https://swapi.co/api/people")
            let characters= res.data.results;
            characters.forEach(character => {
                let option = document.createElement("option")
                option.innerText = character.name;
                option.value = character.homeworld;
                select.appendChild(option)
            })
        } catch(err) {
           
        }
    

})