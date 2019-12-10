document.addEventListener('DOMContentLoaded', function(event) {
  // Listen to first Button being clicked


  // Listen to our form submit
  const commentForm = document.getElementById('comment-form');
  const commentsContainer = document.getElementById('comments-container');

  commentForm.addEventListener('submit', function(event) {
    // console.log(event);
    event.preventDefault(); // stops the form from POSTing
    // console.log(event.target);
    // const userInputField = document.getElementById('new-comment');
    const userInputField = event.target.querySelector('#new-comment');
    let userInput = userInputField.value;

    let commentParagraph = document.createElement('p');
    commentParagraph.innerText = userInput;

    commentsContainer.appendChild(commentParagraph);
    userInputField.value = null;
  });

  // Demonstrate event bubbling
  const helicopterNode = document.getElementById('helicopter-parent');

  helicopterNode.addEventListener('click', (event) => {
    if (event.target.dataset.name === 'alert') {
      window.alert('HAI!!1');
    } else if (event.target.dataset.name === 'log') {
      console.info("Information.") 
    } else if (event.target.dataset.name === 'error') {
      console.error("ERR0R1");
    };
  });
  
});

