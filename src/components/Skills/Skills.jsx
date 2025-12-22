
import { useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getTechnologies } from '../../services/technologies'

const Skills = () => {
        const [error, setError] = useState({})
        const navigate = useNavigate()
        const [technologies, setTechnologies] = useState([])
    

        useEffect(() => {
            const fetchTechnologies = async () => {
                try {
                    const response = await getTechnologies()
                    setTechnologies(response)
                } catch (error) {
                    console.error('Error fetching data:', error)
                    if (error.response && error.response.status === 404) {
                        navigate('/404', { replace: true })
                    } else {
                        setError({ message: 'Unable to load technologies' })
                    }
                }
            }
            fetchTechnologies()
        }, [])

    return (
        <main>
            <section>
                <div className="container">
                    <div className="page-content">
                        <div className="page-title">
                        <h1>What I do</h1>
                        <div className="page-summary">
                        <p>I build apps using React, Node.js, and Python (Django, Flask), following REST API principles, with PostgreSQL and MongoDB. I’m currently learning Docker, Kubernetes, and AWS.</p>
                        <Link to="/projects" className="page-button">See work</Link>
                        </div>
                        </div>

                <div className="tech-section">
                    <h2>Tech skills</h2>
                        <div className="technologies">
                            <h3 className="tech-category">FRONTEND</h3>
                            {technologies && technologies.length > 0 && (
                                <div className="tech-list">
                                    {technologies
                                        .filter((tech) => tech.category === "Frontend")
                                        .map((tech, index) => (
                                            <span key={index}>
                                                <div className="icon-container">
                                                    <img src={tech.icon} alt={tech.name} className="icon" />
                                                </div>
                                                {tech.name}
                                            </span>
                                        ))}
                                </div>
                            )}
                            </div>
        
                        <div className="technologies">
                            <h3 className="tech-category">BACKEND</h3>
                            {technologies && technologies.length > 0 && (
                                <div className="tech-list">
                                    {technologies
                                        .filter((tech) => tech.category === "Backend")
                                        .map((tech, index) => (
                                            <div key={index}>
                                                <div className="icon-container">
                                                    <img src={tech.icon} alt={tech.name} className="icon" />
                                                </div>
                                                <p>{tech.name}</p>
                                            </div>
                                        ))}
                                </div>
                            )}
                        </div>
                        <div className="technologies">
                            <h3 className="tech-category">DATABASES</h3>
                            {technologies && technologies.length > 0 && (
                                <div className="tech-list">
                                    {technologies
                                        .filter((tech) => tech.category === "Databases")
                                        .map((tech, index) => (
                                            <div key={index}>
                                                <div className="icon-container">
                                                    <img src={tech.icon} alt={tech.name} className="icon" />
                                                </div>
                                                <p>{tech.name}</p>
                                            </div>
                                        ))}
                                </div>
                            )}
                        </div>
                        <div className="technologies">
                            <h3 className="tech-category">TOOLS & PLATFORMS</h3>
                            {technologies && technologies.length > 0 && (
                                <div className="tech-list">
                                    {technologies
                                        .filter((tech) => tech.category === "Tools & Platforms")
                                        .map((tech, index) => (
                                            <div key={index}>
                                                <div className="icon-container">
                                                    <img src={tech.icon} alt={tech.name} className="icon" />
                                                </div>
                                                <p>{tech.name}</p>
                                            </div>
                                        ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                    </div>
            </section>
        </main>
    )

}


export default Skills