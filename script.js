const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

// Toggle nav
toggle.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
);

// Open modal
open.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

// Hide modal by clicking close
close.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

// Hide modal by clicking outside of it
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.classList.remove("show-modal");
  }
});
