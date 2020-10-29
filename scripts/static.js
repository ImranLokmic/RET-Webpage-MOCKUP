//Region Modal Menu functions
var modalRegion = document.getElementById("myModal");
var btnRegion = document.getElementById("myBtn");
var closeRegion = document.getElementsByClassName("close")[0];

btnRegion.onclick = function() {
  modalRegion.style.display = "block";
}
closeRegion.onclick = function() {
  modalRegion.style.display = "none";
}
window.addEventListener("click", function(event){
  if (event.target == modalRegion) {
    modalRegion.style.display = "none";
  }
});





//Main menu dropdown colorchagers vars
var mainmenu = document.getElementById("horiznav");
var submenuitemone = document.getElementById("subitemone");
var submenuitemtwo = document.getElementById("subitemtwo");
var submenuitemthree = document.getElementById("subitemthree");
var submenuitemfour = document.getElementById("subitemfour");

//Triggers
submenuitemone.onmouseover = function(){
  mainmenu.style.background = "rgb(87,87,102)";
  mainmenu.style.color = "rgb(76,175,80)";
};
submenuitemone.onmouseout = function(){
  mainmenu.style.background = "rgb(76,175,80)";
  mainmenu.style.background = "-moz-linear-gradient(0deg, rgba(76,175,80,1) 0%, rgba(76,175,80,1) 84%, rgba(129,156,129,1) 100%)"
  mainmenu.style.background = "-webkit-linear-gradient(0deg, rgba(76,175,80,1) 0%, rgba(76,175,80,1) 84%, rgba(129,156,129,1) 100%)"
  mainmenu.style.background = "linear-gradient(0deg, rgba(76,175,80,1) 0%, rgba(76,175,80,1) 84%, rgba(129,156,129,1) 100%)";
}

submenuitemtwo.onmouseover = function(){
  mainmenu.style.background = "rgb(87,87,102)";
  mainmenu.style.color = "rgb(76,175,80)";
};
submenuitemtwo.onmouseout = function(){
  mainmenu.style.background = "rgb(76,175,80)";
  mainmenu.style.background = "-moz-linear-gradient(0deg, rgba(76,175,80,1) 0%, rgba(76,175,80,1) 84%, rgba(129,156,129,1) 100%)"
  mainmenu.style.background = "-webkit-linear-gradient(0deg, rgba(76,175,80,1) 0%, rgba(76,175,80,1) 84%, rgba(129,156,129,1) 100%)"
  mainmenu.style.background = "linear-gradient(0deg, rgba(76,175,80,1) 0%, rgba(76,175,80,1) 84%, rgba(129,156,129,1) 100%)";
}

submenuitemthree.onmouseover = function(){
  mainmenu.style.background = "rgb(87,87,102)";
  mainmenu.style.color = "rgb(76,175,80)";
};
submenuitemthree.onmouseout = function(){
  mainmenu.style.background = "rgb(76,175,80)";
  mainmenu.style.background = "-moz-linear-gradient(0deg, rgba(76,175,80,1) 0%, rgba(76,175,80,1) 84%, rgba(129,156,129,1) 100%)"
  mainmenu.style.background = "-webkit-linear-gradient(0deg, rgba(76,175,80,1) 0%, rgba(76,175,80,1) 84%, rgba(129,156,129,1) 100%)"
  mainmenu.style.background = "linear-gradient(0deg, rgba(76,175,80,1) 0%, rgba(76,175,80,1) 84%, rgba(129,156,129,1) 100%)";
}

submenuitemfour.onmouseover = function(){
  mainmenu.style.background = "rgb(87,87,102)";
  mainmenu.style.color = "rgb(76,175,80)";
};
submenuitemfour.onmouseout = function(){
  mainmenu.style.background = "rgb(76,175,80)";
  mainmenu.style.background = "-moz-linear-gradient(0deg, rgba(76,175,80,1) 0%, rgba(76,175,80,1) 84%, rgba(129,156,129,1) 100%)"
  mainmenu.style.background = "-webkit-linear-gradient(0deg, rgba(76,175,80,1) 0%, rgba(76,175,80,1) 84%, rgba(129,156,129,1) 100%)"
  mainmenu.style.background = "linear-gradient(0deg, rgba(76,175,80,1) 0%, rgba(76,175,80,1) 84%, rgba(129,156,129,1) 100%)";
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
window.addEventListener("click", function(event) {
  if (event.target == modalMenu) {
    modalMenu.style.display = "none";
  }
});





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
window.addEventListener("click", function(event) {
  if (event.target == submodalone) {
    submodalone.style.display = "none";
  }
});

subcloseone.onclick = function() {
  submodalone.style.display = "none";
  modalMenu.style.display = "inline-block";
}


//SUBMENU TWO TRIGGERS
function submenutwo() {
  submodaltwo.style.display = "inline-block";
  modalMenu.style.display = "none";
}

window.addEventListener("click", function(event) {
  if (event.target == submodaltwo) {
    submodaltwo.style.display = "none";
  }
});

subclosetwo.onclick = function() {
  submodaltwo.style.display = "none";
  modalMenu.style.display = "inline-block";
}
