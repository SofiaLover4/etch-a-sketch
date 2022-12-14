let boxes = [];
let gridSize = 256;
let gridNum = 16;
let boxSize = 43.75;

const grid = document.querySelector('.grid');
const gridSizeBtn = document.querySelector('.question');
const resetBtn = document.querySelector('.reset');
const blackBtn = document.querySelector('.black');
const rainbowBtn = document.querySelector('.rainbow');

gridSizeBtn.addEventListener('click',loadNewGrid);
resetBtn.addEventListener('click', () =>{
   let oldBoxes = document.querySelectorAll('.box');
   oldBoxes.forEach(box => {
      box.style.backgroundColor = "white";
      box.style.borderColor = "black";
      box.addEventListener('mouseover', function (e) {
         e.target.style.backgroundColor = 'black';
         e.target.style.borderColor = 'black';
      }, {once : true});
   });
});

blackBtn.addEventListener('click', () => {
   let boxes = document.querySelectorAll('.box');
   boxes.forEach( box => {
      box.addEventListener('mouseover', function (e) {
         e.target.style.backgroundColor = 'black';
         e.target.style.borderColor = 'black'
      }, {once : true});
   });
});

rainbowBtn.addEventListener('click', () => {
   let boxes = document.querySelectorAll('.box');
   boxes.forEach( box => {
      box.addEventListener('mouseover', function (e) {
         randValue =  `rgb(${RandomRGBvalue()},${RandomRGBvalue()},${RandomRGBvalue()})`;
         e.target.style.backgroundColor = randValue;
         e.target.style.borderColor = randValue;
      }, {once : true});
   });
});

loadGrid();


function loadNewGrid () {
   getgridSize();
   if (gridNum === null || isNaN(gridNum) === true) {
      return;
   } else {
      let oldBoxes = document.querySelectorAll('.box');
      oldBoxes.forEach(thing => {
         grid.removeChild(thing);
      });
      loadGrid();
   }
}

function loadGrid () {
   for (i = 0; i < gridSize; i++){
      boxes[i] = document.createElement('div');
      boxes[i].classList.add('box');
      boxes[i].style.height = `${boxSize}px`;
      boxes[i].style.width  = `${boxSize}px`;
      boxes[i].style.backgroundColor = 'white';
      grid.appendChild(boxes[i]);
      boxes[i].addEventListener('mouseover', function (e) {
         e.target.style.backgroundColor = 'black';
         e.target.style.borderColor = 'black';
      }, {once : true});
   }
}

function getgridSize (){
   gridNum = prompt("How big would you like your grid? \(Enter how many squares you would like per side\)");
   if (isNaN(gridNum) === true) {
      alert("This is not a number! Try again!")
   } else if (gridNum === null) {
      return false;
   } else if (gridNum > 100) {
      alert("Sorry this number is too big!");
   } else {
      gridSize = gridNum * gridNum;
      boxSize = Math.round(Math.sqrt(490000 / (gridNum * gridNum)) * 1000) / 1000;
   }
}

function RandomRGBvalue () {
   return rgbValue = Math.floor(Math.random() * 254) + 1;
} 




