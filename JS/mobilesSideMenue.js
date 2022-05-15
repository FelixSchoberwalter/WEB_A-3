
  function menue(parameter) {
  

  var sideMenue = document.getElementById("sideMenue")
  var mainHeight = document.getElementById(parameter).offsetHeight;

  if (sideMenue.style.display == "none") {
    sideMenue.style.display = "initial"
    sideMenue.style.height = mainHeight + "px";
    
  } else {
    sideMenue.style.display = "none"
  }
}