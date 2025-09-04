document.addEventListener("DOMContentLoaded", () => {

  const textMap = {
    btnDiffA: 'No solo muestra datos: <span class="bold">recomienda acciones</span>. Gregario guía al equipo para que cada visita tenga sentido y cada decisión esté respaldada por información real.',
    btnDiffB: 'El volumen de ventas ya no es cuestión de suerte. Gregario convierte buenas prácticas en hábitos, ayudando a que <span class="bold">todos vendan mejor</span>.',
    btnDiffC: '<span class="bold">Deja de vender solo lo fácil</span>. Gregario impulsa la venta total del portafolio, aumentando el valor de cada cliente sin esfuerzo adicional.',
    btnDiffD: '<span class="bold">Crece sin multiplicar el equipo</span>. Gregario mejora el rendimiento de tu fuerza actual para que puedas abarcar más ganando eficiencia.',
    btnDiffE: 'Sabrás qué hace cada vendedor, cuándo, dónde y con quién. <span class="bold">Todo queda registrado</span> y visible, sin necesidad de perseguir a nadie.',
    btnDiffF: 'Haz que <span class="bold">todo el conocimiento quede en la empresa</span> y no en los vendedores. Ya no sufrirás por los cambios en el equipo.'
  };

  const diffText = document.getElementById("diffText");
  const diffButtons = document.querySelectorAll(".diff-btn");

  diffButtons.forEach(btn => {
    btn.addEventListener("click", () => {

      diffButtons.forEach(b => b.classList.remove("active"));

      btn.classList.add("active");

      diffText.style.opacity = 0;
      diffText.style.transform = "translateY(-20px)";

      setTimeout(() => {
        diffText.innerHTML = textMap[btn.id];

        diffText.style.opacity = 1;
        diffText.style.transform = "translateY(0)";
      }, 300);
    });
  });
  
});
