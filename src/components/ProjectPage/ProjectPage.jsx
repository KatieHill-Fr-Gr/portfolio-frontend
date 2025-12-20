import './ProjectPage.css'
import { ProjectsCarousel } from "../ProjectsCarousel/ProjectsCarousel"

import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { projectShow } from '../../services/projects'
import { LuExternalLink } from "react-icons/lu"
import { LuGithub } from "react-icons/lu"


const ProjectPage = () => {
    const { projectId } = useParams()
    const [project, setProject] = useState({})
    const [error, setError] = useState({})
    const [uploading, setUploading] = useState(false)
    const navigate = useNavigate()

    const LINK_TYPE_ICONS = {
        live: LuExternalLink,
        github_frontend: LuGithub,
        github_backend: LuGithub,
    }

    useEffect(() => {
        const getProject = async () => {
            try {
                const response = await projectShow(projectId)
                setProject(response.data)
            } catch (error) {
                console.error('Error fetching data:', error)
                if (error.response && error.response.status === 404) {
                    navigate('/404', { replace: true })
                } else {
                    setError({ message: 'Unable to load project' })
                }
            }
        }
        if (projectId) {
            getProject()
        }
    }, [projectId, navigate])

    return (
        <section>
            <div className="container">
                <div className="page-content">
                    {project?.name ? (
                        <div className="page-title">
                            <div className="project-title">
                                <h1>{project.name}</h1>
                                <p className="project-subtitle">
                                    {project.subtitle}
                                </p>
                            </div>

                            <div className="project-summary">
                                <p>{project.description1}</p>
                                {project.links && project.links.length > 0 && (
                                    <div className="project-links">
                                        {project.links.map((link, index) => {
                                            const Icon = LINK_TYPE_ICONS[link.link_type]
                                            return (
                                                <a
                                                    key={index}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="project-link"
                                                >
                                                    <span>{Icon && <Icon size={20} />} {link.label}</span>
                                                </a>
                                            )
                                        })}
                                    </div>
                                )}
                                {project.technologies && project.technologies.length > 0 && (                  
                                    <div className="project-technologies">
                                          <div className="tag-container">
                                        {project.technologies.map((tech, index) => {
                                            return (
                                                <div key={index} className="tech-tag"> {tech.name}</div>
                                            )
                                        })}
                                           </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}

                    <div className="image-gallery">
                        {project.images && project.images.length > 0 ? (
                            project.images.map((img, index) => (
                                <div key={img.image_url || index} className="page-img-container">
                                    <img
                                        src={img.image_url}
                                        alt={project.name}
                                        className="page-img"
                                    />
                                </div>
                            ))
                        ) : (
                            <p>No images available</p>
                        )}
                    </div>
                    <h2>All projects</h2>
                    <ProjectsCarousel />
                </div>
            </div>
        </section>

    )
}

export default ProjectPage