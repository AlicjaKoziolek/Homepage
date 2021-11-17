console.log("Witaj! Miło gościć Cię na mojej stronie");

let button = document.querySelector(".js-button");
let container = document.querySelector(".js-container");
let themeName = document.querySelector(".js-themeName");

button.addEventListener("click", () => {
    container.classList.toggle("dark"); 

    if (container.classList.contains("dark")) {
        themeName.innerText = "jasne";
     } else {
        themeName.innerText = "ciemne";
     }
    });
