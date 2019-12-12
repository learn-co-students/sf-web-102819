console.log("Hello!");

document.addEventListener('DOMContentLoaded', (event) => {
  fetch('http://localhost:3000/recipes')
    .then(response => response.json())
    .then(json => console.log(json));
});

function renderRecipes(json) {
  
};