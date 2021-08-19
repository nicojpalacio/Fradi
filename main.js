document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });

  function ocultarTexto(){
    document.getElementById("parrafo").classList.toggle("line-clamp")
    masInfo();
  }

  function masInfo(){
    document.getElementById("button").innerHTML= "Menos Info";
  }