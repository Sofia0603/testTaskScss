const sidebar = document.querySelector(".sidebar");
const button = document.querySelector(".sidebar__button");
const main = document.querySelector("main");

if (sidebar && button && main) {
  button.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("sidebar--open");
    main.classList.toggle("open-nav", isOpen);
  });
}

document.addEventListener("click", (e) => {
  const isClickInsideSidebar = sidebar.contains(e.target);
  const isClickOnButton = button.contains(e.target);

  if (!isClickInsideSidebar && !isClickOnButton) {
    sidebar.classList.remove("sidebar--open");
    main.classList.remove("open-nav");
  }
});
