const modal = document.querySelector('.modal');
const btn = document.querySelector('.btn');
const close = document.querySelector('.close');

//open modal
const openModal = (e) => {
  e.preventDefault();
  modal.style.display = 'block';
};

//close modal
const closeModal = () => {
  modal.style.display = 'none';
};

btn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);
