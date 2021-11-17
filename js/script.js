{
   const welcome = () => {
      console.log("Witaj! Miło gościć Cię na mojej stronie");
   }

   const toggleBackground = () => {
      const container = document.querySelector(".js-container");
      const themeName = document.querySelector(".js-themeName");

      container.classList.toggle("dark");

      if (container.classList.contains("dark")) {
         themeName.innerText = "jasne";
      } else {
         themeName.innerText = "ciemne";
      }
   }

   const init = () => {
      const button = document.querySelector(".js-button");

      button.addEventListener("click", toggleBackground);

      welcome();
   }
   
   init();
}