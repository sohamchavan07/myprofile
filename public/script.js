// Light/Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
function setTheme(theme) {
  if (theme === 'light') {
    body.classList.add('light');
    themeToggle.textContent = '☀️';
  } else {
    body.classList.remove('light');
    themeToggle.textContent = '🌙';
  }
  localStorage.setItem('theme', theme);
}
// On load, set theme from localStorage
const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme === 'light' ? 'light' : 'dark');
themeToggle.addEventListener('click', () => {
  const isLight = body.classList.toggle('light');
  setTheme(isLight ? 'light' : 'dark');
  // Animate icon
  themeToggle.style.transform = 'rotate(360deg)';
  setTimeout(() => themeToggle.style.transform = '', 300);
});
// Smooth scroll for navigation
const navLinks = document.querySelectorAll('.sidebar nav ul li');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    const text = this.textContent.trim().toLowerCase();
    let targetId = '';
    if (text === 'home') targetId = 'hero';
    else if (text === 'about') targetId = 'about';
    else if (text === 'services') targetId = 'services';
    else if (text === 'portfolio') targetId = 'portfolio';
    else if (text === 'contact') targetId = 'contact';
    if (targetId) {
      const section = document.getElementById(targetId);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
// Placeholder for contact form submission
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! (Form submission placeholder)');
    form.reset();
  });
}
// Hamburger menu for mobile navigation
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

if (hamburger && sidebar) {
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
  // Optional: close sidebar when clicking outside or on a nav link
  document.addEventListener('click', (e) => {
    if (
      sidebar.classList.contains('open') &&
      !sidebar.contains(e.target) &&
      e.target !== hamburger
    ) {
      sidebar.classList.remove('open');
    }
  });
  // Close sidebar when a nav link is clicked (for better UX)
  sidebar.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('open');
    });
  });
} 