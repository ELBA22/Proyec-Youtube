import {peticionApi} from "./modulo.js";

let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".container");

menuIcon.onclick = () => {
    /* console.log("dio click"); */
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}

peticionApi();
