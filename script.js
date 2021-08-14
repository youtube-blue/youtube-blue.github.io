function sleep(sleepDuration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ }
}
function showHoverMenu() {
  var menu = document.getElementById("menu");
  menu.style.display = "block";
}
function hideHoverMenu() {
  menu = document.getElementById("menu");
  menu.style.display = "none";
  sleep(1000)
}
function downloadBTN() {
  console.log("Downloading YouTube Blue installer...")
}
function technologyBTN() {
  console.log("Redirecting to YouTube Blue technology site...")
}
function documentationBTN() {
  console.log("Redirecting to YouTube Blue documentation site...")
}
function githubBTN() {
  console.log("Redirecting to YouTube Blue github...")
  window.open("https://github.com/youtube-blue","_self")
}
function scrollDown() {
  console.log("scrolling...")
}
