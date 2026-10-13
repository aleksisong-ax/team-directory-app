import { NavLink } from 'react-router-dom'

export default function Navbar({ favoritesCount }) {
  return (
    <header className="navbar">
      <span className="brand">Team Directory</span>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/about">About</NavLink>
        <span className="fav-count">Favorites: {favoritesCount}</span>
      </nav>
    </header>
  )
}
