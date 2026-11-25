// Behaviour for the /landscaping/ page: mobile menu, header shadow and footer year.
// Kept separate from src/main.js so the home page script stays unchanged.

const btn = document.getElementById('menuBtn');
const menu = document.getElementById('mobileMenu');
const iconOpen = document.getElementById('iconOpen');
const iconClose = document.getElementById('iconClose');

function setMenu(open) {
  menu.classList.toggle('hidden', !open);
  iconOpen.classList.toggle('hidden', open);
  iconClose.classList.toggle('hidden', !open);
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}
btn.addEventListener('click', () => setMenu(menu.classList.contains('hidden')));
menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

// Header shadow on scroll
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => header.classList.toggle('shadow-md', window.scrollY > 10), { passive: true });

document.getElementById('year').textContent = new Date().getFullYear();
