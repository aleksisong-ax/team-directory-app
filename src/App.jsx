import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Users from './pages/Users.jsx'
import UserDetails from './pages/UserDetails.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'

// Main component: holds the shared state (favorites and dark mode)
export default function App() {
  // List of favorite user ids, shared with the Navbar and Users page
  const [favorites, setFavorites] = useState([])
  // true = dark mode on, false = light mode
  const [darkMode, setDarkMode] = useState(false)

  // Add the id if it's not a favorite yet, remove it if it is
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    )
  }

  return (
    // The "dark" class changes the colors when dark mode is on
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      {/* Navbar shows the links, favorites count, and theme button */}
      <Navbar
        favoritesCount={favorites.length}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((prev) => !prev)}
      />
      <main className="container">
        {/* Each route shows one page based on the URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/users"
            element={
              <Users
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onClearFavorites={() => setFavorites([])}
              />
            }
          />
          {/* :id is a changing part of the URL, like /users/3 */}
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/about" element={<About />} />
          {/* "*" matches any other URL and shows the 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}
