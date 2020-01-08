class Adapter {
  constructor() {
    this.baseURL = 'http://localhost:3000/animals'
  }

  getAnimals() {
    return fetch(this.baseURL)
    .then(r => r.json())
  }

  createAnimal(data) {
    return fetch(this.baseURL, {
      body: JSON.stringify({animal: data}),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
      .then(r => r.json())

  }
}
