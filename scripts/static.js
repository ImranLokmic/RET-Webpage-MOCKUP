//Region Modal Menu functions
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//Main menu Modal functions
var modalMenu = document.getElementById("hamModal");
var btnMenu = document.getElementById("hamBtn");
var spanMenu = document.getElementsByClassName("closeMenu")[0];
btnMenu.onclick = function() {
  modalMenu.style.display = "block";
}
spanMenu.onclick = function() {
  modalMenu.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalMenu) {
    modalMenu.style.display = "none";
  }
}
