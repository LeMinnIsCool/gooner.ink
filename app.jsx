import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Settings from './Settings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white font-sans">
        <header className="bg-gray-800 shadow-md p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Gooner.ink</h1>
          <nav className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/settings" className="hover:underline">Settings</Link>
          </nav>
        </header>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
