/**
 * Design test page — visual state toggles only.
 * No navigation, scrolling, or functional behavior.
 */
document.addEventListener("DOMContentLoaded", () => {
  preventNavigation();
  preventFormSubmit();
  initVisualToggles();
});

/** Block hash-link scrolling and empty-link jumps */
function preventNavigation() {
  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (link) e.preventDefault();
  });

  document.querySelectorAll('a[href="#"]').forEach((link) => {
    link.setAttribute("href", "javascript:void(0)");
    link.setAttribute("role", "button");
  });
}

function preventFormSubmit() {
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (e) => e.preventDefault());
  });
}

/** Toggle CSS classes for design preview — no scroll, no DOM changes beyond classes */
function initVisualToggles() {
  initAccordion();
  initTabs();
  initExclusiveGroups();
  initDropdowns();
  initOverlays();
  initSimpleToggle();
  initDarkMode();
}

function initAccordion() {
  document.querySelectorAll(".accordion__trigger").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const item = trigger.closest(".accordion__item");
      const isOpen = item.classList.contains("is-open");
      const accordion = trigger.closest(".accordion");

      accordion?.querySelectorAll(".accordion__item").forEach((el) => {
        el.classList.remove("is-open");
        el.querySelector(".accordion__trigger")?.setAttribute("aria-expanded", "false");
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
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        buttons.forEach((b) => {
          b.classList.remove("is-active");
          b.setAttribute("aria-selected", "false");
        });
        panels.forEach((p) => p.classList.remove("is-active"));
        btn.classList.add("is-active");
        btn.setAttribute("aria-selected", "true");
        panels[index]?.classList.add("is-active");
      });
    });
  });
}

/** pill-nav, segment-control, chip-filter, view-toggle, sticky-subnav, settings-nav, sidebar */
function initExclusiveGroups() {
  const groups = [
    { root: ".pill-nav", item: ".pill-nav__btn" },
    { root: ".segment-control", item: ".segment-control__btn" },
    { root: ".view-toggle", item: "button" },
    { root: ".sticky-subnav", item: "a" },
    { root: ".settings-nav", item: "a" },
    { root: ".sidebar-demo__nav", item: "a" },
  ];

  groups.forEach(({ root, item }) => {
    document.querySelectorAll(root).forEach((container) => {
      container.querySelectorAll(item).forEach((el) => {
        el.addEventListener("click", (e) => {
          e.preventDefault();
          container.querySelectorAll(item).forEach((i) => i.classList.remove("is-active"));
          el.classList.add("is-active");
        });
      });
    });
  });

  document.querySelectorAll(".chip-filter .chip").forEach((chip) => {
    chip.addEventListener("click", (e) => {
      if (e.target.closest(".chip__remove")) return;
      e.preventDefault();
      chip.classList.toggle("is-active");
    });
  });
}

function initDropdowns() {
  document.querySelectorAll(".dropdown [data-dropdown-trigger], .user-menu").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const dd = trigger.closest(".dropdown");
      document.querySelectorAll(".dropdown.is-open").forEach((d) => {
        if (d !== dd) d.classList.remove("is-open");
      });
      dd?.classList.toggle("is-open");
    });
  });

  document.querySelectorAll("[data-mega-trigger]").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      trigger.closest(".mega-menu")?.classList.toggle("is-open");
    });
  });

  document.querySelectorAll(".split-btn__toggle").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      btn.closest(".split-btn")?.querySelector(".dropdown")?.classList.toggle("is-open");
    });
  });

  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown.is-open, .mega-menu.is-open").forEach((el) => {
      el.classList.remove("is-open");
    });
  });
}

function initOverlays() {
  const pairs = [
    { open: "#drawer-open", close: "#drawer-close", overlay: "#drawer-overlay", panel: "#drawer" },
    { open: "#modal-open", close: "#modal-close, #modal-cancel", overlay: "#modal", panel: null },
    { open: "#bottom-sheet-open", close: null, overlay: "#bottom-sheet-overlay", panel: "#bottom-sheet" },
    { open: "#confirm-open", close: "#confirm-cancel, #confirm-ok", overlay: "#confirm-modal", panel: null },
    { open: "#share-open", close: "#share-close", overlay: "#share-modal", panel: null },
  ];

  pairs.forEach(({ open, close, overlay, panel }) => {
    const openBtn = document.querySelector(open);
    const overlayEl = document.querySelector(overlay);
    const panelEl = panel ? document.querySelector(panel) : null;

    const openFn = (e) => {
      e?.preventDefault();
      overlayEl?.classList.add("is-open");
      panelEl?.classList.add("is-open");
      overlayEl?.setAttribute("aria-hidden", "false");
    };

    const closeFn = (e) => {
      e?.preventDefault();
      overlayEl?.classList.remove("is-open");
      panelEl?.classList.remove("is-open");
      overlayEl?.setAttribute("aria-hidden", "true");
    };

    openBtn?.addEventListener("click", openFn);

    if (close) {
      close.split(",").forEach((sel) => {
        document.querySelector(sel.trim())?.addEventListener("click", closeFn);
      });
    }

    overlayEl?.addEventListener("click", (e) => {
      if (e.target === overlayEl || e.target.id === overlay?.replace("#", "")) closeFn(e);
    });
  });

  document.querySelector(".chat-widget__btn")?.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".chat-widget")?.classList.toggle("is-open");
  });

  document.querySelectorAll(".popover-wrap [data-popover-trigger]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      btn.closest(".popover-wrap")?.classList.toggle("is-open");
    });
  });

  document.addEventListener("click", () => {
    document.querySelectorAll(".popover-wrap.is-open").forEach((w) => w.classList.remove("is-open"));
  });

}

function initSimpleToggle() {
  const toggleSelectors = [
    ".btn--toggle",
    ".reaction-btn",
    ".product-card__fav",
    "#like-btn",
    ".tree__toggle",
  ];

  toggleSelectors.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        el.classList.toggle("is-active");
        if (el.id === "like-btn") {
          const label = el.classList.contains("is-active") ? "いいね済" : "いいね";
          const textNode = [...el.childNodes].find((n) => n.nodeType === Node.TEXT_NODE);
          if (textNode) textNode.textContent = ` ${label}`;
        }
        if (el.classList.contains("tree__toggle")) {
          el.closest(".tree__item")?.classList.toggle("is-open");
        }
      });
    });
  });

  document.querySelectorAll(".star-rating button").forEach((star) => {
    star.addEventListener("click", (e) => {
      e.preventDefault();
      const rating = star.closest(".star-rating");
      const stars = [...rating.querySelectorAll("button")];
      const index = stars.indexOf(star);
      stars.forEach((s, i) => s.classList.toggle("is-active", i <= index));
    });
  });

  document.querySelectorAll(".read-more__toggle").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const block = btn.closest(".read-more");
      block?.classList.toggle("is-expanded");
      btn.textContent = block?.classList.contains("is-expanded") ? "閉じる" : "続きを読む";
    });
  });
}

function initDarkMode() {
  document.getElementById("dark-mode-toggle")?.addEventListener("click", (e) => {
    e.preventDefault();
    const html = document.documentElement;
    html.setAttribute("data-theme", html.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });

  document.getElementById("font-size-toggle")?.addEventListener("click", (e) => {
    e.preventDefault();
    const body = document.body;
    if (body.classList.contains("font-xl")) {
      body.classList.remove("font-xl", "font-lg");
    } else if (body.classList.contains("font-lg")) {
      body.classList.remove("font-lg");
      body.classList.add("font-xl");
    } else {
      body.classList.add("font-lg");
    }
  });
}
