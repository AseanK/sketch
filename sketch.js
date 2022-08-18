const divContainer = document.querySelector('.container');
const slider = document.querySelector('#range');
const redMode = document.querySelector('.redMode');
const blueMode = document.querySelector('.blueMode');
const greenMode = document.querySelector('.greenMode');
const blackMode = document.querySelector('.blackMode');
const clear = document.querySelector('.clear');
let isDrawing = false;
let colorMode = 'black';
let size = slider.value; // https://www.delftstack.com/howto/javascript/javascript-get-input-value/

function createGrid(num) {
  let amount = num * num;
  divContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`; // gives width using users' slide input. 
  divContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`; // gives height using users' slide input.
  for (let i = 0; i < amount; i++) {
    // create div in html
    const individualDiv = document.createElement('div');
    individualDiv.style.border = '1px rgba(0, 0, 0, 0) solid';
    individualDiv.style.background = 'white';

    // appends div to the container
    divContainer.appendChild(individualDiv);
    
    // changes color based on users' mouse move
    individualDiv.addEventListener('click', function () {
      giveColor(individualDiv);
    });
    individualDiv.addEventListener('mousemove', function () {
      if (!isDrawing) return;
      giveColor(individualDiv);
    });
    individualDiv.addEventListener('mousedown', () => (isDrawing = true));
    individualDiv.addEventListener('mouseup', () => (isDrawing = false));
  }
}

createGrid(size);
// changes value with a click of the button
redMode.addEventListener('click', () => {
  colorMode = 'red';
});

blueMode.addEventListener('click', () => {
    colorMode = 'blue';
  });

greenMode.addEventListener('click', () => {
    colorMode = 'green';
  });

blackMode.addEventListener('click', () => {
  colorMode = 'black';
});

function giveColor(square) {
  if (colorMode === 'black') {
    square.style.backgroundColor = 'black';
  } else if (colorMode === 'red') {
    square.style.backgroundColor = 'red';
  } else if (colorMode === 'blue') {
    square.style.backgroundColor = 'blue';
  } else if (colorMode === 'green') {
    square.style.backgroundColor = 'green';
  }
}

// If users change size, it'll clear the container.
slider.addEventListener('change', function (e) {
  size = e.target.value;
  clearSquares();
});

// clear with a click of the button.
clear.addEventListener('click', () => {
    clearSquares();
  });

function clearSquares() {
  const squares = document.querySelectorAll('.container div');
  squares.forEach((square) => {
    divContainer.removeChild(square);
  });
  createGrid(size);
}