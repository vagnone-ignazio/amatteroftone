const sidebar = document.getElementById('sidebar');
const toggle = document.querySelector('.menu-toggle');
const closeBtn = document.querySelector('.close-btn');

if (toggle && sidebar) {
  toggle.addEventListener('click', () => {
    sidebar.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
  });
}

if (closeBtn && sidebar) {
  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
}

// Chiudi cliccando fuori dalla sidebar
document.addEventListener('click', (e) => {
  if (!sidebar || !toggle) return;
  if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
    sidebar.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});