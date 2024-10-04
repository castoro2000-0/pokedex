const pokemon = document.getElementById("pokemon");

async function prendiPokemon() {
    try {
        const nome_pokemon = document.getElementById("prendiPokemon").value;
        const risposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome_pokemon}`);
        if(!risposta.ok) {
            console.log("pokemon not found")
        }
        else {
            const dati = await risposta.json();
            pokemon.src = dati.sprites.front_default;
        }
    } catch(error) {
        console.log("error");
    }
}