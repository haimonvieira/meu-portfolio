function abrirMenu() {
  let cabecalho = document.querySelector(".cabecalho");
  let corpo = document.body;
  let cabecalhoMenu = document.querySelector(".cabecalho__menu");
  let cabecalhoMenuDestaque = document.querySelector(
    ".cabecalho__menu__destaque"
  );
  let menu = document.querySelector(".menu-inativo");
  let menuBar = document.querySelector(".menu-bar");
  let barra1 = document.querySelector(".menu-ativo .barra-1");
  let barra2 = document.querySelector(".menu-ativo .barra-2");
  let barra3 = document.querySelector(".menu-ativo .barra-3");

  menuBar.style.marginBottom = "10px";
  menu.classList.toggle("menu-ativo");
  cabecalhoMenuDestaque.style.padding = "2%";
  cabecalhoMenuDestaque.style.width = "100%";

  cabecalho.classList.toggle("cabecalho-menu-ativo");

  if (cabecalho.classList.contains("cabecalho-menu-ativo")) {
    cabecalhoMenu.style.display = "flex";
    cabecalhoMenu.style.flexDirection = "column";
    corpo.style.overflow = "hidden";
  } else {
    cabecalhoMenu.style.display = "none";
    corpo.style.overflow = "";
  }

  if (cabecalho.classList.contains("cabecalho-menu-ativo")) {
  } else {
    //Fechando o Menu
    cabecalho.style.height = "";
    menuBar.style.marginBottom = "";
    barra1.style.transition = "0.3s";
    barra2.style.transition = "0.3s";
    barra3.style.transition = "0.3s";
  }
}

function alternarModoEscuro() {
  let modoToggle = document.querySelector(".modo-toggle");
  let corpo = document.body;
  let menuBar = document.querySelector(".menu-bar");
  corpo.classList.toggle("modo-escuro");

  localStorage.setItem("modoEscuro", corpo.classList.contains("modo-escuro"));

  menuBar.style.backgroundColor = corpo.classList.contains("modo-escuro")
    ? "rgb(104, 104, 104)"
    : "#fff";
  modoToggle.style.backgroundColor = corpo.classList.contains("modo-escuro")
    ? "#555"
    : "#ddd";

  let bola = document.querySelector(".bola");
  bola.classList.toggle("bola-modo-escuro");
}

document.addEventListener("DOMContentLoaded", function () {
  let corpo = document.body;
  let bola = document.querySelector(".bola");
  let modoToggle = document.querySelector(".modo-toggle");
  let menuBar = document.querySelector(".menu-bar");
  let modoEscuroSalvo = localStorage.getItem("modoEscuro") === "true";

  if (modoEscuroSalvo) {
    corpo.classList.add("modo-escuro");
    bola.classList.add("bola-modo-escuro");
    modoToggle.style.backgroundColor = "#555";
    menuBar.style.backgroundColor = "rgb(104, 104, 104)";
  }
});

