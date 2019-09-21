1. Read README
    * COMPONENTS
        - Header
        - Description (p)
        - Two Buttons (button)
            - Getting Pokemon
            - Battle
        - Arena (class)
            - Pokemon A (div)
                - Name (h2)
                - Picture [sprite](img)
                - HP (h3)
                - Moves
                    - Move Name (li)
                    - Move PP (li)
            - Pokemon B (Same as A)
        - Battle History (h3)
            - Pokemon Winner and defeated names (p)
        - Background
2. Find out API endpoints to get data
    
    * Data Needs
        * Two Randomly picked pokemon
        - Pokemon
            - Name
            - Sprite url
            - HP
            - Moves
                - Name
                - PP
    * Data Sources
        - Pokemon: https://pokeapi.co/api/v2/pokemon/1/
            * name: pokemon.name
            * sprite url: pokemon.sprites.front_default
            * HP: pokemon.stats[5].base_stat
            * Moves: 
                - Notes
                    - Move PP: https://pokeapi.co/api/v2/move/13/
                    - first 4 or random 4 moves only
                    - What if pokemon doesn thave 4 moves total
                - pokemon.moves[index].move.name
                - pokemon.moves[index].move.url
3. Wireframing the APP