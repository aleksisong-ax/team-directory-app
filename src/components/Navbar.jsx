import { NavLink } from 'react-router-dom'

// Top bar with the app name, page links, favorites count, and theme button
export default function Navbar({ favoritesCount, darkMode, onToggleDarkMode }) {
  return (
    <header className="navbar">
      <span className="brand">Team Directory</span>
      <nav>
        {/* NavLink adds the "active" class to the link of the current page */}
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/about">About</NavLink>
        <span className="fav-count">Favorites: {favoritesCount}</span>
        {/* Switches between Dark Mode and Light Mode */}
        <button type="button" className="theme-btn" onClick={onToggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
    </header>
  )
}
