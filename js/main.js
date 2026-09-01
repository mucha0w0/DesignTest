document.addEventListener("DOMContentLoaded", () => {
  initAccordion();
  initTabs();
  initModal();
});

function initAccordion() {
  document.querySelectorAll(".accordion__trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".accordion__item");
      const isOpen = item.classList.contains("is-open");

      trigger.closest(".accordion")
        .querySelectorAll(".accordion__item")
        .forEach((el) => {
          el.classList.remove("is-open");
          el.querySelector(".accordion__trigger").setAttribute("aria-expanded", "false");
        });

      if (!isOpen) {
        item.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
}

function initTabs() {
  document.querySelectorAll(".tabs").forEach((tabs) => {
    const buttons = tabs.querySelectorAll(".tabs__btn");
    const panels = tabs.querySelectorAll(".tabs__panel");

    buttons.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => {
          b.classList.remove("is-active");
          b.setAttribute("aria-selected", "false");
        });
        panels.forEach((p) => p.classList.remove("is-active"));

        btn.classList.add("is-active");
        btn.setAttribute("aria-selected", "true");
        panels[index].classList.add("is-active");
      });
    });
  });
}

function initModal() {
  const overlay = document.getElementById("modal");
  const openBtn = document.getElementById("modal-open");
  const closeBtn = document.getElementById("modal-close");
  const cancelBtn = document.getElementById("modal-cancel");

  if (!overlay) return;

  const open = () => {
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
  };

  const close = () => {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
  };

  openBtn?.addEventListener("click", open);
  closeBtn?.addEventListener("click", close);
  cancelBtn?.addEventListener("click", close);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) close();
  });
}
