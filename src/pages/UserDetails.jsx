import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { USERS } from '../data/users.js'

export default function UserDetails() {
  const { id } = useParams()
  const [user, setUser] = useState(null)

  // Re-run whenever the id in the URL changes.
  useEffect(() => {
    const found = USERS.find((u) => u.id === Number(id))
    setUser(found ?? null)
  }, [id])

  useEffect(() => {
    document.title = user ? user.name : 'User Details'
  }, [user])

  return (
    <section>
      <Link to="/users" className="back-link">← Back</Link>
      {user ? (
        <div className="details-card">
          <h1>{user.name}</h1>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Company:</strong> {user.company}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>
      ) : (
        <p className="error-message">User not found</p>
      )}
    </section>
  )
}
