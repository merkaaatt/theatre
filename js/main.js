document.addEventListener('DOMContentLoaded', function () {

  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', function () {
    nav.style.background = window.scrollY > 50
      ? 'rgba(8, 5, 1, 0.99)'
      : 'rgba(15, 10, 3, 0.96)';
  });

  const form = document.getElementById('searchForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const q = document.getElementById('searchInput').value.toLowerCase().trim();
      document.querySelectorAll('.show-item').forEach(function (item) {
        const title = item.querySelector('.afisha-title');
        if (!q || (title && title.textContent.toLowerCase().includes(q))) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  const loadMore = document.getElementById('loadMore');
  if (loadMore) {
    loadMore.addEventListener('click', function () {
      this.textContent = 'ВСІ ВИСТАВИ ПОКАЗАНО';
      this.disabled = true;
      this.style.opacity = '0.5';
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});