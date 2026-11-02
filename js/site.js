(function () {
  var b = document.querySelector('.menu-btn'), m = document.getElementById('menu');
  if (!b || !m) return;
  b.addEventListener('click', function () {
    var o = b.getAttribute('aria-expanded') === 'true';
    b.setAttribute('aria-expanded', String(!o));
    b.setAttribute('aria-label', o ? 'Abrir menu' : 'Fechar menu');
    m.classList.toggle('is-open', !o);
  });
  m.addEventListener('click', function (e) { if (e.target.tagName === 'A') { b.setAttribute('aria-expanded', 'false'); m.classList.remove('is-open'); } });
})();
