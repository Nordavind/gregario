document.addEventListener("DOMContentLoaded", () => {
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
});
