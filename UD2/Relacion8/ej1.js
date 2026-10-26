const listadoPokemon = "https://pokeapi.co/api/v2/pokemon?limit=5";
const detallePokemon = "https://pokeapi.co/api/v2/pokemon/pikachu";

document.body.innerHTML = "<h1>Pokemons varios compi</h1><p>Cargando...</p>";

fetch(detallePokemon)
    .then(respuesta => {
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        return respuesta.json();
    })
    .then(pokemon => {
        mostrarPokemon(pokemon);
    })
    .catch(error => {
        console.error("No se pudo obtener el pokemon:", error.message);
        document.body.innerHTML = `
      <h1>Pokemons varios compi</h1>
      <p>No se pudo cargar el pokemon: ${error.message}</p>
    `;
    })
    .finally(() => console.log("Petición terminada"));
    mostrarPokemon();
function mostrarPokemon() {
    const id = pokemon.id
        .map(id => `<li>${id}</li>`)
        .join("");

    document.body.innerHTML = `
    <h1>Catálogo de pokemons</h1>
    <article>
      <h2>${pokemon.id}</h2>
      <img src="${pokemon.image}" alt="${pokemon.name}" height="300">
      <h3>tipo</h3>
      <ul>${pokemon.types[0].type.name}</ul>
    </article>
  `;
}