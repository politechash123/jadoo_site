// Highlight the nav link whose section is on screen.
const navLinks = [...document.querySelectorAll('.header__nav a[href^="#"]')];
const sections = [...new Set(navLinks.map((a) => document.querySelector(a.getAttribute('href'))))].filter(Boolean);

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = '#' + entry.target.id;
      navLinks.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === id));
    });
  },
  { rootMargin: '-45% 0px -50% 0px' }
);
sections.forEach((s) => navObserver.observe(s));

// Reveal blocks once as they scroll into view.
const revealItems = document.querySelectorAll('[data-reveal]');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('is-visible');
      setTimeout(() => el.classList.add('is-settled'), 1000);
      revealObserver.unobserve(el);
    });
  },
  { threshold: 0.15 }
);
revealItems.forEach((el) => revealObserver.observe(el));

// Testimonial dots: switch the active one.
document.querySelectorAll('.dot').forEach((dot, _, dots) => {
  dot.addEventListener('click', () => dots.forEach((d) => d.classList.toggle('is-active', d === dot)));
});
