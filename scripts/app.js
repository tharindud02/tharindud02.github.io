// toggle dark mode
const toggleBtn = document.getElementById('mode-toggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}

// simple project filter
const filterButtons = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('.project-item');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    projects.forEach(p => {
      p.style.display = filter === 'all' || p.classList.contains(filter) ? 'block' : 'none';
    });
  });
});
