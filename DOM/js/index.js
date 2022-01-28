//Задание 1
const list = document.querySelector('.slider__list');
const item = document.querySelector('.slider__item');
const display = document.querySelector('.slider');
const leftArrow = document.querySelector('.slider__arrow--left');
const rightArrow = document.querySelector('.slider__arrow--right');

// get width info
commonStyle = getComputedStyle(list);
commonWidth = parseInt(commonStyle.width);
itemStyle = getComputedStyle(item);
itemWidth = parseFloat(itemStyle.width) + parseFloat(itemStyle.borderWidth)*2;
displayStyle = getComputedStyle(display);
displayWidth = parseInt(displayStyle.width);


let shift = 0;
leftArrow.addEventListener('click', function(event) {
  event.preventDefault();
  if (shift > - (commonWidth - displayWidth)) {shift -= itemWidth;}
  list.style.transform = `translateX(${shift}px)`;
});

rightArrow.addEventListener('click', function(event) {
  event.preventDefault();
  if (shift < 0) {shift += itemWidth;}
  list.style.transform = `translateX(${shift}px)`;
});

document.addEventListener('keydown', function(event) {
  if (event.key == 'ArrowLeft'){
    if (shift > - (commonWidth - displayWidth)) {shift -= itemWidth;}
    list.style.transform = `translateX(${shift}px)`;
  } 
  else if (event.key == 'ArrowRight'){
    if (shift < 0) {shift += itemWidth;}
    list.style.transform = `translateX(${shift}px)`;
  }
  console.log(event.key);
});



//Задание 2
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
  
  document.addEventListener('keydown', function(event) {
    if (event.key == 'Escape'){
      task2.removeChild(overlay);
      task2.removeChild(modal);
    } 
  })

});


