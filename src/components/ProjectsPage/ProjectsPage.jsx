import { useState, useEffect, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { projectsIndex } from '../../services/projects.js'

const ProjectsPage = () => {
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
        <h1>See all my latest work</h1>
      </section>

      <section className="page-content">
        <h2>My work</h2>
        {projectsLoading ? (
          <p>Loading projects...</p>
        ) : projects.length > 0 ? (
          projects.map((project) => (
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
                <div className="project-description">
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

export default ProjectsPage
