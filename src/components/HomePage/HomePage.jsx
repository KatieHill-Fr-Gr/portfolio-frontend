import './HomePage.css'
import { useNavigate, Link } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <main>
      <section className="hero">
        <h1>Full-stack developer, React, Node.js, Python</h1>
        <p>Keep all your multilingual content in one place.</p>
        <Link to="/projects" className="page-button">Get started</Link>
      </section>
    </main>
  )
}

export default HomePage
