class Animal {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.gender = data.gender
    this.species = data.species.name
  }

  render() {
    return `
    <tr>
      <td>${this.name}</td>
      <td>${this.gender}</td>
      <td>${this.species}</td>
    </tr>
    `
  }
}
