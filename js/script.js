const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);


const listaProj = ['imagens/proj1.jpg','imagens/proj2.jpg','imagens/proj3.jpg','imagens/proj4.jpg'];
const listaLink = ['https://codepen.io/victorjurado18/full/YzQOQYQ','https://codepen.io/victorjurado18/full/RwgMdEz','https://codepen.io/victorjurado18/full/OJgjzeP','https://codepen.io/victorjurado18/full/WNOXKvj'];

var numero = 0
function exibeImagem(){
    
    document.getElementById("img-projetos").innerHTML = "<a href="+listaLink[numero]+" target='_blank'><img id='foto-projeto' src="+listaProj[numero]+"></a>";
    
}

function avancar(){
    if (numero < 3){
    numero = numero + 1;
    console.log(numero);
    document.getElementById("img-projetos").innerHTML = "<a href="+listaLink[numero]+" target='_blank'><img id='foto-projeto' src="+listaProj[numero]+"></a>";
    }
}

function voltar(){
    if (numero > 0){
    numero = numero - 1;
    console.log(numero);
    document.getElementById("img-projetos").innerHTML = "<a href="+listaLink[numero]+" target='_blank'><img id='foto-projeto' src="+listaProj[numero]+"></a>";
    }
}

exibeImagem();