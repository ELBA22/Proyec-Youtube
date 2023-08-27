var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelectorAll(".sidebar");

console.log("cambios");

menuIcon.onclik =function(){
    sidebar.classList.toggle("small-sidebar");

}