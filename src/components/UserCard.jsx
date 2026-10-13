import { Link } from 'react-router-dom'

// Card that shows one user's info, a favorite button, and a details link
export default function UserCard({ id, name, email, company, isFavorite, onToggleFavorite }) {
  return (
    <article className="user-card">
      <h3>{name}</h3>
      <p>{email}</p>
      <p className="muted">{company}</p>
      <div className="card-actions">
        {/* Clicking this adds or removes the user from favorites */}
        <button
          type="button"
          className={`fav-btn ${isFavorite ? 'is-fav' : ''}`}
          onClick={() => onToggleFavorite(id)}
          aria-pressed={isFavorite}
        >
          {isFavorite ? '★ Favorited' : '☆ Favorite'}
        </button>
        {/* Link to the details page, without reloading the app */}
        <Link to={`/users/${id}`}>View Details</Link>
      </div>
    </article>
  )
}
