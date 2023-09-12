const Boton = document.getElementById("boton");
const Info = document.getElementById("Info");
const pokemonSprite = document.getElementById('IMG');

Boton.addEventListener("click", () => {
    const input = document.getElementById('input').value.toLowerCase();
    const infoURL = `https://pokeapi.co/api/v2/pokemon-species/${input}/`;

    fetch(infoURL)
        .then(response => {
            if (!response.ok) {throw new Error(`HTTP error! Status: ${response.status}`);}
            return response.json();
        })
        .then(data => {
            Info.innerHTML = 
            "<h1>" + data.name.charAt(0).toUpperCase() + data.name.slice(1) + "</h1>";

            const imgURL = `https://pokeapi.co/api/v2/pokemon/${data.id}/`;
            return fetch(imgURL);
        })
        .then(response => response.json())
        .then(data => {
            const spriteUrl = data.sprites.front_default;
            pokemonSprite.src = spriteUrl;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            Info.textContent = 'Pokémon no encontrado';
        });
});
