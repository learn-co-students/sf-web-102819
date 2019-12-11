// We create allPokemon to save all of our pokemon in an array that is accessible to all functions
let allPokemon = [];

document.addEventListener('DOMContentLoaded', () => {
	// Once the DOM is loaded we fetch our pokemon and set up additional event listeners
	fetchPokemon();
	listenToClicks();
	listenToFormSubmit();
});

function fetchPokemon() {

		// debugger;
	// Once a user loads the page we fetch all of our pokemon from our json-server backend
			fetch('http://localhost:3000/pokemon')
				.then(response => response.json())
				.then(json => {
					// Set the allPokemon array equal to the response we get from the server
					allPokemon = json;
					// We change the innerHTML of our parent container by mapping over
					// all of our pokemon (that we got from the database)
					// and formatting each one with the renderSinglePokemon function
					const pokemonContainer = document.getElementById('pokemon-container');

					pokemonContainer.innerHTML = allPokemon
						.map(anything => renderSinglePokemon(anything))
						.join("");
				});
			

};

function listenToClicks() {


	// We add an event listener to our entire container and later figure what to do with it

}

function listenToFormSubmit() {
	// Listen to our form submission event
	document.getElementById("pokemon-post-form").addEventListener("submit", event => createPokemon(event));
}

function renderSinglePokemon(pokemon) {
	// Create a pokemon card with divs/buttons etc, the id is how we figure out which pokemon has been clicked
	return `
        <div class="pokemon-card" id="${pokemon.id}">
          <div class="pokemon-frame">
            <h1 class="center-text">${pokemon.name}</h1>
            <div class="pokemon-image">
              <img data-id="${pokemon.id}" class="toggle-sprite" src="${
		pokemon.sprites.front
	}">
            </div>
            <button data-id="${
							pokemon.id
						}" class="pokemon-button">Delete</button>
          </div>
        </div>`;
}

function handleImageHover(event) {
	const htmlTagName = event.target.tagName;

	// If an image is hovered over we want to flip that image
	if (htmlTagName === 'IMG') {
		flipImage(event);
	}
}

function handleDeleteButtonClick(event) {
	const htmlTagName = event.target.tagName;
	const pokemonId = event.target.dataset.id;

	// If a button is clicked we want to delete that pokemon
	if (htmlTagName === 'BUTTON') {
		deletePokemon(pokemonId);
	}
}

function flipImage(event) {
	// Figure out which pokemon has been clicked
	const clickedPokemon = allPokemon.find(
		pokemon => pokemon.id == event.target.dataset.id
	);

	// Set the src attribute (link to the image) based on if front or back is showing
	if (event.target.src === clickedPokemon.sprites.front) {
		event.target.src = clickedPokemon.sprites.back;
	} else {
		event.target.src = clickedPokemon.sprites.front;
	}
}

function deletePokemon(pokemonId) {
	// Use fetch with a method of delete to remove this pokemon from the database


		// After deleting our pokemon from the database we remove it from the DOM

}

function createPokemon(event) {
	event.preventDefault();

	// Get all the values from our form
	const name = document.getElementById("name-input").value;
	const spriteFrontUrl = document.getElementById("sprite-input-front").value;
	const spriteBackUrl = document.getElementById("sprite-input-back").value;

	// Here we create a new pokemon object that we then send to our backend
	const data = {
		name: name,
		sprites: { front: spriteFrontUrl, back: spriteBackUrl}
	};

	// The body must be a string, also make sure to include headers with a post (patch, or put, sometimes delete) request
	fetch('http://localhost:3000/pokemon', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
				'Content-Type': 'application/json'
		}})
		.then(response => response.json())
		.then(json => {
			

			const newDiv = document.createElement('div');
			newDiv.innerHTML = renderSinglePokemon(json);
			pokemonContainer.prepend(newDiv);
		});
};
