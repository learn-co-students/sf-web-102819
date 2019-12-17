document.addEventListener("DOMContentLoaded", ()=>{

  let addToy = false;
  const toyUrl = 'http://localhost:3000/toys';
  const addBtn = document.querySelector('#new-toy-btn');
  const toyForm = document.querySelector('.add-toy-form');
  // const toyFormContainer = document.querySelector(".container");
  const toyFormContainer = document.getElementsByClassName('container')[0];
  const toyCollectionDiv = document.getElementById("toy-collection");

  addBtn.addEventListener('click', event => handleAddToyClick(event));
  fetchToys();
  toyForm.addEventListener('submit', event => handleFormSubmit(event));

  function handleAddToyClick(event) {
    // hide & seek with the form
    // debugger;
    addToy = !addToy
    if (addToy) {
      toyFormContainer.style.display = 'block'
    } else {
      toyFormContainer.style.display = 'none'
    };
  };

  function fetchToys() {
    fetch(toyUrl)
    .then(response => response.json())
    .then(json => renderToyArray(json));
  };

  function renderToyArray(json) {
    json.forEach(object => renderToyObject(object));
  };

  function renderToyObject(object) {
    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('class', "card");
    cardDiv.setAttribute('id', `toy-${object.id}`);
    cardDiv.innerHTML = `
    <h2>${object.name}</h2>
    <img src="${object.image}" class="toy-avatar" />
    <p>${object.likes} Likes </p>
    <button class="like-btn">Like <3</button>`
    let button = cardDiv.lastElementChild;
    button.addEventListener('click', event => handleLike(event));
    toyCollectionDiv.append(cardDiv);
  };

  function handleLike(event) {
    let toyId = event.target.parentElement.id.split("-")[1];
    let toyParagraph = event.target.previousElementSibling;
    let toyLikes = parseInt(toyParagraph.innerText) + 1;
    const data = {
      id: toyId,
      likes: toyLikes
    };
    fetch(toyUrl + "/" + toyId, {
      method: 'PATCH',
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }})
    .then(resp => resp.json())
    .then(json => {
      toyParagraph.innerText = `${json.likes} Likes`
    });
  };

  function patchLike(event) {

  };

  function handleFormSubmit(event) {
    event.preventDefault();
    let data = {
      "name": event.target.name.value,
      "image": event.target.image.value,
      "likes": 0
    };

    fetch(toyUrl, {
      method: 'POST',
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }})
    .then(resp => resp.json())
    .then(json => renderToyObject(json));
  };


});
