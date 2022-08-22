let boxes = [];
let gridSize = 256;
let gridNum = 16;
let boxSize = 43.75;

const grid = document.querySelector('.grid');
const gridSizeBtn = document.querySelector('.question');

gridSizeBtn.addEventListener('click',loadNewGrid);

loadGrid();

function colors () {
   boxes[i].style.backgroundColor = 'blue';
}

function loadNewGrid () {
   getgridSize();
   let oldBoxes = document.querySelectorAll('.box');
   oldBoxes.forEach(thing => {
      grid.removeChild(thing);
   });
   loadGrid();
}
function loadGrid () {
   for (i = 0; i < gridSize; i++){
      boxes[i] = document.createElement('div');
      boxes[i].classList.add('box');
      boxes[i].style.height = boxSize.toString() + "px";
      boxes[i].style.width  = boxSize.toString() + "px";
      grid.appendChild(boxes[i]);
      boxes[i].addEventListener('mouseover', function (e) {
         e.target.style.backgroundColor = 'blue';
      });
   }
}

function getgridSize (){
   gridNum = prompt("How big would you like your grid? \(Enter how many squares you would like per side\)");
   gridSize = gridNum * gridNum;
   boxSize = Math.round(Math.sqrt(490000 / (gridNum * gridNum)) * 1000) / 1000; 
}





