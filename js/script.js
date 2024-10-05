//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika menu-makanan di klik
document.querySelector("#menu-makanan").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const makanan = document.querySelector("#menu-makanan");

document.addEventListener("click", function (e) {
  if (!makanan.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
