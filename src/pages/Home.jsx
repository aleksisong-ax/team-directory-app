import { useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'

export default function Home() {
  const navigate = useNavigate()
  return (
    <section>
      <h1>Welcome</h1>
      <p>Find teammates, search by name, and keep a list of favorites.</p>
      <Button label="Browse users" variant="primary" onClick={() => navigate('/users')} />
    </section>
  )
}
