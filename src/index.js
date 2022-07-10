// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS


function createPokemonCard(pokemon) {


    let liCards = document.createElement('li')
    liCards.className = 'card'
    liCards.addEventListener('click', function () {
        if (pokemonImg.src === pokemon.sprites.front_default) {
            pokemonImg.src = pokemon.sprites.back_default
        } else {
            pokemonImg.src = pokemon.sprites.front_default
        }
    })

    let h2Title = document.createElement('h2')
    h2Title.className = 'card--title'
    h2Title.textContent = pokemon.name.toUpperCase()

    let pokemonImg = document.createElement('img')
    pokemonImg.width = 256
    pokemonImg.className = 'card--img'
    pokemonImg.src = pokemon.sprites.back_default

    let ulStats = document.createElement('ul')
    ulStats.className = 'card--text'

    for (let statInfo of pokemon.stats) {
        let statLi = document.createElement('li')
        statLi.textContent = `${statInfo.stat.name.toUpperCase()}: ${statInfo.base_stat
            }`
        ulStats.appendChild(statLi)
    }

    liCards.append(h2Title, pokemonImg, ulStats)

    let cardsUl = document.querySelector('.cards')
    cardsUl.append(liCards)
}

for (let pokemon of data) {
    createPokemonCard(pokemon)
}