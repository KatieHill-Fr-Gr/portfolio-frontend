import './HomePage.css'
import { useState, useEffect, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { projectsIndex } from '../../services/projects.js'

const HomePage = () => {
  const navigate = useNavigate()
  const [projects, setProjects] = useState([])
  const [projectsLoading, setProjectsLoading] = useState(true)
  const [visibleIndex, setVisibleIndex] = useState(-1)
  const intros = ['Full-stack software engineer. ', 'React, ', 'Node.js, ', 'Python. ', 'Français, ', 'Ελληνικά. ', 'Based in London.']
  const specialStyles = {
  4: { color: '#000', fontFamily: 'Inclusive sans' },
  5: { color: '#000', fontFamily: 'Inclusive sans' }
    
}


  useEffect(() => {
    const loadProjects = async () => {
      try {
        setProjectsLoading(true)
        const projects = await projectsIndex()
        setProjects(projects.data)
      } catch (error) {
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

  useEffect(() => {
    intros.forEach((_, i) => {
      setTimeout(() => setVisibleIndex(i), i * 1000)
    })
  }, [])

  return (
    <main>
      <section>
        <div className="container">
          <div className="page-content">
            <div className="hero">
              <h1>
                {intros.map((text, i) => (
                  <span
                    key={i}
                    className={`transition-all duration-500 ${i <= visibleIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                      }`}
                      style={specialStyles[i] || {}}
                  >
                    {text}
                  </span>
                ))}
              </h1>
            </div>
            <h2>Recent work</h2>
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
          </div>
        </div>
      </section>
    </main >
  )
}

export default HomePage
