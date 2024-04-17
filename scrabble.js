document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
  
    // Create the Scrabble board
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 15; j++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.dataset.row = i;
        tile.dataset.col = j;
        tile.textContent = `${i},${j}`;
        board.appendChild(tile);
      }
    }
  
    // Add event listeners for placing tiles
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => {
      tile.addEventListener("click", () => {
        const row = tile.dataset.row;
        const col = tile.dataset.col;
        alert(`Placed tile at position (${row},${col})`);
      });
    });
  });
  