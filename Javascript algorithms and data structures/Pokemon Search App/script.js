/**
 * @async
 * @function getPokemon
 * @description - Fetches Pokémon data from the PokéAPI
 * @param {string} pokemon - The name of the Pokémon to search for
 * @returns {object} - The Pokémon data
 */

const getPokemon = async (pokemon) => {
  try {
    const response = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemon}`
    );

    /**
     * @constant {object} data - The Pokémon data
     * @description - The Pokémon data fetched from the PokéAPI
     */

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

document.getElementById("search-form").onsubmit = async (e) => {
  e.preventDefault();

  const pokemon = document.getElementById("search-input").value;
  const pokemonName = document.getElementById("pokemon-name");
  const pokemonID = document.getElementById("pokemon-id");
  const pokemonWeight = document.getElementById("weight");
  const pokemonHeight = document.getElementById("height");
  const pokemonHP = document.getElementById("hp");
  const pokemonAttack = document.getElementById("attack");
  const pokemonDefense = document.getElementById("defense");
  const pokemonSpecialAttack = document.getElementById("special-attack");
  const pokemonSpecialDefense = document.getElementById("special-defense");
  const pokemonSpeed = document.getElementById("speed");
  const pokemonSprite = document.getElementById("sprite-container");
  const pokemonTypes = document.getElementById("types");
  const emptyText = document.querySelector(".empty-text");

  /**
   * @constant {object} typeColors - The colors for each Pokémon type
   * @description - The colors for each Pokémon type
   * @property {string} normal - The color for the normal type
   * @property {string} fire - The color for the fire type
   * @property {string} water - The color for the water type
   * @property {string} electric - The color for the electric type
   * @property {string} grass - The color
   * @property {string} ice - The color for the ice type
   * @property {string} fighting - The color for the fighting type
   * @property {string} poison - The color for the poison type
   * @property {string} ground - The color for the ground type
   * @property {string} flying - The color for the flying type
   * @property {string} psychic - The color for the psychic type
   * @property {string} bug - The color for the bug type
   * @property {string} rock - The color for the rock type
   * @property {string} ghost - The color for the ghost type
   * @property {string} dragon - The color for the dragon type
   * @property {string} dark - The color for the dark type
   * @property {string} steel - The color for the steel type
   * @property {string} fairy - The color for the fairy type
   * @returns {object} - The colors for each Pokémon type
   */
  const typeColors = [
    {
      normal: "#A8A77A",
      fire: "#EE8130",
      water: "#6390F0",
      electric: "#F7D02C",
      grass: "#7AC74C",
      ice: "#96D9D6",
      fighting: "#C22E28",
      poison: "#A33EA1",
      ground: "#E2BF65",
      flying: "#A98FF3",
      psychic: "#F95587",
      bug: "#A6B91A",
      rock: "#B6A136",
      ghost: "#735797",
      dragon: "#6F35FC",
      dark: "#705746",
      steel: "#B7B7CE",
      fairy: "#D685AD",
    },
  ];

  const data = await getPokemon(pokemon.toLowerCase());

  if (!data) {
    pokemonName.textContent = "";
    pokemonID.textContent = "";
    pokemonWeight.textContent = "";
    pokemonHeight.textContent = "";
    pokemonHP.textContent = "";
    pokemonAttack.textContent = "";
    pokemonDefense.textContent = "";
    pokemonSpecialAttack.textContent = "";
    pokemonSpecialDefense.textContent = "";
    pokemonSpeed.textContent = "";
    pokemonSprite.innerHTML = "";
    pokemonTypes.innerHTML = "";

    alert("Pokémon not found");

    return;
  }

  pokemonName.textContent = data.name.toUpperCase();
  pokemonID.textContent = `#${data.id}`;
  pokemonWeight.innerHTML = `<b>Weight:</b> ${data.weight}`;
  pokemonHeight.innerHTML = `<b>Height:</b> ${data.height}`;
  pokemonSprite.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="${data.name}" />`;
  pokemonHP.textContent = `${data.stats[0].base_stat}`;
  pokemonAttack.textContent = `${data.stats[1].base_stat}`;
  pokemonDefense.textContent = `${data.stats[2].base_stat}`;
  pokemonSpecialAttack.textContent = `${data.stats[3].base_stat}`;
  pokemonSpecialDefense.textContent = `${data.stats[4].base_stat}`;
  pokemonSpeed.textContent = `${data.stats[5].base_stat}`;
  emptyText.style.display = "none";

  pokemonTypes.innerHTML = `
    ${
      data.types.length > 1
        ? `
          <span class="type ${data.types[0].type.name}"
            style="background-color: ${typeColors[0][data.types[0].type.name]}"
          >${data.types[0].type.name.toUpperCase()}</span>
          <span class="type ${data.types[1].type.name}"
            style="background-color: ${typeColors[0][data.types[1].type.name]}"
            >${data.types[1].type.name.toUpperCase()}</span>
        
  `
        : `
          <span class="type ${data.types[0].type.name}"
            style="background-color: ${typeColors[0][data.types[0].type.name]}"
          >${data.types[0].type.name.toUpperCase()}</span>
        `
    }
  `;
};
