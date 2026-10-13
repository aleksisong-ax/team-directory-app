import { Link } from 'react-router-dom'

export default function UserCard({ id, name, email, company, isFavorite, onToggleFavorite }) {
  return (
    <article className="user-card">
      <h3>{name}</h3>
      <p>{email}</p>
      <p className="muted">{company}</p>
      <div className="card-actions">
        <button
          type="button"
          className={`fav-btn ${isFavorite ? 'is-fav' : ''}`}
          onClick={() => onToggleFavorite(id)}
          aria-pressed={isFavorite}
        >
          {isFavorite ? '★ Favorited' : '☆ Favorite'}
        </button>
        <Link to={`/users/${id}`}>View Details</Link>
      </div>
    </article>
  )
}
