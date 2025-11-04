import './About.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getTechnologies } from '../../services/technologies'
import { getUsers } from '../../services/users'

const About = () => {
    const [error, setError] = useState({})
    const navigate = useNavigate()
    const [technologies, setTechnologies] = useState([])
    const [users, setUsers] = useState([])

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

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getUsers()
                setUsers(response)
            } catch (error) {
                console.error('Error fetching data:', error)
                if (error.response && error.response.status === 404) {
                    navigate('/404', { replace: true })
                } else {
                    setError({ message: 'Unable to load users' })
                }
            }
        }
        fetchUsers()
    }, [])

    return (
        <section className="page-content">
            <div className="page-title">
                <h1>A junior software engineer with a background in the creative industries, content localization, and digital storytelling.</h1>
            </div>
            <div className="about-section">
                <h2>Tech skills</h2>
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
                <h2>Experience</h2>
                <div className="experience-list">
                    <div className="experience">
                        <span className="job-title">Software Engineer</span>
                        <span className="year">2025</span>
                    </div>
                    <div className="experience">
                        <span className="job-title">Director, Copywriter & Translator</span>
                        <span className="year">2015-2025</span>
                    </div>
                    <div className="experience">
                        <span className="job-title">Consultant Copywriter</span>
                        <span className="year">2021-2024</span>
                    </div>
                    <div className="experience">
                        <span className="job-title">Web Producer & SEO Specialist</span>
                        <span className="year">2016</span>
                    </div>
                </div>
            </div>
            <div className="about-section">
                <h2>My story</h2>
                <div className="about-me">
                    {technologies && technologies.length > 0 && (
                        <div className="tech-list">
                            {technologies
                                .filter((tech) => tech.category === "Tools & Platforms")
                                .map((tech, index) => (
                                    <p key={index}>{tech.name}</p>
                                ))}
                        </div>
                    )}
                    <div className="page-img-container">
                        {/* <img src= alt='Katie Hill, profile photo' className="page-img" /> */}
                    </div>
                    <p>
                    </p>
                </div>
            </div>



            {/* pictures of me */}
        </section>

    )
}

export default About