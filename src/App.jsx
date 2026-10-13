import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Users from './pages/Users.jsx'
import UserDetails from './pages/UserDetails.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  const [favorites, setFavorites] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    )
  }

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <Navbar
        favoritesCount={favorites.length}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((prev) => !prev)}
      />
      <main className="container">
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
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}
