const list = document.querySelector('.slider__list');
const leftArrow = document.querySelector('.slider__arrow--left');
const rightArrow = document.querySelector('.slider__arrow--right');
const width = 100;
const count = 8;
const displayWidth = 300;

let shift = 0;
leftArrow.addEventListener('click', function(event) {
  event.preventDefault();
  if (shift > - (count*width - displayWidth)) {shift -= width;}
  list.style.transform = `translateX(${shift}px)`;
});

rightArrow.addEventListener('click', function(event) {
  event.preventDefault();
  if (shift < 0) {shift += width;}
  list.style.transform = `translateX(${shift}px)`;
});



const btn = document.querySelector('.button');
const task2 = document.querySelector('.task2');

btn.addEventListener('click', function(event) {
  event.preventDefault();
  
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  task2.appendChild(overlay);
  
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.textContent = 'Модальное окно';
  task2.appendChild(modal);
  
  const btnClose = document.createElement('div');
  btnClose.classList.add('btn-close');
  btnClose.textContent = "X";
  modal.appendChild(btnClose);
  
  overlay.addEventListener('click', function() {
  task2.removeChild(overlay);
  task2.removeChild(modal);
  })
  
  btnClose.addEventListener('click', function() {
  task2.removeChild(overlay);
  task2.removeChild(modal);
  })
});


