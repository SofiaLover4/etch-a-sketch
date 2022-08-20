let boxes = [];

const grid = document.querySelector('.grid');

for (i = 0; i < 256; i++){
   boxes[i] = document.createElement('div');
   boxes[i].classList.add('box');
   grid.appendChild(boxes[i]);
}



