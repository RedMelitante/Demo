// Behaviour for the Sinclair Landscaping Solutions page (/Sinclair-landscaping), from the design handoff.
// Loaded as an ES module, so it runs after the DOM is parsed.

// Mobile menu
(function () {
  var btn = document.getElementById('menuBtn');
  var menu = document.getElementById('mobileMenu');
  var iconOpen = document.getElementById('menuIconOpen');
  var iconClose = document.getElementById('menuIconClose');
  function setOpen(open) {
    menu.classList.toggle('hidden', !open);
    iconOpen.classList.toggle('hidden', open);
    iconClose.classList.toggle('hidden', !open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  btn.addEventListener('click', function () { setOpen(menu.classList.contains('hidden')); });
  menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });
  window.addEventListener('resize', function () { if (window.innerWidth >= 1024) setOpen(false); });
})();

// Header shadow on scroll
(function () {
  var header = document.getElementById('siteHeader');
  function onScroll() {
    var scrolled = window.scrollY > 8;
    header.classList.toggle('shadow-sm', scrolled);
    header.classList.toggle('border-forest/10', scrolled);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Quote form (demo only: no data is sent. See FORM HOOK-UP comment above the form.)
(function () {
  var form = document.getElementById('quoteForm');
  var thanks = document.getElementById('formThanks');
  var error = document.getElementById('formError');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var required = ['name', 'phone', 'suburb', 'service'];
    var firstBad = null;
    required.forEach(function (id) {
      var el = document.getElementById(id);
      var bad = !el.value.trim();
      el.classList.toggle('ring-2', bad);
      el.classList.toggle('ring-clay', bad);
      el.setAttribute('aria-invalid', bad ? 'true' : 'false');
      if (bad && !firstBad) firstBad = el;
    });
    if (firstBad) { error.classList.remove('hidden'); firstBad.focus(); return; }
    error.classList.add('hidden');
    form.classList.add('hidden');
    thanks.classList.remove('hidden');
    thanks.focus();
  });
})();

document.getElementById('year').textContent = new Date().getFullYear();
