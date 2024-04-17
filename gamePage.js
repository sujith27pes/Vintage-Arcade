document.addEventListener('DOMContentLoaded', function () {
  const playButtons = document.querySelectorAll('.play-button');

  playButtons.forEach(button => {
    button.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default link behavior

      // Get the game title from the button's parent element (game card)
      const gameTitle = button.parentElement.querySelector('h2').textContent;

      // Redirect to the corresponding game page based on the game title
      if (gameTitle === 'Scrabble') {
        window.location.href = 'scrabble.html'; // Replace 'scrabble.html' with the actual URL for playing Scrabble
      } else if (gameTitle === 'Backgammon') {
        window.location.href = 'backgammon.html'; // Replace 'backgammon.html' with the actual URL for playing Backgammon
      } else if (gameTitle === 'Checkers') {
        window.location.href = 'checkers.html'; // Replace 'checkers.html' with the actual URL for playing Checkers
      }
    });
  });
});
