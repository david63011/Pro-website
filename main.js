const hamburger = document.querySelector('.ham-btn1');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.overlaymenu1');
const cancel = document.querySelector('.cancel');
const port = document.querySelector('.items-port');
const contact = document.querySelector('.items-contact');
const about = document.querySelector('.items-about');

hamburger.addEventListener('click', () => {
  menu.style.display = 'block';
  overlay.style.display = 'block';
});

cancel.addEventListener('click', () => {
  overlay.style.display = 'none';
});

port.addEventListener('click', () => {
  overlay.style.display = 'none';
});

about.addEventListener('click', () => {
  overlay.style.display = 'none';
});

contact.addEventListener('click', () => {
  overlay.style.display = 'none';
});
