/**
 * main.js — Pi5 Voice AI
 * Handles: copy buttons, hamburger menu, scroll active links, toast
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Copy buttons ──────────────────────────────────────── */
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const targetId = btn.dataset.target;
      const pre = document.getElementById(targetId);
      if (!pre) return;

      // Get plain text (strip HTML tags from syntax highlighting)
      const text = pre.innerText || pre.textContent;

      try {
        await navigator.clipboard.writeText(text);
      } catch {
        // Fallback for older browsers
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }

      // Visual feedback on button
      const orig = btn.textContent;
      btn.textContent = '✓';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = orig;
        btn.classList.remove('copied');
      }, 1800);

      // Toast (uses i18n if available)
      const lang = (window.I18n && window.I18n.current) || 'pt';
      const msgs = { pt: 'Copiado!', en: 'Copied!', zh: '已复制！', de: 'Kopiert!', fr: 'Copié !' };
      showToast(msgs[lang] || 'Copied!');
    });
  });

  /* ── Toast ─────────────────────────────────────────────── */
  function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), 2000);
  }

  /* ── Hamburger menu ────────────────────────────────────── */
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
    });

    // Close on nav link click (mobile)
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Smooth scroll for anchor links ────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Scroll-triggered fade-in ───────────────────────────── */
  const observer = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }),
    { threshold: 0.08 }
  );

  document.querySelectorAll('.step-block, .hw-card, .next-card, .model-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  /* ── Pipeline cascade ───────────────────────────────────── */
  const pipelineBar = document.querySelector('.pipeline-bar');
  if (pipelineBar) {
    const pipeObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.pipe-node, .pipe-arrow').forEach((el, i) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(12px)';
            setTimeout(() => {
              el.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, i * 80);
          });
          pipeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    pipeObserver.observe(pipelineBar);
  }

  /* ── Step badge pulse on section enter ─────────────────── */
  const badgeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const badge = entry.target.querySelector('.step-badge');
        if (badge) {
          badge.classList.remove('badge-pulse');
          void badge.offsetWidth;
          badge.classList.add('badge-pulse');
        }
        badgeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.section-head').forEach(el => badgeObserver.observe(el));

  /* ── Stat counters ──────────────────────────────────────── */
  const statConfigs = [
    { selector: '.stat:nth-child(1) .stat-val', end: 4.5, prefix: '~', suffix: '', decimals: 1 },
    { selector: '.stat:nth-child(3) .stat-val', end: 0,   prefix: '',  suffix: '', decimals: 0 },
    { selector: '.stat:nth-child(5) .stat-val', end: 100, prefix: '',  suffix: '%', decimals: 0 },
  ];

  const statsSection = document.querySelector('.hero-stats');
  if (statsSection) {
    let statsAnimated = false;
    const statsObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
          statsAnimated = true;
          statConfigs.forEach(({ selector, end, prefix, suffix, decimals }) => {
            const el = document.querySelector(selector);
            if (!el) return;
            const duration = 1200;
            const start = performance.now();
            function tick(now) {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const val = (end * eased).toFixed(decimals);
              el.textContent = prefix + val + suffix;
              if (progress < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
          });
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    statsObserver.observe(statsSection);
  }

  /* ── Copy button bounce ─────────────────────────────────── */
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.remove('btn-bounce');
      void btn.offsetWidth;
      btn.classList.add('btn-bounce');
      btn.addEventListener('animationend', () => btn.classList.remove('btn-bounce'), { once: true });
    });
  });

  /* ── Animations CSS ─────────────────────────────────────── */
  const style = document.createElement('style');
  style.textContent = `
    .fade-in {
      opacity: 0;
      transform: translateY(16px);
      transition: opacity 0.4s ease, transform 0.4s ease;
    }
    .fade-in.visible {
      opacity: 1;
      transform: translateY(0);
    }
    @keyframes badge-pulse {
      0%   { transform: scale(1); }
      40%  { transform: scale(1.18); box-shadow: 0 0 0 4px rgba(246,152,88,0.2); }
      70%  { transform: scale(0.96); }
      100% { transform: scale(1); box-shadow: none; }
    }
    .badge-pulse {
      animation: badge-pulse 0.5s ease forwards;
    }
    @keyframes btn-bounce {
      0%   { transform: scale(1); }
      35%  { transform: scale(1.22); }
      65%  { transform: scale(0.92); }
      100% { transform: scale(1); }
    }
    .btn-bounce {
      animation: btn-bounce 0.3s ease forwards;
    }
    @media (prefers-reduced-motion: reduce) {
      .fade-in { opacity: 1; transform: none; transition: none; }
      .badge-pulse, .btn-bounce { animation: none; }
    }
  `;
  document.head.appendChild(style);

});
