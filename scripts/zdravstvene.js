var opsirno = document.getElementById("opsirnobtn");
var opsirnotext = document.getElementsByClassName("opsirno")[0];
var info = document.getElementById("info");
var infotext = document.getElementsByClassName("infotext")[0];

opsirno.onclick = function(){
  opsirno.style.color = "red";
  opsirno.style.borderBottom = "4px solid red";
  opsirnotext.style.display = "inline";
  infotext.style.display = "none";
  info.style.color = "grey";
  info.style.borderBottom = "4px solid grey";
}

info.onclick = function(){
  info.style.color = "red";
  info.style.borderBottom = "4px solid red";
  opsirnotext.style.display = "none";
  infotext.style.display = "inline";
  opsirno.style.color = "grey";
  opsirno.style.borderBottom = "4px solid grey";
}
