// Define initial game state
let game = {
    board: [],
    dice: [],
    currentPlayer: 0, // 0 for player 1, 1 for player 2
  };
  
  // Function to initialize the game board
  function initializeBoard() {
    // Initialize the board array with empty points
    game.board = Array(24).fill(null);
    // Setup initial pieces for player 1
    game.board[0] = { player: 1, count: 2 };
    game.board[5] = { player: 2, count: 5 };
    // Setup initial pieces for player 2
    game.board[11] = { player: 1, count: 5 };
    game.board[12] = { player: 2, count: 3 };
    // Setup initial pieces for player 1
    game.board[16] = { player: 1, count: 5 };
    game.board[18] = { player: 2, count: 5 };
    // Setup initial pieces for player 2
    game.board[23] = { player: 2, count: 2 };
    // Render the board
    renderBoard();
  }
  
  // Function to render the game board
  function renderBoard() {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = ''; // Clear previous board
    for (let i = 0; i < 24; i++) {
      const point = document.createElement('div');
      point.classList.add('point');
      if (game.board[i]) {
        point.textContent = game.board[i].count;
        point.style.backgroundColor = game.board[i].player === 1 ? 'red' : 'black';
      }
      point.addEventListener('click', () => selectPoint(i));
      boardElement.appendChild(point);
    }
  }
  
  // Function to roll the dice
  function rollDice() {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    game.dice = [dice1, dice2];
    updateDiceUI();
    alert(`Dice rolled: ${dice1}, ${dice2}`);
  }
  
  // Function to update the dice UI
  function updateDiceUI() {
    const dice1Element = document.getElementById('dice1');
    const dice2Element = document.getElementById('dice2');
    dice1Element.textContent = game.dice[0];
    dice2Element.textContent = game.dice[1];
  }
  
  // Function to handle selecting a point on the board
  function selectPoint(index) {
    // Implement logic for selecting a point
    console.log(`Point ${index} selected.`);
  }
  
  // Initialize the game
  initializeBoard();
  