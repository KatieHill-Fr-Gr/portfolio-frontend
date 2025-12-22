import './About.css'
import ScrollCountUp from '../CountUp/CountUp'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getTechnologies } from '../../services/technologies'
import { getUsers, getUserById } from '../../services/users'
import profileIMG2 from '../../assets/profileIMG2.jpeg'



const About = () => {
    const [error, setError] = useState({})
    const navigate = useNavigate()
    const [technologies, setTechnologies] = useState([])
    const [myInfo, setMyInfo] = useState(null)
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState([])
    const [openItem, setOpenItem] = useState(null)

    const toggleItem = (index) => {
        setOpenItem(openItem === index ? null : index)
    }

    useEffect(() => {
        const fetchTechnologies = async () => {
            try {
                const response = await getTechnologies()
                setTechnologies(response)
            } catch (error) {
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
                const [userRes, contributorsRes] = await Promise.all([
                    getUserById(1),
                    getUsers
                ])

                setMyInfo(userRes.data)
                setUsers(contributorsRes.data)
            } catch (error) {
                setUsers([])
            } finally {
                setLoading(false)
            }
        }

        fetchUsers()
    }, [])

    return (
        <main>
            <section>
                <div className="container">
                    <div className="page-content">
                        <div className="hero">
                            <h1>Every story has a beginning.</h1>
                        </div>
                        <div className="about-section">
                            <h1>Full-stack software engineer with creative skills</h1>
                            <div className="about-me">
                                <p>I build apps in React/Node.js as well as Python (Django/Flask) </p>
                            </div>
                        </div>
                        <div className="tech-section">
                            <h2>Tech skills</h2>
                            <div className="tech-grid">
                                <div className="technologies">
                                    <h3 className="tech-category">FRONTEND</h3>
                                    {technologies && technologies.length > 0 && (
                                        <div className="tag-container">
                                            {technologies
                                                .filter((tech) => tech.category === "Frontend")
                                                .map((tech, index) => (
                                                    <span key={index} className="tech-tag">
                                                        {tech.name}
                                                    </span>
                                                ))}
                                        </div>
                                    )}
                                </div>
                                <div className="technologies">
                                    <h3 className="tech-category">BACKEND</h3>
                                    {technologies && technologies.length > 0 && (
                                        <div className="tag-container">
                                            {technologies
                                                .filter((tech) => tech.category === "Backend")
                                                .map((tech, index) => (
                                                    <div key={index} className="tech-tag">
                                                        <p>{tech.name}</p>
                                                    </div>
                                                ))}
                                        </div>
                                    )}
                                </div>
                                <div className="technologies">
                                    <h3 className="tech-category">DATABASES</h3>
                                    {technologies && technologies.length > 0 && (
                                        <div className="tag-container">
                                            {technologies
                                                .filter((tech) => tech.category === "Databases")
                                                .map((tech, index) => (
                                                    <div key={index} className="tech-tag">
                                                        <p>{tech.name}</p>
                                                    </div>
                                                ))}
                                        </div>
                                    )}
                                </div>
                                <div className="technologies">
                                    <h3 className="tech-category">TOOLS & PLATFORMS</h3>
                                    {technologies && technologies.length > 0 && (
                                        <div className="tag-container">
                                            {technologies
                                                .filter((tech) => tech.category === "Tools & Platforms")
                                                .map((tech, index) => (
                                                    <div key={index} className="tech-tag">
                                                        <p>{tech.name}</p>
                                                    </div>
                                                ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="about-section">
                            <div className="about-stats">
                                <div className="stat">
                                    <h2><ScrollCountUp start={0} end={10} duration={2.5} /></h2>
                                    <p>years of experience in creative industries</p>
                                </div>
                                <div className="stat">
                                    <h2><ScrollCountUp start={0} end={1038} duration={2.5} /></h2>
                                    <p>contributions on GitHub</p>
                                </div>
                                <div className="stat">
                                    <h2><ScrollCountUp start={0} end={420} duration={2.5} /></h2>
                                    <p>hours of coding in an agile environment</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-section">
                            <h2>Experience</h2>
                            <div className="item-list">
                                <div className="item" onClick={() => toggleItem(0)}>
                                    <span className="job-title">Software Engineer</span>
                                    <div className="year-arrow-wrapper">
                                        <span className="year">2025</span>
                                        <span className="arrow" style={{ transform: openItem === 0 ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
                                            ↓
                                        </span>
                                    </div>
                                </div>
                                {openItem === 0 && (
                                    <div className='item-details'
                                        style={{
                                            maxHeight: openItem === 0 ? "32rem" : "0rem",
                                            overflow: "hidden",
                                            transition: "max-height 0.9s ease",
                                        }}>
                                        <p>This was an intense but incredibly enjoyable 12-week bootcamp that covered software engineering fundamentals, agile methodologies and basic UX design. It gave me the chance to develop my understanding of Python and Object Oriented Programming (OOP) while also providing a solid introduction to web development using Javascript, React, Node.js, Express, and Django, as well as database management (MongoDB, PostgreSQL) and REST API design.
                                        </p>
                                        <p> My final project was a translation and project management app called Catseye – something I’ve been wanting to build for a while. The app combines a React frontend, for a fully responsive and interactive UI, with a Python Django backend integrated with the DeepL API and designed to support a high volume of data.
                                        </p>
                                    </div>
                                )}
                                <div className="item" onClick={() => toggleItem(1)}>
                                    <span className="job-title">Director, Copywriter & Translator</span>
                                    <div className="year-arrow-wrapper">
                                        <span className="year">2015-2025</span>
                                        <span className="arrow" style={{ transform: openItem === 1 ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
                                            ↓
                                        </span>
                                    </div>
                                </div>
                                {openItem === 1 && (
                                    <div className='item-details'
                                        style={{
                                            maxHeight: openItem === 1 ? "32rem" : "0rem",
                                            overflow: "hidden",
                                            transition: "max-height 0.9s ease",
                                        }}>
                                        <p>I founded Translation Pod in 2015 and worked alongside a small team of freelance translators and copywriters to provide multilingual copywriting (creative/UX), Search Engine Optimisation (SEO), and translation services for luxury and e-commerce brands.
                                        </p>
                                        <p>
                                            Over the years, I experimented with many different translation tools and learned Python so I could perform text analysis on translated content. As translation and the creative industries became more focused on tech and AI, I found myself coding more and more before eventually deciding to retrain as a software engineer in 2025.
                                        </p>
                                        <p>
                                            Brands: LVMH group / Shiseido / Laboratoires Ducastel / Pierre Fabre / Watsons China / Dirce / Leticia Credidio.
                                        </p>
                                        <p>
                                            Languages: English (US & UK) / French / Greek / Italian
                                        </p>

                                    </div>
                                )}
                                <div className="item" onClick={() => toggleItem(2)}>
                                    <span className="job-title">Consultant Copywriter</span>
                                    <div className="year-arrow-wrapper">
                                        <span className="year">2021-2024</span>
                                        <span className="arrow" style={{ transform: openItem === 2 ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
                                            ↓
                                        </span>
                                    </div>
                                </div>
                                {openItem === 2 && (
                                    <div className='item-details'
                                        style={{
                                            maxHeight: openItem === 2 ? "32rem" : "0rem",
                                            overflow: "hidden",
                                            transition: "max-height 0.9s ease",
                                        }}>
                                        <p>
                                            The eyewear giant Luxottica were looking for consultant copywriters to work with their rapidly growing in-house team following the pandemic in 2020. I started working with them in February 2021, providing cross-channel copywriting for multiple brands in the group’s portfolio including Ray-Ban, Sunglass Hut, Vogue Eyewear and LensCrafters.
                                        </p>
                                        <p>
                                            During the three years I worked with them, I developed multiple campaign concepts, product storytelling, and UX/SEO content across multiple e-commerce sites. I also worked closely with frontend developers and UX designers during UAT phases, supporting agile workflows and tracking progress in Jira/Atlassian. This gave me a taste of cross-functional collaboration between creative and tech teams.                                </p>
                                    </div>
                                )}
                                <div className="item" onClick={() => toggleItem(3)}>
                                    <span className="job-title">Web Producer & SEO Specialist</span>
                                    <div className="year-arrow-wrapper">
                                        <span className="year">2016</span>
                                        <span className="arrow" style={{ transform: openItem === 3 ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
                                            ↓
                                        </span>
                                    </div>
                                </div>
                                {openItem === 3 && (
                                    <div className='item-details'
                                        style={{
                                            maxHeight: openItem === 3 ? "32rem" : "0rem",
                                            overflow: "hidden",
                                            transition: "max-height 0.9s ease",
                                        }}>
                                        <p>
                                            In 2016, I worked on a contract providing SEO optimisation services for Microsoft Office Products websites in the UK, Australia and Canada. I worked with a team of specialists at Moravia to conduct keyword research and optimise a wide range of content, including product pages, help articles and tutorials, to boost search performance and improve user experience.                                 </p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="story-section">
                            <div className="about-img-container">
                                <img src={profileIMG2} alt="About image" />
                            </div>
                            <div className="about-me">
                                <p> "Why did you learn Greek?" I was asked this all the time as a translator and copywriter. Now the question most people ask is “Why did you learn software engineering?”. Well, it’s not as much of a leap as it sounds. </p>
                                <p> Back in 2018, The translation and localisation industry was ahead of the curve in adopting AI (or Neural Machine Translation to those in the know). It had already reshaped the way translators work long before ChatGPT came onto the scene and this led me to develop a deep interest in the world of tech. </p>
                                <p> I started learning Python during lockdown in 2020 so I could experiment with text analysis. Over the years I began coding more and more, until I eventually decided to retrain as a full-stack software engineer.</p>
                                <p>My final project on the General Assembly software engineering bootcamp was a translation and project management app, which I’d been wanting to build for a while after wrestling with clunky software in my previous roles.  </p>
                                <p> Finding creative solutions to business challenges is what drives me, along with a curiosity in how systems are designed, built, and maintained in production.</p>
                                <p>(Oh and the Greek thing? I really wanted to learn another language and, attracted by the idea of spending my year abroad in Greece, I chose to study it at university – and yes, it was hard!).</p>

                            </div>
                        </div>

                        {/* contributors */}
                    </div>
                </div>
            </section>
        </main>

    )
}

export default About