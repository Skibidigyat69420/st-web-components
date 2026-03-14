/* ============================================
   Thesis Capital - Main JavaScript
   ============================================ */

function runInit() {
  initNavigation();
  initScrollEffects();
  initFilters();
  initAnimations();
}

window.runInit = runInit;
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', window.runInit);
} else {
  window.runInit();
}

/* === Navigation === */
function initNavigation() {
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  const navLinks = document.querySelectorAll('.nav__link');

  if (toggle && links) {
    // Mobile menu toggle
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = toggle.classList.toggle('active');
      links.classList.toggle('active');
      
      // Control body scroll
      document.body.style.overflow = isActive ? 'hidden' : '';
      
      // Accessibility
      toggle.setAttribute('aria-expanded', isActive);
    });

    // Close menu when link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        links.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (links.classList.contains('active') && !links.contains(e.target) && !toggle.contains(e.target)) {
        toggle.classList.remove('active');
        links.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Mark active page
  const currentPath = window.location.pathname; // e.g., '/' or '/philosophy'
  navLinks.forEach(link => {
    const href = link.getAttribute('href'); // e.g., '/' or '/philosophy'

    // Check exact match, or handle trailing slashes if any
    const isHome = (currentPath === '/' && href === '/');
    const isOtherPage = (href !== '/' && currentPath.startsWith(href));

    if (isHome || isOtherPage) {
      link.classList.add('nav__link--active');
    } else {
      link.classList.remove('nav__link--active');
    }
  });

  // Scroll effect for nav
  if (!window.__navScrollBound) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const navEl = document.querySelector('.nav');
      if (!navEl) return;
      const currentScroll = window.pageYOffset;

      if (currentScroll > 50) {
        navEl.classList.add('scrolled');
      } else {
        navEl.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    }, { passive: true });
    window.__navScrollBound = true;
  }
}

/* === Scroll Effects === */
function initScrollEffects() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* === Filter Functionality (for Thesis Notes) === */
function initFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const filterItems = document.querySelectorAll('[data-category]');

  if (filterButtons.length === 0) return;

  filterButtons.forEach(button => {
    // Skip calculator tabs which are handled in calculators.js
    if (button.closest('#calc-tabs')) return;

    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter items
      filterItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = '';
          item.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* === Scroll Animations === */
function initAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.08
  };

  if (!window.__globalAnimationObserver) {
    window.__globalAnimationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Small delay to let the transition properties settle after adding reveal-ready
          requestAnimationFrame(() => {
            entry.target.classList.add('reveal-visible');
          });
          window.__globalAnimationObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
  }

  const observer = window.__globalAnimationObserver;

  /**
   * Safely prepare an element for animation.
   * 1. Add reveal-ready (hides it with opacity: 0 via CSS)
   * 2. Observe it so IntersectionObserver reveals it
   * 3. Immediately reveal if already in viewport (fallback)
   */
  function prepareElement(el, delayMs) {
    if (el.classList.contains('reveal-visible')) return; // already revealed
    if (delayMs) {
      el.style.transitionDelay = `${delayMs}ms`;
    }
    el.classList.add('reveal-ready');
    observer.observe(el);

    // Fallback: if element is already in viewport, reveal immediately
    const rect = el.getBoundingClientRect();
    const inViewport = (
      rect.top < window.innerHeight + 40 &&
      rect.bottom > -40
    );
    if (inViewport) {
      requestAnimationFrame(() => {
        el.classList.add('reveal-visible');
      });
    }
  }

  // Animate elements that already have reveal classes in markup
  document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up').forEach(el => {
    prepareElement(el, 0);
  });

  // Automatically animate sections (except hero)
  document.querySelectorAll('section:not(.hero)').forEach(section => {
    if (!section.classList.contains('reveal-up') &&
      !section.classList.contains('reveal-left') &&
      !section.classList.contains('reveal-right')) {
      section.classList.add('reveal-up');
    }
    prepareElement(section, 0);
  });

  // Stagger grid items and cards
  document.querySelectorAll('.grid, .faq-carousel').forEach(container => {
    Array.from(container.children).forEach((child, index) => {
      if (!child.classList.contains('reveal-up')) {
        child.classList.add('reveal-up');
      }
      const delay = Math.min(index * 80, 400);
      prepareElement(child, delay);
    });
  });
}

/* === Utility Functions === */

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Format date helper
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}
