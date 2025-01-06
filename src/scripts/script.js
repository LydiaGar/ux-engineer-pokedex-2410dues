const pokemonData = [
    {
        id: 1,
        name: "Bulbasur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
];

//render Pokémon Card
const renderPokemon = (pokemon) => {
    return `
        <div class="card">
            <img src="${pokemon.image}" alt="${pokemon.name}" class="card__img">
            <h2 class="card__title">${pokemon.name}</h2>
            <p class="card__number">#${pokemon.id.toString().padStart(3, "0")}</p>
        </div>
    `;
};

//render grid
const renderPokemons = (pokemons) => {
    const grid = document.querySelector(".main__grid");
    grid.innerHTML = pokemons.map(renderPokemon).join("");
};

//inicializar datos estáticos
renderPokemons(pokemonData);