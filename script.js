let boxes = [];

const grid = document.querySelector('.grid');

function colors () {
   boxes[i].style.backgroundColor = 'blue';
}
for (i = 0; i < 256; i++){
   boxes[i] = document.createElement('div');
   boxes[i].classList.add('box');
   grid.appendChild(boxes[i]);
   boxes[i].addEventListener('mouseover', function (e) {
      e.target.style.backgroundColor = 'blue';
   });
}



