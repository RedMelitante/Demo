// Behaviour for the Notlee Landscapes page (/landscaping/), from the design handoff.
// Loaded as an ES module, so it runs after the DOM is parsed and is scoped automatically.

// Sticky header: solid background after scrolling past the top of the hero
var header = document.getElementById('site-header');
function onScroll() { header.classList.toggle('is-solid', window.scrollY > 40 || menuOpen); }
var menuOpen = false;
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
var btn = document.getElementById('menu-btn');
var menu = document.getElementById('mobile-menu');
var iconOpen = document.getElementById('icon-open');
var iconClose = document.getElementById('icon-close');
function setMenu(open) {
  menuOpen = open;
  menu.classList.toggle('hidden', !open);
  iconOpen.classList.toggle('hidden', open);
  iconClose.classList.toggle('hidden', !open);
  btn.setAttribute('aria-expanded', String(open));
  btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  onScroll();
}
btn.addEventListener('click', function () { setMenu(!menuOpen); });
menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
window.addEventListener('resize', function () { if (window.innerWidth >= 1024 && menuOpen) setMenu(false); });

// Hero 3D cards follow the mouse slightly (desktop, unless reduced motion)
var stack = document.getElementById('hero-stack');
var hero = document.getElementById('top');
if (stack && window.matchMedia('(hover: hover) and (min-width: 1024px)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  hero.addEventListener('mousemove', function (e) {
    var r = hero.getBoundingClientRect();
    var x = (e.clientX - r.left) / r.width - 0.5;
    var y = (e.clientY - r.top) / r.height - 0.5;
    stack.style.transform = 'rotateY(' + (-16 + x * 14) + 'deg) rotateX(' + (8 - y * 10) + 'deg)';
  });
  hero.addEventListener('mouseleave', function () { stack.style.transform = ''; });
}

// Blog articles: open/close the pop-ups
document.querySelectorAll('[data-article]').forEach(function (b) {
  b.addEventListener('click', function () {
    var d = document.getElementById(b.getAttribute('data-article'));
    if (d && d.showModal) { d.showModal(); d.scrollTop = 0; }
  });
});
document.querySelectorAll('.blog-dialog').forEach(function (d) {
  d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
  d.querySelectorAll('[data-close]').forEach(function (c) { c.addEventListener('click', function () { d.close(); }); });
});

// Quote form (front-end only; see the FORM BACKEND comment above the form in landscaping/index.html)
var form = document.getElementById('quote-form');
var success = document.getElementById('form-success');
var error = document.getElementById('form-error');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var required = ['name', 'phone', 'suburb', 'service'];
  var ok = true;
  required.forEach(function (id) {
    var el = document.getElementById(id);
    var bad = !el.value.trim();
    el.classList.toggle('border-red-500', bad);
    el.setAttribute('aria-invalid', bad ? 'true' : 'false');
    if (bad) ok = false;
  });
  var email = document.getElementById('email');
  if (email.value && !/^\S+@\S+\.\S+$/.test(email.value)) { ok = false; email.classList.add('border-red-500'); }
  error.classList.toggle('hidden', ok);
  if (!ok) return;

  var first = document.getElementById('name').value.trim().split(' ')[0];
  document.getElementById('success-name').textContent = first || "we've got it";
  form.classList.add('hidden');
  success.classList.remove('hidden');
  success.focus();
});
