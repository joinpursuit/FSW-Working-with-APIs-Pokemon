document.addEventListener("DOMContentLoaded", () => {
    
    try {
        const selectPoke = async (url) => { 
            let randomPokeArray = []
            let jsonPoke = await axios.get(url) 
            let pokeObject = jsonPoke.data.results
            
            for (let i = 0; i < input.value; i++) {
                let randomPoke = pokeObject[Math.floor(Math.random() * pokeObject.length)];
                randomPokeArray.push(randomPoke);
                }
            
            randomPokeArray.forEach(pokemon => {
                let data = document.querySelector("#data")
                let h1 = document.createElement("h1")
                h1.innerText = pokemon["name"].toUpperCase()
                // debugger
                data.appendChild(h1)
            })
        }
        
        selectPoke("https://pokeapi.co/api/v2/pokemon/?limit=964")
    }
    catch(err) {
        console.log(err)
        }
    
    
    // const selectPoke = () => {
    //     var colArr = [];
    //     for (var i = 0; i < input.value; i++) {
    //       let rand = arr[Math.floor(Math.random() * d.length)];
    //       colArr.push(rand);
    //     }
    //     return 
    //   }
    
    // let form = document.querySelector("form")
    // form.addEventListener("submit", (event) => {
    //     event.preventDefault() 
        

    //     button.addEventListener("click", () => {
            
    //     })
    
    // })

})





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

