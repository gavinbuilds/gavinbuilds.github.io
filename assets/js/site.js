(function () {
  'use strict';

  /* ---------------------------------------------------------------- theme */

  var mql = window.matchMedia('(prefers-color-scheme: dark)');

  function currentPref() {
    try {
      return localStorage.getItem('theme') || 'auto';
    } catch (e) {
      return 'auto';
    }
  }

  function applyTheme(pref) {
    var dark = pref === 'dark' || (pref === 'auto' && mql.matches);
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    document.querySelectorAll('[data-theme-set]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.dataset.themeSet === pref));
    });
  }

  document.querySelectorAll('[data-theme-set]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var pref = btn.dataset.themeSet;
      try { localStorage.setItem('theme', pref); } catch (e) {}
      applyTheme(pref);
    });
  });

  // Follow the OS while the preference is "auto".
  mql.addEventListener('change', function () {
    if (currentPref() === 'auto') applyTheme('auto');
  });

  applyTheme(currentPref());

  /* -------------------------------------------------------- contact modal */

  var modal = document.getElementById('contact');
  var lastFocused = null;

  function openModal(e) {
    if (e) e.preventDefault();
    if (!modal) return;
    lastFocused = document.activeElement;
    modal.hidden = false;
    var focusable = modal.querySelector('button, a[href]');
    if (focusable) focusable.focus();
  }

  function closeModal() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll('[data-contact-open]').forEach(function (el) {
    el.addEventListener('click', openModal);
  });
  document.querySelectorAll('[data-contact-close]').forEach(function (el) {
    el.addEventListener('click', closeModal);
  });

  if (modal) {
    // Click on the backdrop, but not inside the panel.
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });

    // Keep tab focus inside the dialog while it is open.
    modal.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab') return;
      var items = modal.querySelectorAll('button, a[href], input, textarea');
      if (!items.length) return;
      var first = items[0];
      var last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  /* ----------------------------------------------------------- mobile nav */

  var sidebar = document.getElementById('sidebar');
  var backdrop = document.getElementById('sidebar-backdrop');
  var navToggle = document.getElementById('nav-toggle');

  function setNav(open) {
    if (!sidebar) return;
    sidebar.classList.toggle('is-open', open);
    if (backdrop) backdrop.hidden = !open;
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    }
  }

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      setNav(!sidebar.classList.contains('is-open'));
    });
  }
  if (backdrop) backdrop.addEventListener('click', function () { setNav(false); });

  /* ------------------------------------------------------------- keyboard */

  var shortcuts = {};
  document.querySelectorAll('.nav__link[data-key]').forEach(function (link) {
    shortcuts[link.dataset.key] = link;
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeModal();
      setNav(false);
      return;
    }

    if (e.metaKey || e.ctrlKey || e.altKey) return;

    // Never hijack keys while the user is typing.
    var el = document.activeElement;
    if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable)) return;
    if (modal && !modal.hidden) return;

    var target = shortcuts[e.key];
    if (!target) return;

    e.preventDefault();
    if (target.hasAttribute('data-contact-open')) {
      openModal();
    } else {
      window.location.href = target.getAttribute('href');
    }
  });

  /* -------------------------------------------------------- scroll reveal */

  var reveals = document.querySelectorAll('.reveal');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(function (el) { io.observe(el); });
  }
})();
