let navigation = document.querySelector('.navigation');
let toggle = document.querySelector('.toggle');
let copyRight = document.getElementById('wrapper');
let side_navbar = document.getElementById('side_navbar');

toggle.onclick = function() {
  navigation.classList.toggle('active');
  copyRight.classList.toggle('minwidth');
  side_navbar.classList.toggle('yo');
}