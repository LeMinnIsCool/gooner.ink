import { useState } from 'react';

function Settings() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6">Settings</h2>

      <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg mb-4">
        <span>Dark Mode</span>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          className="toggle-checkbox"
        />
      </div>

      <p className="text-sm text-gray-400">More settings coming soon...</p>
    </div>
  );
}

export default Settings;