import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loader from '../components/Loader.jsx'
import { USERS } from '../data/users.js'

// Page that shows one user's details, using the id from the URL
export default function UserDetails() {
  // Read the :id part of the URL, like "3" in /users/3
  const { id } = useParams()
  // loaded: has the search finished? user: the found user, or null
  const [result, setResult] = useState({ loaded: false, user: null })

  // Find the user again whenever the id changes
  useEffect(() => {
    setResult({ loaded: false, user: null })
    const found = USERS.find((u) => u.id === Number(id))
    setResult({ loaded: true, user: found ?? null })
  }, [id])

  const { loaded, user } = result

  // Update the browser tab title with the user's name
  useEffect(() => {
    document.title = user ? user.name : 'User Details'
  }, [user])

  return (
    <section>
      {/* Go back to the Users list */}
      <Link to="/users" className="back-link">← Back</Link>
      {/* Show loader, then the user's info, or "User not found" */}
      {!loaded ? (
        <Loader />
      ) : user ? (
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
