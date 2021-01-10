const SELECTORS = {
  nav: ".js-nav",
  menu: ".js-nav-menu",
  toggleBtn: ".js-nav-toggle",
};

const CLASSES = {
  navOpen: "nav--open",
};

class Navigation {
  constructor() {
    this.isOpen = false;

    this.nav = document.querySelector(SELECTORS.nav);
    this.toggleBtn = this.nav.querySelector(SELECTORS.toggleBtn);

    this.bindEvents();
  }

  bindEvents() {
    this.toggleBtn.addEventListener("click", () => this.toggleMenu());
    document.addEventListener("click", (event) => {
      const isClickInside = event.target.closest(SELECTORS.toggleBtn, SELECTORS.menu);
      if (this.isOpen && !isClickInside) this.toggleMenu();
    });
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;

    this.nav.classList.toggle(CLASSES.navOpen);
    this.toggleBtn.setAttribute("aria-expanded", String(this.isOpen));
  }
}

if (document.querySelector(SELECTORS.nav)) {
  new Navigation();
}
