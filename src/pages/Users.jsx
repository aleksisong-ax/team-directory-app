import { useEffect, useState } from 'react'
import UserCard from '../components/UserCard.jsx'
import Loader from '../components/Loader.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'
import Button from '../components/Button.jsx'
import { USERS } from '../data/users.js'

export default function Users({ favorites, onToggleFavorite, onClearFavorites }) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  // Simulate fetching users once, after 1 second.
  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(USERS)
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.trim().toLowerCase()),
  )

  return (
    <section>
      <h1>Users</h1>

      <input
        type="text"
        className="search"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <Loader />
      ) : filteredUsers.length === 0 ? (
        <ErrorMessage message="No users found." />
      ) : (
        <div className="user-grid">
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

      {favorites.length > 0 && (
        <Button label="Clear favorites" variant="danger" onClick={onClearFavorites} />
      )}
    </section>
  )
}
