import './About.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getTechnologies } from '../../services/technologies'
import { Section } from 'lucide-react'

const About = () => {
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
        <section className="page-content">
            <div className="page-title">
                <h1>About</h1>
            </div>
            <div className="about-section">
                <h2>Tech</h2>
                <div className="tech-grid">
                <div className="technologies">
                    <h3 className="sub-heading">FRONTEND</h3>
                    {technologies && technologies.length > 0 && (
                        <div className="tech-list">
                            {technologies
                                .filter((tech) => tech.category === "Frontend")
                                .map((tech, index) => (
                                    <p key={index}>{tech.name}</p>
                                ))}
                        </div>
                    )}
                </div>
                <div className="technologies">
                    <h3 className="sub-heading">BACKEND</h3>
                    {technologies && technologies.length > 0 && (
                        <div className="tech-list">
                            {technologies
                                .filter((tech) => tech.category === "Backend")
                                .map((tech, index) => (
                                    <p key={index}>{tech.name}</p>
                                ))}
                        </div>
                    )}
                </div>
                <div className="technologies">
                    <h3 className="sub-heading">DATABASES</h3>
                    {technologies && technologies.length > 0 && (
                        <div className="tech-list">
                            {technologies
                                .filter((tech) => tech.category === "Databases")
                                .map((tech, index) => (
                                    <p key={index}>{tech.name}</p>
                                ))}
                        </div>
                    )}
                </div>
                <div className="technologies">
                    <h3 className="sub-heading">TOOLS & PLATFORMS</h3>
                    {technologies && technologies.length > 0 && (
                        <div className="tech-list">
                            {technologies
                                .filter((tech) => tech.category === "Tools & Platforms")
                                .map((tech, index) => (
                                    <p key={index}>{tech.name}</p>
                                ))}
                        </div>
                    )}
                </div>
                </div>
                </div>
                <div className="about-section">
                <h2>Tech</h2>
                

      
                </div>


            <div className="image-gallery">
                {/* pictures of me */}

            </div>
        </section>

    )
}

export default About