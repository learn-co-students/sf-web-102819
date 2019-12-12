let ulElement; 

function renderRecipes(json) {
  return json.map(recipe => {
    let listElement = document.createElement("li");
    listElement.innerText = recipe.name;
    ulElement.append(listElement);
  });
};

document.addEventListener('DOMContentLoaded', (event) => {
  ulElement = document.getElementById("recipes");
  fetch('http://localhost:3000/recipes')
    .then(response => response.json())
    .then(json => {
      console.log(json);
      renderRecipes(json);
    });
});
