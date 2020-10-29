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





//SUBMENU VARS
var submodalone = document.getElementById("subModalOne");
var submodaltwo = document.getElementById("subModalTwo");
var subcloseone = document.getElementById("subCloseOne");
var subclosetwo = document.getElementById("subCloseTwo");


//SUBMENU ONE TRIGGERS
function submenuone() {
  submodalone.style.display = "inline-block";
  modalMenu.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == submodalone) {
    submodalone.style.display = "none";
  }
}
subcloseone.onclick = function() {
  submodalone.style.display = "none";
  modalMenu.style.display = "inline-block";
}


//SUBMENU TWO TRIGGERS
function submenutwo() {
  submodaltwo.style.display = "inline-block";
  modalMenu.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == submodaltwo) {
    submodaltwo.style.display = "none";
  }
}
subclosetwo.onclick = function() {
  submodaltwo.style.display = "none";
  modalMenu.style.display = "inline-block";
}
