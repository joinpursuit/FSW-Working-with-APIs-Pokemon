1. Read readme
* Components 
    - Header (h1)
    - Description
    - Two buttons (button)
        - Getting Pokemon
        - Battle
    - Arena (div)
        - Pokemon 1 (div)
            - Name (h2)
            - img/sprite (img)
            - HP (h3)
            - Moves(ul)
                - Move Name(li)
                - Move PP
        - Pokemon 2 (Same as 1)
    - Battle (h3)
        - Pokemon winner and loser (p)
    - Background color/image
2. Find out API endpoints
* 2 randomly picked pokemons 
* Data needs:
    - Pokemon
        - name
        - sprite url
        - HP
        - moves (4); name, 
* Data sources:
    - Pokemon: https://pokeapi.co/api/v2/pokemon/`{poke_id}`
        * Name: pokemon.name
        * Sprite URL: pokemon.sprites.front_default
        * HP: pokemon.stats[5].base_stat
        * Moves: 
            - first or random 4 only
            -
            : pokemon.moves
        * PP: https://pokeapi.co/api/v2/moves/ `{move_id}`

3. Wire framing the app
4. Build HTML skeleton
5. Code!


* NOTES FOR JS 
    - Listen for button clicks
    - Random pokemon picker
    - Fetch pokemon
        - GET request to API 
    - Get/Fetch pokemon moves PP
        - GET request to API
    - Create Pokemon cards/Display pokemon
    - Battle Pokemon
        - Random winner picker (coin flip)
        - Update battle history
