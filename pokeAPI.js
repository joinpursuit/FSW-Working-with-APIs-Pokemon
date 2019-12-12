try {
    const selectPoke = async (url, input) => { 
        let randomPokeArray = []
        let jsonPoke = await axios.get(url) 
        let pokeObject = jsonPoke.data.results
        for (let i = 0; i < input; i++) {
            let randomPoke = pokeObject[Math.floor(Math.random() * pokeObject.length)];
            if (!randomPokeArray.includes(randomPoke)){
            randomPokeArray.push(randomPoke)
            }
        }

        randomPokeArray.forEach(pokemon => {
            // let data = document.querySelector("#data")
            // let h1 = document.createElement("h1")
            // h1.innerText = pokemon["name"].toUpperCase()
            // h1.className = "h1"
            // // debugger
            // data.appendChild(h1)
        })
    }
    
    let form = document.querySelector("#masterInvoker")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let input = document.querySelector("#pokenum").value
        input.value = ""
        selectPoke("https://pokeapi.co/api/v2/pokemon/?limit=964", input) //refactor limit for pokemon game updates or recursive function for pagination
        form.reset()
    })
}
catch(err) {
    console.log(err)
    }







// **Pokemon Melee rather than Pokemon One-on-One Battle Pseudo Code**
// Allow user input to determine number of pokemon to battle (Max 5 Pokemon to conserve response time)
// Choose n pokemon at random based on form input using get request
// Assign array variable to hold chosen n pokemon objects and prevent duplication
// Assign array variable to hold all pokemon chosen without a game reset/page refresh - prevent duplication across melees
// Create and render n pokemon descriptive HTML elements (image,moves, etc) in single data div with css flexbox for arranging elements along the x-axis, styled with assigned classes
// Use recursive function to render 'data' HTML elements? or stick to iteration?
// Use animation and audio to render pokemon - use another sprite library with gif and ogg files - I found a scraper for these files, 
//     but not an API.
//     Could incorporate a set break in the rendering of each pokemon - hear each pokemon individually
// Winner will be most powerful pokemon - Use PP sum of randomly generated moves to select winner (function
// Include an HTML reset
// Element to reset game

// *How to prevent ongoing duplication with each melee without page refresh or user pushed game reset?

