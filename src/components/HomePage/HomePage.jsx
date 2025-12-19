import './HomePage.css'
import { useState, useEffect, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { projectsIndex } from '../../services/projects.js'
import profileIMG2 from '../../assets/profileIMG2.jpeg'

const HomePage = () => {
  const navigate = useNavigate()
  const [projects, setProjects] = useState([])
  const [projectsLoading, setProjectsLoading] = useState(true)

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setProjectsLoading(true)
        const projects = await projectsIndex()
        setProjects(projects.data)
      } catch (error) {
        console.error('Error:', error)
        setProjects([])
      } finally {
        setProjectsLoading(false)
      }
    }
    loadProjects()
  }, [])

  const recentProjects = [...projects]
    .sort((a, b) => new Date(b.date_completed) - new Date(a.date_completed))
    .slice(0, 3)

  return (
    <main>
      <section className="home hero">
        <div className="home hero-item text large">
          <h1>Software engineer</h1>
        </div>
        <div className="home hero-item text">
          <p>Full-stack software engineer, experienced in building apps in Python, React, Node.js/Express, MongoDB, and PostgreSQL</p>
        </div>
          <div className="home hero-item image">
          <img src={profileIMG2} alt="Profile image" />
        </div>
        <div className="home hero-item text large">
          <p>10 years of experience in the creative industries</p>
        </div>
          <div className="home hero-item text tall">
          <p>10 years of experience in the creative industries</p>
        </div>
          <div className="home hero-item text large">
          <p>10 years of experience in the creative industries</p>
        </div>
        <div className="home hero-item CTA">
          <Link to="/projects" className="page-link">My Work ↗</Link>
        </div>
        <div className="home hero-item CTA">
          <Link to="/projects" className="page-link">My Story ↗</Link>
        </div>
      </section>
      <section className="page-content">
        <h2>My work</h2>
        {projectsLoading ? (
          <p>Loading projects...</p>
        ) : projects.length > 0 ? (
          recentProjects.map((project) => (
            <div key={project.id} className="project-gallery">

              {project.images && project.images.length > 0 && (
                <div className="image-row">
                  {project.images.slice(0, 3).map((img, index) => (
                    <div key={img.image_url || index} className="img-container">
                      <img
                        src={img.image_url}
                        alt={project.name}
                        className="img"
                      />
                    </div>
                  )
                  )}
                </div>
              )}
              <div className="project-row">
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p className="project-subtitle">
                    {project.subtitle}
                  </p>
                </div>
                <div className="project-summary">
                  <p className="summary">{project.summary}</p>
                  <Link to={`/projects/${project.id}`} className="project-link">
                    View project
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p> No projects found</p>
        )}
      </section>
    </main >
  )
}

export default HomePage
