(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // Mobile menu
  const navBtn = $('#navToggle');
  const nav = $('#nav');
  if (navBtn && nav) {
    navBtn.addEventListener('click', () => {
      const open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!open));
      navBtn.setAttribute('aria-expanded', String(!open));
    });

    // Close menu when clicking a link
    $$('#nav a').forEach(a => a.addEventListener('click', () => {
      nav.setAttribute('data-open', 'false');
      navBtn.setAttribute('aria-expanded', 'false');
    }));
  }

  // Smooth scroll for internal anchors
  $$("a[href^='#']").forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', id);
    });
  });

  // Screenshot modal
  const modal = $('#modal');
  const modalImg = $('#modalImg');
  const modalTitle = $('#modalTitle');
  const closeModal = () => {
    modal?.classList.remove('open');
    modal?.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    if (modalImg) modalImg.src = '';
  };

  $$('.shot').forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-src');
      const title = btn.getAttribute('data-title') || 'Screenshot';
      if (!src || !modal || !modalImg) return;
      modalTitle.textContent = title;
      modalImg.src = src;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('no-scroll');
      $('#modalClose')?.focus();
    });
  });

  $('#modalClose')?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Waitlist form (mailto)
  const form = $('#waitlistForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = ($('#email')?.value || '').trim();
      const role = ($('#role')?.value || '').trim();
      const notes = ($('#notes')?.value || '').trim();

      // You can replace this address with your team email
      const to = form.getAttribute('data-to') || 'hello@gazely.app';
      const subject = encodeURIComponent('Gazely early access');
      const body = encodeURIComponent(
        `Email: ${email}\nRole: ${role}\n\nNotes:\n${notes}\n\n— sent from gazely.app`
      );
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  }

  // Set year
  const y = new Date().getFullYear();
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = String(y);
})();
