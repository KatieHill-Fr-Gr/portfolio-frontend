import './HomePage.css'
import { useState, useEffect, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { projectsIndex } from '../../services/projects.js'

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

  console.log(projects)

  return (
    <main>
      <section className="hero">
        <h1>Full-stack developer, React, Node.js, Python</h1>
      </section>

      <section className="homepage-content">
        <h2>My work</h2>
        {projectsLoading ? (
          <p>Loading projects...</p>
        ) : projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.id} className="project-gallery">

              {project.images && project.images.length > 0 && (
                <div className="image-row">
                  {project.images.map((img, index) => (
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

              <div className="project-info">
                <h3>{project.name}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              {/* <div className="project-actions">
                  <Link to={`/projects/${project.id}`} className="project-button">
                    View project
                  </Link>
                </div> */}

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
