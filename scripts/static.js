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
window.addEventListener("click", function(event) {
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


//Main menu Modal Vars MOBILE
var modalMenu = document.getElementById("hamModal");
var btnMenu = document.getElementById("hamBtn");
var spanMenu = document.getElementsByClassName("closeMenu")[0];
var backMenu = document.getElementsByClassName("backMenu")[0];
var menuIconOne = document.getElementById("modalItemOne");
var menuIconTwo = document.getElementById("modalItemTwo");
var menuIconThree = document.getElementById("modalItemThree");
var menuIconFour = document.getElementById("modalItemFour");
var menuIconFive = document.getElementById("modalItemFive");
var hr = document.getElementsByClassName("menuHr");


//Modal Opening triggers MOBILE

btnMenu.onclick = function() {
  modalMenu.style.display = "block";
  backMenu.style.display = "none";

  menuIconOne.style.transform = "translate(0,0)";
  menuIconOne.style.opacity = "1";

  menuIconTwo.style.transform = "translate(0,0)";
  menuIconTwo.style.opacity = "1";

  subone.style.opacity = "0";

  menuIconThree.style.transform = "translate(0,0)";
  menuIconThree.style.opacity = "1";

  menuIconFour.style.transform = "translate(0,0)";
  menuIconFour.style.opacity = "1";

  menuIconFive.style.transform = "translate(0,0)";
  menuIconFive.style.opacity = "1";

  subtwo.style.opacity = "0";
  subtwo.style.transform = "translate(0px,0px)"

  for (var i = 0; i < hr.length; i++) {
    hr[i].style.transform = "translate(0,0)";
    hr[i].style.opacity = "1";
  }
}
spanMenu.onclick = function() {
  modalMenu.style.display = "none";
}
window.addEventListener("click", function(event) {
  if (event.target == modalMenu) {
    modalMenu.style.display = "none";
  }
});



//SUBMENU VARS MOBILE
var subone = document.getElementById("submodal-content-one");
var subtwo = document.getElementById("submodal-content-two");


//SUBMENU ONE TRIGGERS MOBILE
function submenuone() {

  backMenu.style.display = "block";

     // BACK BUTTON ANIMATION RESET
  backMenu.onclick = function() {

    backMenu.style.display = "none";
    modalMenu.style.display = "block";

    menuIconOne.style.transform = "translate(0,0)";
    menuIconOne.style.opacity = "1";

    menuIconTwo.style.transform = "translate(0,0)";
    menuIconTwo.style.opacity = "1";

    subone.style.transform = "translate(-1000px,0)"
    subone.style.transition = "opacity 0s"
    subone.style.opacity = "0";

    menuIconThree.style.transform = "translate(0,0)";
    menuIconThree.style.opacity = "1";

    menuIconFour.style.transform = "translate(0,0)";
    menuIconFour.style.opacity = "1";

    menuIconFive.style.transform = "translate(0,0)";
    menuIconFive.style.opacity = "1";

    subtwo.style.opacity = "0";
    subtwo.style.transform = "translate(0px,0px)"

    for (var i = 0; i < hr.length; i++) {
      hr[i].style.transform = "translate(0,0)";
      hr[i].style.opacity = "1";
    }

  }
  spanMenu.onclick = function() {
    modalMenu.style.display = "none";
  }
  window.addEventListener("click", function(event) {
    if (event.target == modalMenu) {
      modalMenu.style.display = "none";
    }
  });


  //Animations
  menuIconOne.style.transform = "translate(0,-300px)";
  menuIconOne.style.opacity = "0";
  menuIconOne.style.transition = "transform ease-in,transform 2s, opacity 3s";
  menuIconOne.style.overflow = "hidden";

  menuIconTwo.style.transform = "translate(0,-130px)";
  menuIconTwo.style.transition = "transform ease-in,transform 2s";
  menuIconTwo.style.overflow = "hidden";

  menuIconThree.style.transform = "translate(-600px,0px)";
  menuIconThree.style.opacity = "0";
  menuIconThree.style.transition = "transform ease-in,transform 2s, opacity 3s";
  menuIconThree.style.overflow = "hidden";

  menuIconFour.style.transform = "translate(0px,300px)";
  menuIconFour.style.opacity = "0";
  menuIconFour.style.transition = "transform ease-in,transform 2s, opacity 3s";
  menuIconFour.style.overflow = "hidden";

  menuIconFive.style.transform = "translate(0px,200px)";
  menuIconFive.style.opacity = "0";
  menuIconFive.style.transition = "transform ease-in,transform 2s, opacity 3s";
  menuIconFive.style.overflow = "hidden";

  for (var i = 0; i < hr.length; i++) {
    hr[i].style.transform = "translate(500px,0)";
    hr[i].style.opacity = "0";
    hr[i].style.transition = "transform ease-in,transform 2s, opacity 3s";
  }


  subone.style.transform = "translate(0px,-130px)"
  subone.style.opacity = "1";
  subone.style.transition = "transform ease-in,transform 0s,opacity 4s";

}

function submenutwo() {

  backMenu.style.display = "block";

  //Back button animation reset
  backMenu.onclick = function() {

    backMenu.style.display = "none";
    modalMenu.style.display = "block";

    menuIconOne.style.transform = "translate(0,0)";
    menuIconOne.style.opacity = "1";

    menuIconTwo.style.transform = "translate(0,0)";
    menuIconTwo.style.opacity = "1";

    subone.style.opacity = "0";

    menuIconThree.style.transform = "translate(0,0)";
    menuIconThree.style.opacity = "1";

    menuIconFour.style.transform = "translate(0,0)";
    menuIconFour.style.opacity = "1";

    menuIconFive.style.transform = "translate(0,0)";
    menuIconFive.style.opacity = "1";

    subtwo.style.transition = "opacity 0s"
    subtwo.style.opacity = "0";
    subtwo.style.transform = "translate(0px,0px)"

    for (var i = 0; i < hr.length; i++) {
      hr[i].style.transform = "translate(0,0)";
      hr[i].style.opacity = "1";
    }


  }
  spanMenu.onclick = function() {
    modalMenu.style.display = "none";
  }
  window.addEventListener("click", function(event) {
    if (event.target == modalMenu) {
      modalMenu.style.display = "none";
    }
  });

  menuIconOne.style.transform = "translate(0,-300px)";
  menuIconOne.style.opacity = "0";
  menuIconOne.style.transition = "transform ease-in,transform 2s, opacity 3s";
  menuIconOne.style.overflow = "hidden";

  menuIconTwo.style.transform = "translate(0,-400px)";
  menuIconTwo.style.opacity = "0";
  menuIconTwo.style.transition = "transform ease-in,transform 2s, opacity 3s";
  menuIconTwo.style.overflow = "hidden";

  menuIconThree.style.transform = "translate(-600px,0px)";
  menuIconThree.style.opacity = "0";
  menuIconThree.style.transition = "transform ease-in,transform 2s, opacity 3s";
  menuIconThree.style.overflow = "hidden";

  menuIconFour.style.transform = "translate(0px,300px)";
  menuIconFour.style.opacity = "0";
  menuIconFour.style.transition = "transform ease-in,transform 2s, opacity 3s";
  menuIconFour.style.overflow = "hidden";

  menuIconFive.style.transform = "translate(0px,-470px)";
  menuIconFive.style.transition = "transform ease-in,transform 2s";
  menuIconFive.style.overflow = "hidden";

  for (var i = 0; i < hr.length; i++) {
    hr[i].style.transform = "translate(500px,0)";
    hr[i].style.opacity = "0";
    hr[i].style.transition = "transform ease-in,transform 2s, opacity 3s";
  }


  subtwo.style.transform = "translate(0px,-430px)"
  subtwo.style.opacity = "1";
  subtwo.style.transition = "transform ease-in,transform 2s,opacity 4s";

}
