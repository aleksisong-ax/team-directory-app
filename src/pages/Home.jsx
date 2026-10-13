import { useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'

// Welcome page
export default function Home() {
  // Lets us change pages from code, like when the button is clicked
  const navigate = useNavigate()
  return (
    <section>
      <h1>Welcome</h1>
      <p>Find teammates, search by name, and keep a list of favorites.</p>
      {/* Clicking this button opens the Users page */}
      <Button label="Browse users" variant="primary" onClick={() => navigate('/users')} />
    </section>
  )
}
