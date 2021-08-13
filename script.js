function sleep(sleepDuration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ }
}
function showHoverMenu() {
  var menu = document.getElementById("menu");
  menu.style.display = "block";
}
function hideHoverMenu() {
  var menu = document.getElementById("menu");
  menu.style.display = "none";
}
