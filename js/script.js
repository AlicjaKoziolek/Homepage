{
   const welcome = () => {
      console.log("Witaj! Miło gościć Cię na mojej stronie");
   }

   const toggleBackground = () => {
      const container = document.querySelector(".js-container");
      const themeName = document.querySelector(".js-themeName");

      container.classList.toggle("dark");

      themeName.innerText = container.classList.contains("dark") ? "jasne" : "ciemne";
   }

   const init = () => {
      const button = document.querySelector(".js-button");

      button.addEventListener("click", toggleBackground);

      welcome();
   }
   
   init();
}