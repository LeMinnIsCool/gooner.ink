// Dark Mode Logic
const enableDark = () => {
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
};

const disableDark = () => {
  document.documentElement.classList.remove('dark');
  localStorage.setItem('theme', 'light');
};

// Init theme
if (localStorage.getItem('theme') === 'dark') {
  enableDark();
} else {
  disableDark();
}

// Theme toggle
const toggle = document.getElementById('themeToggle');
if (toggle) {
  toggle.checked = localStorage.getItem('theme') === 'dark';
  toggle.addEventListener('change', () => {
    toggle.checked ? enableDark() : disableDark();
  });
}

// Login handler
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;

    // Example credentials
    if (u === "admin" && p === "gooner") {
      localStorage.setItem('loggedIn', 'true');
      window.location.href = 'index.html';
    } else {
      document.getElementById('error').classList.remove('hidden');
    }
  });
}
