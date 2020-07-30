//
let gamePlaying = false;
let gridCount = 20; // will be user input on clear
let gridBoxes;
let gridArea = document.getElementById('grid-area');
let randomizeColors = false;

// grid area size

// creating grid to draw on
function gridCreation() {
  gridArea.textContent = '';
  for (let i = 0; i < gridCount ** 2; i++) {
    let gridBox = document.createElement('div');
    gridBox.classList.add('grid-box');

    // bg changing on mouseenter
    gridBox.addEventListener('mouseenter', () => {
      if (gamePlaying) {
        if (randomizeColors) {
          gridBox.style.background = randomHexColor();
        } else {
          gridBox.style.background = '#000';
        }
      }
    });

    gridArea.appendChild(gridBox);
  }

  // laying the grids for the input size after player clears the board
  gridArea.style.cssText = `grid-template-columns: repeat(${gridCount}, 1fr);`;
}

gridCreation();

// Buttons

// Set gamePlaying to true once player clicks start
document.getElementById('start-btn').addEventListener('click', () => {
  gamePlaying = true;
});

// clear button, clears and reizes boards
let clearButton = document.querySelector('#clear-btn');
clearButton.addEventListener('click', () => {
  gridBoxes = document.querySelectorAll('.grid-box');
  gridBoxes.forEach((box) => (box.style.background = '#fff'));
  gridCount = prompt('How many grids');
  gridCreation();
});

// Randomize colors
document.getElementById('random-btn').addEventListener('click', () => {
  randomizeColors ? (randomizeColors = false) : (randomizeColors = true);
});

function randomHexColor() {
  const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let num;
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    num = Math.floor(Math.random() * 16);
    hex += values[num];
  }
  return hex;
}
