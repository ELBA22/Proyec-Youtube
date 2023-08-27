var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelectorAll(".sidebar");

menuIcon.onclik =function(){
    sidebar.classList.toggle("small-sidebar");
    
}