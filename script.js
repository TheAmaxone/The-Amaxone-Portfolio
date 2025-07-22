
document.addEventListener('DOMContentLoaded', () => {
  const text = "Web Developer · Programmer · Video Editor · Game Dev";
  const el = document.querySelector(".typing-text");
  el.textContent = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, 40);
    }
  }
  type();
});

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  navbar.style.top = (st > lastScrollTop) ? "-100px" : "0";
  lastScrollTop = st <= 0 ? 0 : st;
});

const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);
sections.forEach(section => observer.observe(section));
function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('active');
}
