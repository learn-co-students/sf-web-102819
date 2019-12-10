document.addEventListener('DOMContentLoaded', function(event) {
  // Listen to first Button being clicked
  const firstBtnOnPage = document.querySelector('button');

  firstBtnOnPage.addEventListener('click', function() {
    console.log('BUTTON WAS CLICKED');
  });

  // Listen to our form submit
  const commentForm = document.getElementById('comment-form');
  const commentsContainer = document.getElementById('comments-container');

  commentForm.addEventListener('submit', function(event) {
    // Make sure you listen for a submit event (not a click!!) cause this is a form
    console.log(event); // Forms will attempt to make an HTTP POST request (prevent the default!)

    event.preventDefault(); //stop form from POSTING
    console.log(event.target);

    const userInputField = event.target.querySelector('#new-comment');
    //OR document.querySelector('#new-comment')

    const userInputString = userInputField.value;

    const commentPTag = document.createElement('p');
    commentPTag.textContent = userInputString;

    commentsContainer.appendChild(commentPTag);
  });

  const helicopterNode = document.getElementById('helicopter-parent');

  helicopterNode.addEventListener('click', function(event) {
		console.log(event.target); //event target will be whatever node was clicked
		
		if (event.target.dataset.name === 'alert') {
			window.alert('HI')
		} else if (event.target.dataset.name === 'log') {
			console.log('HI')
		} else if (event.target.dataset.name === 'error') {
			console.error('HI')
		}
  });
});
