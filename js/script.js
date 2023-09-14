//Ativando o menu mobile
function mostrarMenu() {
  $("nav#nav-esq ul.menu-principal").css("display", "flex");
  $("nav#nav-esq ul.menu-principal").addClass(
    "animate_animated animate_fadeInRight animate_slow"
  );

  $("nav#nav-esq ul#icone-menu li#menu").css("display", "none");
  $("nav#nav-esq ul#icone-menu li#menuX").css("display", "flex");
}

function esconderMenu() {
  $("nav#nav-esq ul.menu-principal").css("display", "none");

  $("nav#nav-esq ul#icone-menu li#menu").css("display", "flex");
  $("nav#nav-esq ul#icone-menu  li#menuX").css("display", "none");
}

//chamar função
let controle = true;

$("nav#nav-esq ul#icone-menu").click(function() {
  if (controle == true) {
    //pra dizer que a função mostrar Menu é true
    mostrarMenu();
    controle = false; // passa a false pq ele tem que se preparar para chamar de novo
  } else {
    esconderMenu();
    controle = true;
  }
});
