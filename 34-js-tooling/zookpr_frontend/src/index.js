document.addEventListener('DOMContentLoaded',
  function() {
    const tbody = document.querySelector('tbody')
    const form = document.querySelector('form')

    const api = new Adapter()
    api.getAnimals()
    .then(animals => {
      animals.forEach(animal => {
        const a = new Animal(animal)
        tbody.innerHTML += a.render()
      })
    })

    form.addEventListener('submit', handleSumbit)

  function handleSumbit(e) {
    e.preventDefault()

    const api = new Adapter()
    api.createAnimal(getFormData())
    .then( r => {
      const animal = new Animal(r)
      tbody.innerHTML += animal.render()
      clearFormData()
    })
  }

  function getFormData() {
    return {
      name: document.querySelector('#name').value,
      gender: document.querySelector('#gender').value,
      species: document.querySelector('#species').value
    }
  }

  function clearFormData() {
    document.querySelector('#name').value = ''
    document.querySelector('#gender').value = ''
    document.querySelector('#species').value = ''
  }
})
