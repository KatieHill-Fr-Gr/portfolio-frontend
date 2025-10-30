import './About.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getTechnologies } from '../../services/technologies'

import profilePic from '../../assets/profilePic.jpg'

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
                <h2>Who I am</h2>
                <div className="about-me">
                <div className="page-img-container">
                        <img src={profilePic} alt='Katie Hill, profile photo' className="page-img"/>
                </div>
                <p>
                    I’m a junior full-stack developer transitioning from a career as a creative copywriter & translator. After experimenting with Python for text analysis, I developed a deep interest in building software and completed the General Assembly Software Engineering Bootcamp in 2025.
                    Along with solid skills in React, Node.js and Python, I bring excellent communication skills, attention to detail, a strong work ethic, and creative problem-solving from years of producing content for fashion and beauty brands. I’m keen to contribute to projects where tech meets creativity, especially in e-commerce or translation and localisation.
                </p>
                </div>
            </div>



            {/* pictures of me */}
        </section>

    )
}

export default About