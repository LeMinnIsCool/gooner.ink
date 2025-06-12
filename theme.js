// Dark Mode
function enableDark() {
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
}

function disableDark() {
  document.documentElement.classList.remove('dark');
  localStorage.setItem('theme', 'light');
}

// Initialize theme on page load
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

// Sign Up and Login Logic
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');

// Helper to get users from localStorage or empty obj
function getUsers() {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : {};
}

function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

// Sign Up form handler
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const u = document.getElementById('username').value.trim();
    const p = document.getElementById('password').value;
    const cp = document.getElementById('confirmPassword').value;
    const errorEl = document.getElementById('error');

    if (p !== cp) {
      errorEl.textContent = "Passwords do not match.";
      errorEl.classList.remove('hidden');
      return;
    }
    const users = getUsers();
    if (users[u]) {
      errorEl.textContent = "Username already taken.";
      errorEl.classList.remove('hidden');
      return;
    }

    users[u] = p;
    saveUsers(users);
    localStorage.setItem('loggedInUser', u);
    window.location.href = 'index.html';
  });
}

// Login form handler
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const u = document.getElementById('username').value.trim();
    const p = document.getElementById('password').value;
    const errorEl = document.getElementById('error');

    const users = getUsers();
    if (users[u] && users[u] === p) {
      localStorage.setItem('loggedInUser', u);
      window.location.href = 'index.html';
    } else {
      errorEl.textContent = "Invalid username or password.";
      errorEl.classList.remove('hidden');
    }
  });
}
