const baseURL = 'http://localhost:3000/animals/';

const getAnimals = () => fetch(baseURL).then(res => res.json());

const createAnimal = body => {
  return fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then(res => res.json());
};

const renderAnimal = animal => {
  return `
  <tr>
    <td>${animal.name}</td>
    <td>${animal.gender}</td>
    <td>${animal.species}</td>
  </tr>
  `;
};

$(function() {
  console.log('jquery document ready');
  const $tbody = $('tbody');
  const $form = $('form');

  getAnimals().then(json => {
    json.forEach(animalData => {
      $tbody.append(renderAnimal(animalData));
    });
  });

  $form.on('submit', function(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const gender = e.target.gender.value;
    const species_id = e.target.species.value;

    const body = { animal: { name, gender, species_id } };

    createAnimal(body).then(json => {
      $tbody.append(renderAnimal(json));
    });
  });
});
