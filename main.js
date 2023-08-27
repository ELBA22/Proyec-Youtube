let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
console.log("funcionando");

menuIcon.onclick = () => {
    /* console.log("dio click"); */
    sidebar.classList.toggle("small-sidebar");
}
