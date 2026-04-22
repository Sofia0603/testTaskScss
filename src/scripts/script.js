const sidebar = document.querySelector(".sidebar");
const button = document.querySelector(".sidebar__button");
const main = document.querySelector("main");
const buttonHeader = document.querySelector(".header__button-open");

function isMobile() {
  return window.innerWidth < 1024;
}

function setSidebar(open) {
  sidebar.classList.toggle("sidebar--open", open);

  document.body.classList.toggle("sidebar-open", open);

  if (!isMobile()) {
    main.classList.toggle("open-nav", open);
  }
}

if (sidebar && button && main) {
  button.addEventListener("click", () => {
    const isOpen = sidebar.classList.contains("sidebar--open");
    setSidebar(!isOpen);
  });
}

if (buttonHeader) {
  buttonHeader.addEventListener("click", (e) => {
    e.stopPropagation();

    const isOpen = sidebar.classList.contains("sidebar--open");
    setSidebar(!isOpen);
  });
}

document.addEventListener("click", (e) => {
  const isClickInsideSidebar = sidebar.contains(e.target);
  const isClickOnButton = button.contains(e.target) || (buttonHeader && buttonHeader.contains(e.target));

  if (!isClickInsideSidebar && !isClickOnButton) {
    setSidebar(false);
  }
});
