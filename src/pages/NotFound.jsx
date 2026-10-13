import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'

export default function NotFound() {
  return (
    <section>
      <h1>404 - Page not found</h1>
      <Button label="Go to Home" variant="primary" onClick={() => {}}>
        <p>
          Or return to the <Link to="/">home page</Link>.
        </p>
      </Button>
    </section>
  )
}
