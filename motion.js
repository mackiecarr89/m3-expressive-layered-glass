document.querySelectorAll('.btn, .fab, .icon-btn, .card').forEach((el) => {
  el.addEventListener('pointerdown', () => el.classList.add('is-pressed'));
  el.addEventListener('pointerup', () => el.classList.remove('is-pressed'));
  el.addEventListener('pointerleave', () => el.classList.remove('is-pressed'));
});

const railItems = document.querySelectorAll('.nav-rail__item');
const sections = [...document.querySelectorAll('.ds-section, .top-app-bar--vibrant')];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      if (!id) return;
      railItems.forEach((link) => {
        link.classList.toggle('nav-rail__item--active', link.getAttribute('href') === `#${id}`);
      });
    });
  },
  { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
);

sections.forEach((s) => observer.observe(s));
