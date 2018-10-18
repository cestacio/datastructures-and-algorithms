/*
Setup the Minesweeper board game with three inputs.
Create a N x M board. Randomly place mines on the board. Return the updated board.
*/

function minesweeper(col, rows, mines) {
  let board = [];
  let minesCount = 0;

  // build board
  for (let i = 0; i < rows; i++) {
    board.push(
      Array.from({
        length: col
      })
    );
  }

  for (let j = 0; j < rows; j++) {
    // generate random pair of indices to place mines
    let randIntCol = Math.floor(Math.random() * col);
    let randIntRows = Math.floor(Math.random() * rows);

    if (!board[randIntRows][randIntCol] && minesCount !== mines) {
      board[randIntRows][randIntCol] = 'm';
      minesCount++;
    }
  }

  return board;
}

minesweeper(4, 6, 5);
