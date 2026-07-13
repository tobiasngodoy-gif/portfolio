document.addEventListener('DOMContentLoaded', () => {
  console.log('Portafolio: app.js cargado');

  // Smooth scroll para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // cerrar menú en móvil si está abierto
        document.body.classList.remove('nav-open');
      }
    });
  });

  // Toggle menú hamburguesa
  const navToggle = document.getElementById('nav-toggle');
  navToggle && navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });

  // Fix header when scrolling (add shadow)
  const header = document.getElementById('site-header');
  const onScroll = () => {
    if (window.scrollY > 10) header.classList.add('scrolled'); else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll);

});
