window.addEventListener('DOMContentLoaded', (event) => {
    var menu = document.getElementById("menu");
});
function sleep(sleepDuration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ };
}
function showHoverMenu() {
  menu.style.display = "block";
}
function hideHoverMenu() {
  menu = document.getElementById("menu");
  menu.style.display = "none";
  sleep(1000);
}
function downloadBTN() {
  document.getElementById("downloadsTitle").scrollIntoView( {behavior: "smooth" });
}
function technologyBTN() {
  window.open("https://github.com/youtube-blue/youtube-blue-wiki/blob/main/technology.md", "_self");
}
function documentationBTN() {
  window.open("https://github.com/youtube-blue/youtube-blue-wiki/blob/main/README.md", "_self");
}
function githubBTN() {
  window.open("https://github.com/youtube-blue","_self");
}
function scrollDown() {
  document.getElementById("downloadsTitle").scrollIntoView( {behavior: "smooth" });
}
function minimizeMenu() {
  //minimizedMenu.style.display="block";
  //menu.style.display="none"
}
