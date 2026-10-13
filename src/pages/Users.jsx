import { useEffect, useState } from 'react'
import UserCard from '../components/UserCard.jsx'
import Loader from '../components/Loader.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'
import Button from '../components/Button.jsx'
import { USERS } from '../data/users.js'

// Page that lists all users with search and favorites
export default function Users({ favorites, onToggleFavorite, onClearFavorites }) {
  // The list of users, starts empty
  const [users, setUsers] = useState([])
  // true while we are "loading" the users
  const [loading, setLoading] = useState(true)
  // The text typed in the search box
  const [search, setSearch] = useState('')

  // Simulate fetching users once, after 1 second.
  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(USERS)
      setLoading(false)
    }, 1000)
    // Cancel the timer if the user leaves the page early
    return () => clearTimeout(timer)
  }, [])

  // Keep only users whose name contains the search text (ignores upper/lower case)
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.trim().toLowerCase()),
  )

  // Update the browser tab title with how many users are shown
  useEffect(() => {
    document.title = `Users (${filteredUsers.length})`
  }, [filteredUsers.length])

  return (
    <section>
      <h1>Users</h1>

      {/* Search box: every key press updates the search text */}
      <input
        type="text"
        className="search"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Show loading, then a "not found" message, or the list of users */}
      {loading ? (
        <Loader />
      ) : filteredUsers.length === 0 ? (
        <ErrorMessage message="No users found." />
      ) : (
        <div className="user-grid">
          {/* Make one UserCard for each user in the filtered list */}
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              company={user.company}
              isFavorite={favorites.includes(user.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}

      {/* Show the "Clear favorites" button only when there are favorites */}
      {favorites.length > 0 && (
        <Button label="Clear favorites" variant="danger" onClick={onClearFavorites} />
      )}
    </section>
  )
}
