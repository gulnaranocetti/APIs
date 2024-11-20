let characters = [];

// URL de la API
const apiUrl = 'https://rickandmortyapi.com/api/character';

// Contenedor donde mostraremos los personajes
const charactersContainer = document.getElementById('characters');

// Realiza la solicitud a la API
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        characters = data.results;
        characters.forEach(character => {
            // Crear un contenedor para cada personaje
            const characterDiv = document.createElement('div');
            characterDiv.className = 'character';

            // Agregar contenido al personaje
            characterDiv.innerHTML = `
                <div class="card m-3">
                    <img class="m-3" src="${character.image}" alt="${character.name}">
                    <div class="card-body">
                        <h5 class="card-title">${character.name}</h5>
                        <p class="card-text">Status: ${character.status}</p>
                        <p class="card-text">Species: ${character.species}</p>
                    </div>
                </div>
            `;

            // Agregar el contenedor al DOM
            charactersContainer.appendChild(characterDiv);
        });
    })
    .catch(error => {
        console.error('Error al conectarse a la API:', error);
    });
