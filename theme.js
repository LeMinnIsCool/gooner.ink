// Load saved theme
const isDark = localStorage.getItem('theme') === 'dark';
if (isDark) {
  document.documentElement.classList.add('dark');
  document.getElementById('themeToggle')?.setAttribute('checked', 'true');
}

// Listen for toggle
const toggle = document.getElementById('themeToggle');
if (toggle) {
  toggle.addEventListener('change', () => {
    const enableDark = toggle.checked;
    document.documentElement.classList.toggle('dark', enableDark);
    localStorage.setItem('theme', enableDark ? 'dark' : 'light');
  });
}
