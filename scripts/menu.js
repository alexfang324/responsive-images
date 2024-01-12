// JavaScript Document

// Responsive Menu - Dropdown
const body = document.body;
const btnMenu = document.getElementById('btn-menu');
const bar = document.getElementById('bar');
const nav = document.querySelector('.menu-wrapper');
const menu = document.querySelector('.menu');

btnMenu.addEventListener('click', openMenu);
// Prevents the focus state from activating
btnMenu.addEventListener('mousedown', function (e) {
  e.preventDefault();
});

function openMenu() {
  btnMenu.classList.toggle('open');
  btnMenu.classList.toggle('hamburger-guide');
  nav.classList.toggle('open');
  nav.classList.toggle('active');
  menu.classList.toggle('menu-active');
}
