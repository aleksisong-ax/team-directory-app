import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <section>
      <h1>404 - Page not found</h1>
      <Button label="Go to Home" variant="primary" onClick={() => navigate('/')}>
        <p>
          Or return to the <Link to="/">home page</Link>.
        </p>
      </Button>
    </section>
  )
}
