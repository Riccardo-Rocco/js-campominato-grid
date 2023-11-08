document.getElementById('generate-grid').addEventListener('click', generateGrid);

function generateGrid() {
  var gridContainer = document.getElementById('grid-container');
  gridContainer.innerHTML = '';

  var difficulty = document.getElementById('difficulty').value;
  var gridSize = 0;
  var gridRows = 0;
  var gridColumns = 0;

  if (difficulty === '1') {
    gridSize = 100;
    gridRows = 10;
    gridColumns = 10;
  } else if (difficulty === '2') {
    gridSize = 81;
    gridRows = 9;
    gridColumns = 9;
  } else if (difficulty === '3') {
    gridSize = 64;
    gridRows = 8;
    gridColumns = 8;
  }

  gridContainer.style.gridTemplateColumns = `repeat(${gridColumns}, 1fr)`;

  for (var i = 1; i <= gridSize; i++) {
    var cell = document.createElement('div');
    cell.classList.add('grid-cell');
    cell.textContent = i;
    gridContainer.appendChild(cell);
  }

  var gridCells = document.getElementsByClassName('grid-cell');

  for (var i = 0; i < gridCells.length; i++) {
    gridCells[i].addEventListener('click', handleClick);
    gridCells[i].addEventListener('contextmenu', handleRightClick);
  }
}

function handleClick(event) {
  var cell = event.target;
  cell.classList.toggle('clicked');
  console.log('Cella cliccata:', cell.textContent);
}

function handleRightClick(event) {
  event.preventDefault();
  var cell = event.target;
  cell.classList.remove('clicked');
}
