document.addEventListener("DOMContentLoaded", () => {

  //navbar
  const navbar = document.getElementById("navDeploy");
  const navLink = document.getElementById('navLink');
  const navList = navbar.querySelector('ul');

  const toggleNavBar = (navbarElement, navLink) => {
    navLink.classList.toggle("active");
    navbarElement.classList.toggle("open");
  };

  navLink.addEventListener('click', () => toggleNavBar(navbar, navLink));

  navList.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON') {
      toggleNavBar(navbar, navLink);
    }
  });

  // clients logo swiper
  const clientsLogosSwiper = new Swiper('.swiper-clients-logos', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    loop: true,
    speed: 1000,
    freeMode: true,
    freeModeMomentum: false,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    }
  });

  // testimonials swiper
  const TestimonialsSwiper = new Swiper('.swiper-testimonials', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    freeMode: false,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    }
  });

  // differences desktop
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

  // accordion
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(item => {
    const btn = item.querySelector(".accord-btn");

    btn.addEventListener("click", () => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        btn.classList.remove("active");
      } else {
        accordionItems.forEach(i => {
          i.classList.remove("active");
          i.querySelector(".accord-btn").classList.remove("active");
        });
        item.classList.add("active");
        btn.classList.add("active");
      }

      btn.blur();
    });
  });

  // counter home
  new PureCounter({
    selector: '#numberOne',
    start: 44,
    end: 4,
    duration: 1.0,
    delay: 10,
    once: false,
    repeat: true,
    decimals: 0,
    legacy: true,
    filesizing: false,
    currency: false,
    separator: false,
  });

  new PureCounter({
    selector: '#numberTwo',
    start: 130,
    end: 90,
    duration: 1.0,
    delay: 10,
    once: false,
    repeat: true,
    decimals: 0,
    legacy: true,
    filesizing: false,
    currency: false,
    separator: false,
  });

  new PureCounter({
    selector: '#numberThree',
    start: 63,
    end: 23,
    duration: 1.0,
    delay: 10,
    once: false,
    repeat: true,
    decimals: 0,
    legacy: true,
    filesizing: false,
    currency: false,
    separator: false,
  });

  new PureCounter({
    selector: '#numberFour',
    start: 53,
    end: 13,
    duration: 1.0,
    delay: 10,
    once: false,
    repeat: true,
    decimals: 0,
    legacy: true,
    filesizing: false,
    currency: false,
    separator: false,
  });

});
