const count = document.querySelector('.count');
// const subtract = document.querySelector('.subtract');
// const reset = document.querySelector('.reset');
// const add = document.querySelector('.add');
const buttons = document.querySelector('.buttons');

// using event deligation
buttons.addEventListener('click', (e) => {
  if (e.target.classList.contains('add')) {
    count.innerHTML++;
    setColor();
  } else if (e.target.classList.contains('subtract')) {
    count.innerHTML--;
    setColor();
  } else if (e.target.classList.contains('reset')) {
    count.innerHTML = 0;
    setColor();
  }
});

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = 'yellow';
  } else if (count.innerHTML < 0) {
    count.style.color = 'orangered';
  } else {
    count.style.color = 'white';
  }
}
// add.addEventListener('click', () => {
//   count.innerHTML++;
// });

// subtract.addEventListener('click', () => {
//   count.innerHTML--;
// });
// reset.addEventListener('click', () => {
//   count.innerHTML = 0;
// });
