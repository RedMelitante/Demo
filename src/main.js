// Site behaviour for Organic Gardening Australia (from the design handoff).
// Loaded as an ES module, so it runs after the DOM is parsed and is scoped automatically.

// Mobile menu
var btn = document.getElementById('menuBtn');
var menu = document.getElementById('mobileMenu');
var iconOpen = document.getElementById('iconOpen');
var iconClose = document.getElementById('iconClose');
function setMenu(open) {
  menu.classList.toggle('hidden', !open);
  iconOpen.classList.toggle('hidden', open);
  iconClose.classList.toggle('hidden', !open);
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}
btn.addEventListener('click', function () { setMenu(menu.classList.contains('hidden')); });
menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

// Header shadow on scroll
var header = document.getElementById('siteHeader');
window.addEventListener('scroll', function () { header.classList.toggle('shadow-md', window.scrollY > 10); }, { passive: true });

// Smooth scroll for in-page links (CSS handles most browsers; this covers the rest)
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    var id = link.getAttribute('href');
    if (id.length < 2) return;
    var target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', id);
  });
});

// "Get a quote" links on service cards pre-select the service
var serviceSelect = document.getElementById('service');
document.querySelectorAll('.quote-link').forEach(function (link) {
  link.addEventListener('click', function () {
    var value = link.getAttribute('data-service');
    for (var i = 0; i < serviceSelect.options.length; i++) {
      if (serviceSelect.options[i].text === value) { serviceSelect.selectedIndex = i; break; }
    }
  });
});

// Quote form (front-end only; see FORM BACKEND comment above the form in index.html)
var form = document.getElementById('quoteForm');
var thanks = document.getElementById('formThanks');
var errorBox = document.getElementById('formError');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  function val(id) { return document.getElementById(id).value.trim(); }
  var name = val('name');
  var valid = name && val('phone') && /\S+@\S+\.\S+/.test(val('email')) && val('suburb') && val('service');
  if (!valid) { errorBox.classList.remove('hidden'); return; }
  errorBox.classList.add('hidden');
  // TODO: send the form data to your form service here, e.g. fetch(form.action, { method: 'POST', body: new FormData(form) })
  document.getElementById('thanksName').textContent = name ? ', ' + name.split(' ')[0] : '';
  form.classList.add('hidden');
  thanks.classList.remove('hidden');
  thanks.focus();
});
document.getElementById('formReset').addEventListener('click', function () {
  form.reset();
  thanks.classList.add('hidden');
  form.classList.remove('hidden');
});

document.getElementById('year').textContent = new Date().getFullYear();
