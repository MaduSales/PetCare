// Código do menu: destaque o link clicado
const links = document.querySelectorAll('.menu nav a');

links.forEach(link => {
  link.addEventListener('click', function () {
    links.forEach(l => l.classList.remove('selected'));
    this.classList.add('selected');
  });
});

// Código das dúvidas: abre uma, fecha as outras
const elementosDuvida = document.querySelectorAll(".duvida");

elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener("click", function () {
    elementosDuvida.forEach(function (outraDuvida) {
      if (outraDuvida !== duvida) {
        outraDuvida.classList.remove("ativa");
      }
    });
      //abre dúvida clicada
    duvida.classList.toggle("ativa");
  });
});