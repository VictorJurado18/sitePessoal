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
function scrollToID(event) {
  event.preventDefault();
  const ID = event.currentTarget.getAttribute('href');
  const target = document.querySelector(ID);
  target.scrollIntoView({ behavior: "smooth" });
  // fecha o menu
  btnMobile.click();
}

// Seleciona links internos
const intLinks = document.querySelectorAll('[href^="#"]');
intLinks.forEach(link => {
  link.addEventListener('click', scrollToID);
});

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
/*-----------------------------------------------------------------------------------------*/


const listaProj = ['imagens/proj1.jpg','imagens/proj2.jpg','imagens/proj3.jpg','imagens/proj4.jpg','imagens/proj5.jpg'];
const listaLink = ['https://codepen.io/victorjurado18/full/YzQOQYQ','https://codepen.io/victorjurado18/full/RwgMdEz','https://codepen.io/victorjurado18/full/OJgjzeP','https://codepen.io/victorjurado18/full/WNOXKvj','https://github.com/VictorJurado18/calculadora_argamassa/blob/main/calculadora_de_material_para_argamassa.py'];
const listaNome = ['Super Trunfo', 'AluraFlix', 'Calculadora de Média', 'Mentalista', 'Calculadora para Argamassa'];
var numero = 0
function exibeImagem(){
    
    document.getElementById("img-projetos").innerHTML = "<a href="+listaLink[numero]+" target='_blank'><img id='foto-projeto' src="+listaProj[numero]+"></a>";
    
}
function exibeNome(){
    
  document.getElementById("nomeDoProj").innerHTML = listaNome[numero];
  
}

function avancar(){
    if (numero < 4){
    numero = numero + 1;
    exibeImagem();
    exibeNome();  
  }
}

function voltar(){
    if (numero > 0){
    numero = numero - 1;
    exibeImagem();
    exibeNome();
  }
}

exibeImagem();
exibeNome();