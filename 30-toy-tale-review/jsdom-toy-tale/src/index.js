let addToy = false

const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
  } else {
    toyForm.style.display = 'none'
  }
})

// Fetching and appending all toys to the DOM
fetch('http://localhost:3000/toys')
  .then(resp => resp.json())
  .then(allToysJSON => {
    // Append to DOM
    const toyCollectionDiv = document.getElementById('toy-collection')

    allToysJSON.map(toy => {
      const toyDiv = document.createElement('div')
      toyDiv.classList.add("card")
      toyDiv.textContent = toy.name

      const likeButton = document.createElement('button')
      likeButton.classList.add("like-btn")
      likeButton.id = toy.id
      likeButton.textContent = "Like"

      const likes = document.createElement('p')
      likes.textContent = toy.likes

      toyDiv.appendChild(likes)
      toyDiv.appendChild(likeButton)

      toyCollectionDiv.appendChild(toyDiv)
    })
  })


// Add listener to form, add new toy to the DOM and persist it in the database
const formElement = document.getElementsByClassName('add-toy-form')[0]

formElement.addEventListener('submit', function(event){
  event.preventDefault()

  // Modify DOM
  const toyName = event.target.name.value
  // const toyImage = event.target.image.value
  const toyCollectionDiv = document.getElementById('toy-collection')

  const toyDiv = document.createElement('div')
  toyDiv.classList.add("card")
  toyDiv.textContent = toyName

  toyCollectionDiv.appendChild(toyDiv)

  // Persist to DB
  fetch('http://localhost:3000/toys', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      "name": toyName
    })
  })
})


// On click of each like button increment the likes in the DOM and persist to database
const toyCollectionDiv = document.getElementById('toy-collection')

toyCollectionDiv.addEventListener('click', function(event){
  if (event.target.tagName === "BUTTON") {
    // Modify DOM
    
    // Select the p tag that contains our likes number
    const likesElement = event.target.parentElement.querySelector('p')
    const likes = parseInt(likesElement.textContent)
    const newLikes = likes + 1

    likesElement.textContent = newLikes
    
    // Persist to DB
    const toyId = event.target.id
    
    fetch(`http://localhost:3000/toys/${toyId}`, {
      method: "PATCH",
      headers: 
        {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
      body: JSON.stringify({
        likes: newLikes
      })
    })

  }
})







