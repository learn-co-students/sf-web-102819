document.addEventListener('DOMContentLoaded', function() {
  scareAfterTimeout();
  greetRepeatly();
  generateTimestamp();
  randomBackgroundColor();
  interactWithWeekdays()
  generateCharacters();
});

function scareAfterTimeout() {
  setTimeout( function() {
    document.getElementById('scare').append('BOO!');
  }, 3000)
};

function greetRepeatly() {
  setInterval( function() {
    console.log("Hello World!");
  }, 1000);
};

function generateTimestamp() {
  const time = document.getElementById('current-time');
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  time.textContent = `${hours}:${minutes}:${seconds}`
};

// Hint: chain methods on `document` to set color.
function randomBackgroundColor() {
  const colors = [null, 'blue', 'red', 'green'];
  const index = Math.floor(Math.random() * colors.length);
  document.body.style.background = colors[index];
};

function interactWithWeekdays() {
  const days = document.getElementsByTagName('li');
  for (let i = 0; i < days.length; i++) {
    if (days[i].textContent === 'Friday') {
      days[i].textContent += '!!!';
    }
  }
}

function generateCharacters() {
  const list = document.getElementById("spongebob");
  const characters = [
    'SpongeBob SquarePants',
    'Squidward Tentacles',
    'Patrick Star',
    'Mr. Krabs',
    'Sandy Cheeks'
  ];

  for (let i = 0; i < characters.length; i++) {
    let character = characters[i];
    let li = document.createElement('li');
    li.textContent = character;
    list.append(li);
  };
};
