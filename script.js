
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".fork-card");
  const overlay = document.querySelector(".fork-overlay");

  cards.forEach(card => {
    const btn = card.querySelector(".toggle-btn");

    btn.addEventListener("click", (e) => {
      e.stopPropagation();

      cards.forEach(c => {
        if (c !== card) c.classList.remove("open");
      });

      const isOpen = card.classList.contains("open");
      card.classList.toggle("open");
      document.body.classList.toggle("modal-open", !isOpen);
    });
  });

  document.addEventListener("click", () => {
    cards.forEach(c => c.classList.remove("open"));
    document.body.classList.remove("modal-open");
  });

  cards.forEach(card => {
    card.addEventListener("click", e => e.stopPropagation());
  });
});

