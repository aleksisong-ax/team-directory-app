import { useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'

// Welcome page
export default function Home() {
  // Lets us change pages from code, like when the button is clicked
  const navigate = useNavigate()
  return (
    // Centered card that holds the welcome text and button
    <section className="home">
      <div className="home-card">
        <h1 className="home-title">Welcome</h1>
        <p className="home-text">Find teammates, search by name, and keep a list of favorites.</p>
        {/* Clicking this button opens the Users page */}
        <div className="home-action">
          <Button label="Browse users" variant="primary" onClick={() => navigate('/users')} />
        </div>
      </div>
    </section>
  )
}
